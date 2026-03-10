# 👩‍💻 Portfólio Profissional

> [!NOTE]
> Website de portfólio profissional para apresentar trajetória, habilidades, projetos e formas de contato de maneira moderna e acessível. Projeto desenvolvido no âmbito do Laboratório de Desenvolvimento de Software (PUC Minas).

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este projeto consiste em um <b>website de portfólio profissional</b> que permite apresentar de forma clara a formação, área de atuação, interesses e objetivos profissionais. O sistema possui seções de <i>Sobre Mim</i> (em português e inglês), <i>Projetos</i> (com linha do tempo e links para repositórios), <i>Experiências</i> profissionais e <i>Contato</i> com formulário funcional. O design é responsivo, com interface amigável e identidade visual coerente com o perfil de futura engenheira de software pela PUC Minas.
      </div>
    </td>
    <td>
      <div>
        <img src="./web/docs/prototipo/prototipo-home.png" alt="Logo/Protótipo do Portfólio" width="120px" onerror="this.style.display='none'"/>
      </div>
    </td>
  </tr> 
</table>

> 💡 **Lab01S01:** `web/docs/prototipo/prototipo-home.png` 

---

## 🚧 Status do Projeto

[![Versão](https://img.shields.io/badge/Versão-v0.1.0-blue?style=for-the-badge)](https://github.com) [![Licença](https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge)](#licença)

### Tecnologias utilizadas

![Nuxt](https://img.shields.io/badge/Nuxt-4+-00DC82?style=flat-square&logo=nuxt.js&logoColor=white) ![Vue](https://img.shields.io/badge/Vue-3+-4FC08D?style=flat-square&logo=vue.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind-4+-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Three.js](https://img.shields.io/badge/Three.js-r170+-000000?style=flat-square&logo=threedotjs&logoColor=white)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Protótipos (Lab01S01)](#-protótipos-lab01s01)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
- [Testes](#-testes)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Portfolio Online:** [Acesse a Aplicação Web](https://gabriel-lacerda-stteinz.vercel.app/)
* 📖 **Documentação do projeto:** [web/docs/README.md](./web/docs/README.md)
  > 📚 **Descrição:** Guias e estrutura do projeto.

---

## 📝 Sobre o Projeto

O **Portfólio Profissional** é um website desenvolvido para apresentar a trajetória acadêmica e profissional, destacando projetos, habilidades e formas de contato. O projeto foi desenvolvido no âmbito da disciplina **Laboratório de Desenvolvimento de Software** (PUC Minas).

- **Motivação:** Criar uma presença online profissional e moderna para divulgação de trabalhos e contato com recrutadores e parceiros.
- **Objetivo:** Apresentar formação (Engenharia de Software pela PUC Minas), área de atuação (Desenvolvimento Web, Backend PHP/Laravel), interesses e objetivos profissionais.
- **Contexto:** Projeto acadêmico com foco em boas práticas de desenvolvimento, design responsivo e hospedagem em nuvem.

---

## 📐 Protótipos (Lab01S01)

O protótipo foi desenvolvido com média fidelidade no Figma, contemplando as seções principais do site.

| Protótipo — Visão Geral (Home) |
| :---: |
| ![Protótipo Home](./web/docs/prototipo/prototipo-home.png) |

**Elementos do protótipo:**
- **Cabeçalho e navegação:** Logo, menu (Home, Works, About-me, Contacts), seletor de idioma (PT/EN)
- **Hero:** Nome, tagline "Future software engineer by PUC Minas", botão "Contact me", citação inspiracional (Charlie Brown Jr.)
- **#projects:** Cards de projetos com tecnologias, link Live e GitHub (Cached)
- **#skills:** Categorias (Languages, Databases, Tools, Frameworks) — TS, JavaScript, HTML, MySQL, VSCode, Git, React, Laravel, Vuetify
- **#about-me:** Texto de apresentação em inglês (Lab01S02 adicionará versão PT)
- **#contacts:** E-mail, mensagem convidando ao contato

> imagem do protótipo em `web/docs/prototipo/prototipo-home.png`

---

## ✨ Funcionalidades Principais

Conforme requisitos do laboratório:

- 👤 **Sobre Mim:** Breve apresentação em português e inglês, destacando formação, área de atuação, interesses e objetivos profissionais.
- 📁 **Projetos:** Linha do tempo de projetos (mais antigo ao mais recente). Cada projeto contém: nome e descrição, tecnologias utilizadas, link para repositório no GitHub, imagem ou GIF com o projeto em funcionamento.
- 💼 **Experiências:** Relato de experiências profissionais, estágios, freelas, participações em projetos open source ou eventos técnicos. Para cada item: empresa/instituição, cargo ou atividade, período e breve descrição.
- 📧 **Contato:** Ícones clicáveis para e-mail, WhatsApp, LinkedIn; formulário com campos nome, e-mail e mensagem, com envio por e-mail (ex.: EmailJS).

---

## 🛠 Tecnologias Utilizadas

Ferramentas e bibliotecas utilizadas no projeto. Recomenda-se as versões listadas (ou superiores) para compatibilidade.

### 💻 Front-end

| Tecnologia | Uso |
| :--- | :--- |
| **Nuxt 4** | Framework (Vue 3) com SSR e rotas baseadas em arquivos |
| **Vue 3** | Interface reativa e componentes |
| **TypeScript** | Tipagem estática |
| **Nuxt UI** | Componentes e Tailwind CSS 4 |
| **Three.js** | Cenas e modelos 3D (GLB) |
| **Spline** | Cenário 3D interativo (Spline Viewer) |
| **EmailJS** | Envio de e-mails do formulário de contato |
| **Iconify (Lucide, Simple Icons)** | Ícones |

---

## 🏗 Arquitetura

O projeto é uma **Single Page Application (SPA)** com pré-renderização da home. A aplicação roda inteiramente no front-end (Nuxt), sem back-end próprio.

- **Camadas:** Páginas (`pages/`), layouts (`layouts/`), componentes reutilizáveis (`components/`), dados do portfólio (`data/`), composables para lógica compartilhada (`composables/`).
- **3D:** Integração com Three.js (modelo GLB na hero) e Spline (cenário interativo via viewer).
- **Contato:** Formulário envia e-mails via EmailJS (client-side).
- **i18n:** Conteúdo em PT/EN via composable e dados localizados.

Para diagramas de arquitetura (macro, fluxos, modelo de dados), inclua os arquivos em `web/docs/` e referencie nesta seção.

---

## 🔧 Instalação e Execução

### Pré-requisitos

* **Node.js:** v18 LTS ou superior (recomendado v20+)
* **Gerenciador de pacotes:** pnpm (recomendado) ou npm

### 🔑 Variáveis de Ambiente

Crie um arquivo **`.env`** na pasta **`web/`** (pode usar `web/.env.example` como base). Variáveis expostas ao front-end devem usar o prefixo `NUXT_PUBLIC_`.

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS | `sua_public_key` |
| `NUXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço EmailJS | `service_xxx` |
| `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID do template de e-mail | `template_xxx` |
| `NUXT_PUBLIC_SPLINE_SCENE_URL` | URL da cena Spline (.splinecode) | `https://prod.spline.design/.../scene.splinecode` |
| `NUXT_PUBLIC_GLB_MODEL_URL` | URL do modelo 3D (GLB). Se vazio, usa arquivo em `public/models/` | `/models/computador-cenario.glb` ou URL externa |
| `NUXT_PUBLIC_SCREEN_OBJECT_NAME` | Nome do objeto "tela" no GLB | `screen` |
| `NUXT_PUBLIC_SCREEN_FLIP` | Girar 180° a textura da tela | `true` ou `false` |
| `NUXT_PUBLIC_SCREEN_NUDGE` | Ajuste fino da posição da tela 3D | `-0.02` |

**Exemplo de `.env` na pasta `web/`:**

```env
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
NUXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
# NUXT_PUBLIC_GLB_MODEL_URL=  # opcional; modelo em public/models/ ou URL externa
```

Para **Vercel:** configure as mesmas variáveis em *Project Settings → Environment Variables*.

### 📦 Instalação de Dependências

Clone o repositório e instale as dependências.

1.  **Clone o Repositório:**

```bash
git clone <URL_DO_SEU_REPOSITÓRIO>
cd <pasta-do-projeto>
```

2.  **Instale as Dependências:**

```bash
pnpm install
# Ou, se quiser instalar só na pasta web: cd web && pnpm install
```

---

### ⚡ Como Executar a Aplicação

#### Executar a aplicação (apenas front-end)

Na raiz: `pnpm run dev`. Ou em `web/`: `cd web && pnpm run dev`. Aplicação em **http://localhost:3000**.
---

## 🚀 Deploy
Instruções claras para deploy em produção.

1.  **Build do Projeto:**

```bash
# Build do Front-end (Nuxt) - Gera a pasta .output
cd web
pnpm run build
# ou npm run build
```

2.  **Configuração do Ambiente de Produção:** Defina as variáveis de ambiente no seu provedor (e.g., Vercel, Railway, Heroku, DigitalOcean).

> 🔑 **Variáveis Cruciais:** Certifique-se de configurar as variáveis de **conexão com o banco de dados** (`SPRING_DATASOURCE_URL`, etc.) para o Back-end e (`NUXT_PUBLIC_API_URL`, `NUXT_PUBLIC_EMAILJS_*`) para o Front-end.

3.  **Execução em Produção:**
    A forma de execução depende do seu provedor, mas geralmente envolve o seguinte:

```bash
# ☕ Execução do Back-end Spring Boot (Java JAR)
java -jar backend/target/nome-do-projeto-0.0.1-SNAPSHOT.jar

# 🟢 Front-end (Nuxt): npx nuxi preview ou serve -s web/.output/public
```

---

## 📂 Estrutura de Pastas

```
.
├── .github/                     # 🤖 CI/CD (Actions).
├── .gitignore                   # 🧹 Ignora arquivos não versionados.
├── README.md                    # 📘 Documentação principal.
├── LICENSE                      # ⚖️ Licença do projeto.
│
└── web/                         # 📁 Aplicação Nuxt (Vue 3 + Nuxt 4)
    ├── .editorconfig            # ✍️ Padronização de estilo de código.
    ├── nuxt.config.ts           # ⚙️ Configuração do Nuxt.
    ├── package.json             # 📦 Dependências.
    │
    ├── app/                     # 📁 Aplicação Nuxt
    │   ├── assets/css/          # 🎨 Estilos globais.
    │   ├── components/          # 🧱 Componentes Vue (base, portfolio, scene).
    │   ├── composables/         # 🎣 Lógica reutilizável.
    │   ├── data/                # 📋 Dados do portfólio.
    │   ├── layouts/             # 📐 Layouts (default, embed).
    │   ├── pages/               # 📄 Rotas (index, embed, experience).
    │   └── app.vue              # 📱 Componente raiz.
    │
    ├── public/                  # 📂 Arquivos estáticos.
    │   └── models/              # 🎮 Modelos 3D (.glb).
    │
    └── docs/                    # 📚 Documentação e protótipos.
        └── prototipo/           # 🎨 Imagens dos protótipos (Lab01S01).
```

---

## 🎥 Demonstração

Use GIFs e prints para mostrar o projeto em ação.

> [!WARNING]
> Dê preferência a hospedar suas imagens em um **CDN** ou no **GitHub** para garantir que elas carreguem rapidamente e não quebrem.

### Protótipo (Lab01S01)

| Protótipo — Visão geral (Home) |
| :---: |
| ![Protótipo Home](./web/docs/prototipo/prototipo-home.png) |

### 🌐 Aplicação Web

Inclua aqui capturas de tela ou GIFs das páginas principais: **Home**, **Experiências** (`/experience`), **Embed** (se aplicável). Exemplo:

| Página | Captura |
| :---: | :---: |
| **Home** | _Sua captura ou GIF_ |
| **Experiências** | _Sua captura ou GIF_ |

---

## 🧪 Testes

O projeto possui scripts de **lint** e **typecheck**. Testes unitários e E2E podem ser adicionados futuramente.

```bash
pnpm run lint      # ESLint
pnpm run typecheck # Verificação de tipos TypeScript
```

*Para testes automatizados (ex.: Vitest, Playwright), configure os scripts no `package.json` e documente aqui.*

---

## 🔗 Documentações utilizadas

* 📖 **Nuxt:** [Documentação Oficial](https://nuxt.com/docs)
* 📖 **Vue 3:** [Documentação Oficial](https://vuejs.org/)
* 📖 **Nuxt UI:** [Componentes e Tailwind](https://ui.nuxt.com/)
* 📖 **Three.js:** [Documentação e exemplos](https://threejs.org/docs/)
* 📖 **Spline:** [Exportar para web](https://spline.design/)
* 📖 **Conventional Commits:** [Padrão de mensagens](https://www.conventionalcommits.org/en/v1.0.0/)
* 📖 **EmailJS:** [Envio de e-mail](https://www.emailjs.com/docs/)

---

## 👥 Autores
Liste os principais contribuidores. Você pode usar links para seus perfis.

| 👤 Nome | 🖼️ Foto | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|----------|-----------------|-------------|-----------|
| Julia Rocha Fiorini | — | [GitHub](https://github.com) | [LinkedIn](https://www.linkedin.com/in) | julia.rochafiorini@gmail.com |
| Gabriel Lemos Lacerda | — | [Stteinz](https://github.com/Stteinz) | [LinkedIn](https://www.linkedin.com/in) | gabriellemoslacerda@gmail.com |

> [!TIP]
> 💡 **Dica:** Escolha uma foto profissional, preferencialmente de rosto, evitando imagens com baixa qualidade, filtros excessivos ou elementos distrativos.

---

## 🤝 Contribuição

1. Faça um `fork` do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`). Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
4. Faça o `push` para a branch (`git push origin feature/minha-feature`).
5. Abra um **Pull Request (PR)**.

---

## 🙏 Agradecimentos
Em ambiente acadêmico, citar fontes e inspirações é crucial (integridade acadêmica). Em ambiente profissional, mostra humildade e conexão com a comunidade.

Gostaria de agradecer aos seguintes canais e pessoas que foram fundamentais para o desenvolvimento deste projeto:

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) - Pelo apoio institucional, estrutura acadêmica e fomento à inovação e boas práticas de engenharia.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) - Pelos valiosos ensinamentos sobre **Arquitetura de Software** e **Padrões de Projeto**.
* [**Fernanda Kipper**](https://www.instagram.com/kipper.dev/) - Pelos valiosos ensinamentos em **Desenvolvimento Web**, **DevOps** e melhores práticas em **Front-end**.
* [**Rodrigo Branas**](https://branas.io/) - Pela didática excepcional em **Clean Architecture** e **Clean Code**.
* [**Código Fonte TV**](https://codigofonte.tv/) - Pelo vasto conteúdo e cobertura de notícias, tutoriais e apoio à comunidade de **Desenvolvimento Web**.

---

## 📄 Licença

Este projeto é distribuído sob a **[Licença MIT](./LICENSE)**.

---
