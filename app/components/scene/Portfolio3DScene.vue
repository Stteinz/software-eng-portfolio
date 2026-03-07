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
    /** Ajuste de posição ao longo da normal da tela. Negativo = mais perto do monitor */
    screenNudge?: number
    /** Multiplicador de escala da tela para preencher melhor o monitor */
    screenScale?: number
  }>(),
  {
    modelUrl: '/models/computador-cenario.glb',
    screenObjectName: 'screen',
    embedUrl: '',
    screenFlip: false,
    screenNudge: -0.02,
    screenScale: 1.0
  }
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const isLoaded = ref(false)
const errorMessage = ref('')

const cleanupState = ref<{
  onResize: () => void
  frameRef: { current: number }
  renderer: { dispose: () => void }
  container: HTMLDivElement
  cssDomElement: HTMLDivElement
} | null>(null)

onUnmounted(() => {
  const s = cleanupState.value
  if (s) {
    window.removeEventListener('resize', s.onResize)
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
    const { CSS3DRenderer, CSS3DObject } = await import('three/addons/renderers/CSS3DRenderer.js')

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8)
    dirLight.position.set(5, 10, 5)
    scene.add(dirLight)

    const loader = new GLTFLoader()
    const gltf = await loader.loadAsync(props.modelUrl)
    const model = gltf.scene
    scene.add(model)

    const modelBox = new THREE.Box3().setFromObject(model)
    const modelCenter = new THREE.Vector3()
    const modelSize = new THREE.Vector3()
    modelBox.getCenter(modelCenter)
    modelBox.getSize(modelSize)

    const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z)
    camera.position.copy(modelCenter).add(new THREE.Vector3(0, 0, maxDim * 1.5))
    controls.target.copy(modelCenter)
    controls.update()

    const cssScene = new THREE.Scene()
    const targetName = (props.screenObjectName || 'screen').toLowerCase()
    let screenMesh: THREE.Mesh | null = null

    model.traverse((obj) => {
      if (!screenMesh && obj instanceof THREE.Mesh && obj.name.toLowerCase() === targetName) {
        screenMesh = obj
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
      let normalWorld = normalAxis.direction.clone().applyQuaternion(screenMesh.getWorldQuaternion(new THREE.Quaternion())).normalize()

      const fromModelCenter = screenCenter.clone().sub(modelCenter).normalize()
      if (normalWorld.dot(fromModelCenter) < 0) {
        normalWorld.multiplyScalar(-1)
      }

      const worldUp = new THREE.Vector3(0, 1, 0)
      const planeAxisCandidates = planeAxes.map((axis) => ({
        ...axis,
        worldDirection: axis.direction.clone().applyQuaternion(screenMesh.getWorldQuaternion(new THREE.Quaternion())).normalize()
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
      if (horizontalWorld.clone().cross(verticalWorld).dot(normalWorld) < 0) {
        horizontalWorld.multiplyScalar(-1)
      }

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

      const getAxisWorldScale = (axisKey: 'x' | 'y' | 'z') => {
        if (axisKey === 'x') return worldScale.x
        if (axisKey === 'y') return worldScale.y
        return worldScale.z
      }

      const width = horizontalAxis.size * getAxisWorldScale(horizontalAxis.key)
      const height = verticalAxis.size * getAxisWorldScale(verticalAxis.key)

      console.log('[Portfolio3DScene] Tela selecionada:', {
        name: screenMesh.name || '(sem nome)',
        width,
        height
      })
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

      const nudge = props.screenNudge ?? -0.02
      const worldPos = screenCenter.clone().add(normalWorld.clone().multiplyScalar(nudge))

      const basis = new THREE.Matrix4().makeBasis(horizontalWorld, verticalWorld, normalWorld)
      css3dObject.position.copy(worldPos)
      css3dObject.quaternion.setFromRotationMatrix(basis)
      const scaleMultiplier = props.screenScale ?? 1.0
      const scaleX = (width * scaleMultiplier) / 1920
      const scaleY = (height * scaleMultiplier) / 1080
      css3dObject.scale.set(-scaleX, scaleY, 0.001)

      iframe.style.transform = 'translate(-50%, -50%)'

      cssScene.add(css3dObject)
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
</style>
