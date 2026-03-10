# Modelos 3D (GLB)

O arquivo `computador-cenario.glb` **não vai para o Git** (GitHub limita a 100MB).

## Opção 1: GitHub Releases (mais simples)

1. Crie uma release no seu repositório: **Releases → Create a new release**
2. Dê uma tag (ex: `v1.0`) e título
3. Arraste o `computador-cenario.glb` para anexar o arquivo
4. Publicar a release
5. Copie a URL de download do arquivo (botão direito no link → Copiar endereço)
6. No `.env` do projeto: `NUXT_PUBLIC_GLB_MODEL_URL=https://github.com/SEU_USER/software-eng-portfolio/releases/download/v1.0/computador-cenario.glb`

**Importante:** Para evitar erro 302, use a URL final após o redirect. Se houver problema de CORS, use a Opção 2.

## Opção 2: Hospedagem com CORS

Se o deploy estiver na Vercel/Netlify e o modelo em outro domínio, o servidor do GLB precisa permitir CORS. Serviços que funcionam:

- **Cloudflare R2** (bucket público) – configura CORS no painel
- **Vercel Blob** – se o deploy for na Vercel
- **AWS S3** ou **Backblaze B2** – bucket público com CORS configurado

Depois, no `.env`: `NUXT_PUBLIC_GLB_MODEL_URL=https://sua-url-publica.com/computador-cenario.glb`

## Desenvolvimento local

Para rodar em modo dev, basta colocar o `computador-cenario.glb` nesta pasta. O app usa `/models/computador-cenario.glb` por padrão (sem env).

## Mesh da tela

No Blender, nomeie o mesh da tela do computador como **Screen** (ou use `NUXT_PUBLIC_SCREEN_OBJECT_NAME` no `.env`).
