# Portfolio – Gabriel Lacerda

Portfolio pessoal de **Gabriel Lacerda**, Full Stack Developer. Desenvolvido com [Nuxt](https://nuxt.com) e [Nuxt UI](https://ui.nuxt.com).

## Estrutura do projeto

- **`app/app.vue`** – Layout principal com header (logo, navegação, tema, GitHub), menu mobile e footer.
- **`app/pages/index.vue`** – Página única com todas as seções: Hero, About, Services, Skills, Education, Experience, Projects, Testimonials, Contact.
- **`app/components/`** – `AppLogo`, `PortfolioNav`.
- **`app/data/portfolio.ts`** – Dados centralizados (nome, cargo, localização, links). Edite este arquivo para atualizar suas informações em todo o site.
- **`app/assets/css/main.css`** – Estilos globais e tema (incluindo scroll suave para âncoras).

## Como rodar

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:3000`.

## Personalização

1. **Dados pessoais e links**  
   Edite `app/data/portfolio.ts`: nome, cargo, localização, tagline, GitHub e LinkedIn.

2. **Conteúdo das seções**  
   Em `app/pages/index.vue` ajuste os arrays: `education`, `experience`, `projects`, `testimonials` e o texto da seção About.

3. **Formulário de contato**  
   A função `onContactSubmit` em `app/pages/index.vue` só faz `console.log` por enquanto. Integre com o serviço que preferir (Formspree, Resend, etc.).

## Build e deploy

```bash
pnpm build
pnpm preview
```

A rota `/` está configurada para pré-render (SSG). Para deploy, use Vercel, Netlify ou qualquer host compatível com Nuxt.
