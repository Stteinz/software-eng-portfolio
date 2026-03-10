<script setup lang="ts">
/**
 * Cena 3D com modelo GLB e portfólio na tela do computador.
 * Usa Three.js (WebGL + CSS3DRenderer) para exibir o iframe do /embed na tela do modelo.
 *
 * PRÉ-REQUISITO: No Blender, nomeie o mesh da tela do computador como "Screen" (ou o nome em screenObjectName).
 */
const props = withDefaults(
  defineProps<{
    /** URL do modelo GLB (ex: /models/computador.glb) */
    modelUrl?: string
    /** Nome do objeto da tela no GLB (ex: "Screen", "Monitor", "Display") */
    screenObjectName?: string
    /** URL do iframe - portfólio (ex: /embed). Em produção use a URL completa. */
    embedUrl?: string
    /** Girar a tela 180° (use se o portfólio aparecer "de costas") */
    screenFlip?: boolean
    /** Deslocamento linear da tela: negativo=frente, positivo=tras */
    screenNudge?: number
    /** Multiplicador de escala da tela para preencher melhor o monitor */
    screenScale?: number
    /** Inclinacao da tela em radianos para acompanhar o monitor */
    screenTilt?: number
  }>(),
  {
    modelUrl: '/models/computador-cenario.glb',
    screenObjectName: 'screen',
    embedUrl: '',
    screenFlip: false,
    screenNudge: -0.02,
    screenScale: 1.0,
    screenTilt: 0.18
  }
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const isLoaded = ref(false)
const errorMessage = ref('')
const cameraLocked = ref(false)

const cleanupState = ref<{
  onResize: () => void
  onPointerLeave?: () => void
  onPointerMove?: (event: PointerEvent) => void
  frameRef: { current: number }
  renderer: { dispose: () => void }
  container: HTMLDivElement
  cssDomElement: HTMLDivElement
} | null>(null)

onUnmounted(() => {
  const s = cleanupState.value
  if (s) {
    window.removeEventListener('resize', s.onResize)
    if (s.onPointerLeave) s.container.removeEventListener('pointerleave', s.onPointerLeave)
    if (s.onPointerMove) s.container.removeEventListener('pointermove', s.onPointerMove)
    cancelAnimationFrame(s.frameRef.current)
    s.renderer.dispose()
    try {
      s.container.removeChild(s.cssDomElement)
    } catch {
      /* já removido */
    }
  }
})

onMounted(async () => {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  try {
    const THREE = await import('three')
    const { OrbitControls } = await import('three/addons/controls/OrbitControls.js')
    const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js')
    const { DRACOLoader } = await import('three/addons/loaders/DRACOLoader.js')
    const { CSS3DRenderer, CSS3DObject } = await import('three/addons/renderers/CSS3DRenderer.js')

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')

    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a0f)

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.set(0, 2, 5)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const cssRenderer = new CSS3DRenderer()
    cssRenderer.setSize(container.clientWidth, container.clientHeight)
    cssRenderer.domElement.style.position = 'absolute'
    cssRenderer.domElement.style.top = '0'
    cssRenderer.domElement.style.left = '0'
    cssRenderer.domElement.style.zIndex = '1'
    cssRenderer.domElement.style.pointerEvents = 'none'
    container.appendChild(cssRenderer.domElement)

    canvas.style.pointerEvents = 'auto'

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.target.set(0, 1, 0)
    controls.enableRotate = false
    controls.enablePan = false
    controls.enableZoom = false

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dirLight.position.set(5, 10, 5)
    scene.add(dirLight)

    const gltf = await loader.loadAsync(props.modelUrl)
    const model = gltf.scene
    scene.add(model)

    const modelBox = new THREE.Box3().setFromObject(model)
    const modelCenter = new THREE.Vector3()
    const modelSize = new THREE.Vector3()
    modelBox.getCenter(modelCenter)
    modelBox.getSize(modelSize)

    const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z)
    // Enquadramento inicial de seguranca antes de calcularmos a camera da cena guiada.
    const defaultCameraStartPosition = modelCenter.clone().add(new THREE.Vector3(0, maxDim * 0.75, maxDim * 2.8))
    const defaultTargetStartPosition = modelCenter.clone().add(new THREE.Vector3(0, maxDim * 0.2, 0))
    camera.position.copy(defaultCameraStartPosition)
    controls.target.copy(defaultTargetStartPosition)
    controls.update()

    const cssScene = new THREE.Scene()
    // Descobrimos o mesh da tela e o mesh principal do computador para alinhar o iframe
    // e inferir qual lado do monitor deve ser tratado como a face frontal.
    const targetName = (props.screenObjectName || 'screen').toLowerCase()
    let screenMesh: THREE.Mesh | null = null
    let computerMesh: THREE.Mesh | null = null

    model.traverse((obj) => {
      if (!screenMesh && obj instanceof THREE.Mesh && obj.name.toLowerCase() === targetName) {
        screenMesh = obj
      }

      if (!computerMesh && obj instanceof THREE.Mesh && obj.name.toLowerCase().includes('computador')) {
        computerMesh = obj
      }
    })

    if (!screenMesh) {
      const names: string[] = []
      model.traverse((obj) => { if (obj.name) names.push(obj.name) })
      errorMessage.value = `Objeto "${props.screenObjectName}" não encontrado. Objetos no modelo: ${names.join(', ') || '(nenhum nomeado)'}`
      console.warn('[Portfolio3DScene] Objetos disponíveis:', names)
    } else {
      screenMesh.updateWorldMatrix(true, false)
      if (!screenMesh.geometry.boundingBox) {
        screenMesh.geometry.computeBoundingBox()
      }

      const localBox = screenMesh.geometry.boundingBox?.clone()
      if (!localBox) {
        errorMessage.value = 'Nao foi possivel calcular a geometria da tela.'
        return
      }

      // Reconstruimos os eixos da tela a partir do bounding box para obter largura,
      // altura, profundidade e orientacao reais em mundo, sem depender do GLB estar perfeito.
      const localCenter = localBox.getCenter(new THREE.Vector3())
      const localSize = localBox.getSize(new THREE.Vector3())
      const worldScale = screenMesh.getWorldScale(new THREE.Vector3())
      const localAxes = [
        { key: 'x', size: localSize.x, direction: new THREE.Vector3(1, 0, 0) },
        { key: 'y', size: localSize.y, direction: new THREE.Vector3(0, 1, 0) },
        { key: 'z', size: localSize.z, direction: new THREE.Vector3(0, 0, 1) }
      ].sort((a, b) => a.size - b.size)

      const normalAxis = localAxes[0]
      const planeAxes = localAxes.slice(1)
      const screenCenter = localCenter.clone().applyMatrix4(screenMesh.matrixWorld)
      const meshQuaternion = screenMesh.getWorldQuaternion(new THREE.Quaternion())
      const surfaceNormalWorld = normalAxis.direction.clone().applyQuaternion(meshQuaternion).normalize()
      const computerCenter = computerMesh
        ? new THREE.Box3().setFromObject(computerMesh).getCenter(new THREE.Vector3())
        : modelCenter.clone()
      const outwardFromComputer = screenCenter.clone().sub(computerCenter).normalize()

      if (surfaceNormalWorld.dot(outwardFromComputer) < 0) {
        surfaceNormalWorld.multiplyScalar(-1)
      }

      const worldUp = new THREE.Vector3(0, 1, 0)
      const planeAxisCandidates = planeAxes.map((axis) => ({
        ...axis,
        worldDirection: axis.direction.clone().applyQuaternion(meshQuaternion).normalize()
      }))

      let verticalAxis = planeAxisCandidates[0]
      let horizontalAxis = planeAxisCandidates[1]
      if (Math.abs(planeAxisCandidates[1].worldDirection.dot(worldUp)) > Math.abs(planeAxisCandidates[0].worldDirection.dot(worldUp))) {
        verticalAxis = planeAxisCandidates[1]
        horizontalAxis = planeAxisCandidates[0]
      }

      let verticalWorld = verticalAxis.worldDirection.clone()
      if (verticalWorld.dot(worldUp) < 0) {
        verticalWorld.multiplyScalar(-1)
      }

      let horizontalWorld = horizontalAxis.worldDirection.clone()
      if (horizontalWorld.clone().cross(verticalWorld).dot(surfaceNormalWorld) < 0) {
        horizontalWorld.multiplyScalar(-1)
      }

      let normalWorld = surfaceNormalWorld.clone()
      const toCamera = camera.position.clone().sub(screenCenter).normalize()
      const shouldFlipToCamera = normalWorld.dot(toCamera) < 0
      if (shouldFlipToCamera) {
        normalWorld.multiplyScalar(-1)
        horizontalWorld.multiplyScalar(-1)
      }

      if (props.screenFlip) {
        normalWorld.multiplyScalar(-1)
        horizontalWorld.multiplyScalar(-1)
      }

      const tilt = props.screenTilt ?? 0.14
      verticalWorld.applyAxisAngle(horizontalWorld, tilt)
      normalWorld.applyAxisAngle(horizontalWorld, tilt)

      const getAxisWorldScale = (axisKey: 'x' | 'y' | 'z') => {
        if (axisKey === 'x') return worldScale.x
        if (axisKey === 'y') return worldScale.y
        return worldScale.z
      }

      const width = horizontalAxis.size * getAxisWorldScale(horizontalAxis.key)
      const height = verticalAxis.size * getAxisWorldScale(verticalAxis.key)
      const depth = normalAxis.size * getAxisWorldScale(normalAxis.key)
      // Estes pontos definem a "cena cinematografica": camera na frente do modelo (na direcao
      // que a tela encara), longe no inicio, aproximacao ate a tela e alvo centralizado no monitor.
      const cameraEndTarget = screenCenter.clone().add(verticalWorld.clone().multiplyScalar(height * 0.02))
      const cameraApproachDirection = normalWorld.clone()
      const cameraStartPosition = screenCenter
        .clone()
        .add(cameraApproachDirection.clone().multiplyScalar(maxDim * 2.5))
        .add(verticalWorld.clone().multiplyScalar(maxDim * 0.55))
        .add(horizontalWorld.clone().multiplyScalar(maxDim * 0.15))
      const targetStartPosition = cameraEndTarget.clone()
      const cameraEndPosition = screenCenter
        .clone()
        .add(cameraApproachDirection.clone().multiplyScalar(maxDim * 0.08))
        .add(verticalWorld.clone().multiplyScalar(maxDim * 0.04))
      const cameraMidPosition = cameraStartPosition.clone().lerp(cameraEndPosition, 0.55)
      const cameraPath = new THREE.CatmullRomCurve3([
        cameraStartPosition.clone(),
        cameraMidPosition,
        cameraEndPosition
      ])
      const targetPath = new THREE.CatmullRomCurve3([
        targetStartPosition.clone(),
        cameraEndTarget.clone(),
        cameraEndTarget.clone()
      ])
      // progress vai de 0 -> 1 conforme o hover; x/y guardam o parallax do mouse.
      const pointerState = {
        active: false,
        x: 0,
        y: 0,
        progress: 0,
        targetProgress: 0
      }

      console.log('[Portfolio3DScene] Tela selecionada:', {
        name: screenMesh.name || '(sem nome)',
        width,
        height,
        depth
      })
      camera.position.copy(cameraStartPosition)
      controls.target.copy(targetStartPosition)
      controls.update()
      screenMesh.visible = false
      const embedUrl = props.embedUrl || `${window.location.origin}/embed`
      const iframe = document.createElement('iframe')
      iframe.style.width = '1920px'
      iframe.style.height = '1080px'
      iframe.style.border = 'none'
      iframe.style.backgroundColor = '#0f0f14'
      iframe.style.transformOrigin = 'center center'
      iframe.src = embedUrl

      const css3dObject = new CSS3DObject(iframe)
      css3dObject.element.style.pointerEvents = 'auto'

      // A tela HTML e posicionada na face frontal do mesh "screen".
      // Ajuste screenNudge para empurrar um pouco para fora ou para dentro.
      const inset = props.screenNudge ?? -0.02
      const frontFacePos = screenCenter
        .clone()
        .add(surfaceNormalWorld.clone().multiplyScalar(depth / 2))
      const worldPos = frontFacePos.sub(surfaceNormalWorld.clone().multiplyScalar(inset))

      const basis = new THREE.Matrix4().makeBasis(horizontalWorld, verticalWorld, normalWorld)
      css3dObject.position.copy(worldPos)
      css3dObject.quaternion.setFromRotationMatrix(basis)
      const scaleMultiplier = props.screenScale ?? 1.0
      const scaleX = (width * scaleMultiplier) / 1920
      const scaleY = (height * scaleMultiplier) / 1080
      css3dObject.scale.set(scaleX, scaleY, 0.001)

      iframe.style.transform = 'translate(-50%, -50%)'

      cssScene.add(css3dObject)

      const marginPx = 100

      function isPointerNearScreen (clientX: number, clientY: number): boolean {
        const rect = container.getBoundingClientRect()
        if (!rect.width || !rect.height) return false
        const corners = [
          screenCenter.clone().add(horizontalWorld.clone().multiplyScalar(width / 2)).add(verticalWorld.clone().multiplyScalar(height / 2)),
          screenCenter.clone().add(horizontalWorld.clone().multiplyScalar(-width / 2)).add(verticalWorld.clone().multiplyScalar(height / 2)),
          screenCenter.clone().add(horizontalWorld.clone().multiplyScalar(-width / 2)).add(verticalWorld.clone().multiplyScalar(-height / 2)),
          screenCenter.clone().add(horizontalWorld.clone().multiplyScalar(width / 2)).add(verticalWorld.clone().multiplyScalar(-height / 2))
        ]
        let minX = Infinity; let maxX = -Infinity; let minY = Infinity; let maxY = -Infinity
        for (const c of corners) {
          const v = c.clone().project(camera)
          const px = (v.x + 1) * 0.5 * rect.width
          const py = (1 - v.y) * 0.5 * rect.height
          minX = Math.min(minX, px)
          maxX = Math.max(maxX, px)
          minY = Math.min(minY, py)
          maxY = Math.max(maxY, py)
        }
        const px = clientX - rect.left
        const py = clientY - rect.top
        return px >= minX - marginPx && px <= maxX + marginPx && py >= minY - marginPx && py <= maxY + marginPx
      }

      const onPointerMove = (event: PointerEvent) => {
        const rect = container.getBoundingClientRect()
        if (!rect.width || !rect.height) return
        pointerState.x = (event.clientX - rect.left) / rect.width - 0.5
        pointerState.y = (event.clientY - rect.top) / rect.height - 0.5
        pointerState.targetProgress = isPointerNearScreen(event.clientX, event.clientY) ? 1 : 0
      }

      const onPointerLeave = () => {
        pointerState.targetProgress = 0
      }

      container.addEventListener('pointerleave', onPointerLeave)
      container.addEventListener('pointermove', onPointerMove)

      const frameRef = { current: 0 }

      function animate () {
        frameRef.current = requestAnimationFrame(animate)
        const locked = cameraLocked.value

        controls.enableRotate = locked
        controls.enablePan = locked
        controls.enableZoom = locked

        if (locked) {
          controls.update()
        } else {
          pointerState.progress = THREE.MathUtils.lerp(pointerState.progress, pointerState.targetProgress, 0.04)
          const currentCameraPos = cameraPath.getPoint(pointerState.progress)
          const currentTarget = targetPath.getPoint(pointerState.progress)
          const parallax = Math.max(pointerState.progress, 0.15)
          const cameraOffset = horizontalWorld.clone().multiplyScalar(pointerState.x * maxDim * 0.18 * parallax)
          const targetOffset = horizontalWorld.clone().multiplyScalar(pointerState.x * maxDim * 0.1 * parallax)
            .add(verticalWorld.clone().multiplyScalar(pointerState.y * maxDim * 0.08 * parallax))

          camera.position.copy(currentCameraPos.add(cameraOffset))
          controls.target.copy(currentTarget.add(targetOffset))
          controls.update()
        }
        renderer.render(scene, camera)
        cssRenderer.render(cssScene, camera)
      }
      animate()

      window.addEventListener('resize', onResize)

      cleanupState.value = {
        onResize,
        onPointerLeave,
        onPointerMove,
        frameRef,
        renderer,
        container,
        cssDomElement: cssRenderer.domElement
      }

      isLoaded.value = true
      return
    }

    isLoaded.value = true

    function onResize () {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      cssRenderer.setSize(w, h)
    }

    const frameRef = { current: 0 }
    function animate () {
      frameRef.current = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
      cssRenderer.render(cssScene, camera)
    }
    animate()

    window.addEventListener('resize', onResize)

    cleanupState.value = {
      onResize,
      frameRef,
      renderer,
      container,
      cssDomElement: cssRenderer.domElement
    }
  } catch (e) {
    console.error('[Portfolio3DScene]', e)
    const msg = e instanceof Error ? e.message : String(e)
    if (msg.includes('404') || msg.includes('fetch')) {
      errorMessage.value = 'Modelo GLB não encontrado. Coloque seu .glb em public/models/ (ex: computador-cenario.glb)'
    } else {
      errorMessage.value = msg
    }
  }
})
</script>

<template>
  <div ref="containerRef" class="portfolio-3d-scene">
    <canvas ref="canvasRef" class="portfolio-3d-canvas" />
    <button
      v-if="isLoaded && !errorMessage"
      type="button"
      :title="cameraLocked ? 'Desbloquear câmera' : 'Travar câmera e mover o modelo'"
      class="camera-lock-btn"
      :class="{ 'camera-lock-btn--active': cameraLocked }"
      @click="cameraLocked = !cameraLocked"
    >
      <UIcon :name="cameraLocked ? 'i-lucide-lock' : 'i-lucide-lock-open'" class="w-4 h-4" />
      {{ cameraLocked ? 'Câmera travada' : 'Travar câmera' }}
    </button>
    <p v-if="errorMessage" class="portfolio-3d-error">
      {{ errorMessage }}
    </p>
    <p v-else-if="!isLoaded" class="portfolio-3d-loading">
      Carregando cena 3D...
    </p>
  </div>
</template>

<style scoped>
.portfolio-3d-scene {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.portfolio-3d-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.portfolio-3d-error,
.portfolio-3d-loading {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--portfolio-text-muted);
  font-size: 0.875rem;
  text-align: center;
}

.camera-lock-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(15, 15, 20, 0.85);
  border: 1px solid var(--portfolio-border);
  color: var(--portfolio-text-muted);
  font-size: 0.8125rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.camera-lock-btn:hover {
  color: var(--portfolio-text);
  border-color: var(--portfolio-accent);
}

.camera-lock-btn--active {
  border-color: var(--portfolio-accent);
  color: var(--portfolio-accent);
}
</style>
