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
  }>(),
  {
    modelUrl: '/models/computador-cenario.glb',
    screenObjectName: 'Screen',
    embedUrl: '',
    screenFlip: false,
    screenNudge: -0.02
  }
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const isLoaded = ref(false)
const errorMessage = ref('')

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

    const cssScene = new THREE.Scene()
    let screenMesh: THREE.Mesh | null = null
    model.traverse((obj) => {
      if (obj.name === props.screenObjectName && obj instanceof THREE.Mesh) {
        screenMesh = obj
      }
    })

    if (!screenMesh) {
      const names: string[] = []
      model.traverse((obj) => { if (obj.name) names.push(obj.name) })
      errorMessage.value = `Objeto "${props.screenObjectName}" não encontrado. Objetos no modelo: ${names.join(', ') || '(nenhum nomeado)'}`
      console.warn('[Portfolio3DScene] Objetos disponíveis:', names)
    } else {
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

      screenMesh.updateWorldMatrix(true, false)
      const worldPos = new THREE.Vector3()
      const worldQuat = new THREE.Quaternion()
      const worldScale = new THREE.Vector3()
      screenMesh.getWorldPosition(worldPos)
      screenMesh.getWorldQuaternion(worldQuat)
      screenMesh.getWorldScale(worldScale)

      const box = new THREE.Box3().setFromObject(screenMesh)
      const size = new THREE.Vector3()
      box.getSize(size)

      const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(worldQuat)
      const nudge = props.screenNudge ?? -0.02
      worldPos.add(normal.clone().multiplyScalar(nudge))

      css3dObject.position.copy(worldPos)
      css3dObject.quaternion.copy(worldQuat)
      if (props.screenFlip) {
        css3dObject.rotateY(Math.PI)
      }
      const scaleX = size.x / 1920
      const scaleY = size.y / 1080
      css3dObject.scale.set(scaleX, scaleY, 0.001)

      iframe.style.transform = 'translate(-50%, -50%)'

      cssScene.add(css3dObject)
    }

    const box3 = new THREE.Box3().setFromObject(model)
    const center = new THREE.Vector3()
    const size2 = new THREE.Vector3()
    box3.getCenter(center)
    box3.getSize(size2)
    const maxDim = Math.max(size2.x, size2.y, size2.z)
    camera.position.copy(center).add(new THREE.Vector3(0, 0, maxDim * 1.5))
    controls.target.copy(center)
    controls.update()

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

    let frameId: number
    function animate () {
      frameId = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
      cssRenderer.render(cssScene, camera)
    }
    animate()

    window.addEventListener('resize', onResize)

    onUnmounted(() => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(frameId)
      renderer.dispose()
      container?.removeChild(cssRenderer.domElement)
    })
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
