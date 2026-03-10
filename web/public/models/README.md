# Modelos 3D (GLB)

Coloque aqui seu arquivo `.glb` com o cenário e o computador.

**Arquivo esperado:** `computador-cenario.glb` (ou configure `NUXT_PUBLIC_GLB_MODEL_URL` no `.env`)

**Importante:** No Blender, nomeie o mesh da **tela do computador** como `Screen` (ou configure `NUXT_PUBLIC_SCREEN_OBJECT_NAME` no `.env`).

---

**Nota:** Arquivos `.glb` não são versionados no Git (podem exceder 100MB). Para deploy, hospede o modelo em CDN ou storage e defina `NUXT_PUBLIC_GLB_MODEL_URL` com a URL pública.
