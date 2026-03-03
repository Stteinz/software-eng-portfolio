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
        <img src="./docs/prototipo/prototipo-home.png" alt="Logo/Protótipo do Portfólio" width="120px" onerror="this.style.display='none'"/>
      </div>
    </td>
  </tr> 
</table>

> 💡 **Lab01S01:** `docs/prototipo/prototipo-home.png` 

---

## 🚧 Status do Projeto

[![Versão](https://img.shields.io/badge/Versão-v0.1.0-blue?style=for-the-badge)](https://github.com) [![Licença](https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge)](#licença)

### Tecnologias previstas

![Nuxt](https://img.shields.io/badge/Nuxt-3+-00DC82?style=flat-square&logo=nuxt.js&logoColor=white) ![Vue](https://img.shields.io/badge/Vue-3+-4FC08D?style=flat-square&logo=vue.js&logoColor=white) ![Three.js](https://img.shields.io/badge/Three.js-r170+-000000?style=flat-square&logo=threedotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript&logoColor=white)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Protótipos (Lab01S01)](#-protótipos-lab01s01)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
  - [Exemplos de diagramas](#exemplos-de-diagramas)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração](#-demonstração)
  - [Aplicativo Mobile](#-aplicativo-mobile)
  - [Aplicação Web](#-aplicação-web)
  - [Exemplo de saída no Terminal (para Back-end, API, CLI)](#-exemplo-de-saída-no-terminal-para-back-end-api-cli)
- [Testes](#-testes)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autores](#-autores)
- [Contribuição](#-contribuição)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Demo Online:** [Acesse a Aplicação Web](<link-da-demo-web>)
  > 💻 **Descrição:** Link para a aplicação em ambiente de produção (Ex: hospedado na Vercel, Netlify ou AWS S3).
* 📱 **Download Mobile:** [App Store](<link-app-store>) | [Google Play](<link-google-play>) | [APK Direto](<link-para-apk-direto>)
  > 📱 **Descrição:** Links diretos para download nas lojas de aplicativos (se aplicável) e para o arquivo de instalação direta no Android (APK).
* 📖 **Documentação:** [docs/README.md](./docs/README.md)
  > 📚 **Descrição:** Guias para Blender, integração 3D e estrutura do projeto.

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
| ![Protótipo Home](./docs/prototipo/prototipo-home.png) |

**Elementos do protótipo:**
- **Cabeçalho e navegação:** Logo, menu (Home, Works, About-me, Contacts), seletor de idioma (PT/EN)
- **Hero:** Nome, tagline "Future software engineer by PUC Minas", botão "Contact me", citação inspiracional (Charlie Brown Jr.)
- **#projects:** Cards de projetos com tecnologias, link Live e GitHub (Cached)
- **#skills:** Categorias (Languages, Databases, Tools, Frameworks) — TS, JavaScript, HTML, MySQL, VSCode, Git, React, Laravel, Vuetify
- **#about-me:** Texto de apresentação em inglês (Lab01S02 adicionará versão PT)
- **#contacts:** E-mail, mensagem convidando ao contato

> imagem do protótipo em `docs/prototipo/prototipo-home.png`

---

## ✨ Funcionalidades Principais

Conforme requisitos do laboratório:

- 👤 **Sobre Mim:** Breve apresentação em português e inglês, destacando formação, área de atuação, interesses e objetivos profissionais.
- 📁 **Projetos:** Linha do tempo de projetos (mais antigo ao mais recente). Cada projeto contém: nome e descrição, tecnologias utilizadas, link para repositório no GitHub, imagem ou GIF com o projeto em funcionamento.
- 💼 **Experiências:** Relato de experiências profissionais, estágios, freelas, participações em projetos open source ou eventos técnicos. Para cada item: empresa/instituição, cargo ou atividade, período e breve descrição.
- 📧 **Contato:** Ícones clicáveis para e-mail, WhatsApp, LinkedIn; formulário com campos nome, e-mail e mensagem, com envio por e-mail (ex.: EmailJS).

---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas, frameworks e bibliotecas foram utilizados na construção deste projeto. Recomenda-se o uso das versões listadas (ou superiores) para garantir a compatibilidade.

### 💻 Front-end

* **Framework/Biblioteca:** Nuxt 3 (Vue 3)
* **Linguagem/Superset:** TypeScript, JavaScript ES6+
* **Gráficos 3D:** Three.js
* **Estilização:** [Ex: Tailwind CSS, Sass, Styled Components, Material UI]
* **Envio de e-mail:** EmailJS

### 🖥️ Back-end

* **Linguagem/Runtime:** [Ex: Java 17 (JDK), Node.js v20, Python 3.11]
* **Framework:** [Ex: Spring Boot 3.x, NestJS, Express, Django]
* **Banco de Dados:** [Ex: PostgreSQL, MySQL, MongoDB]
* **ORM / Query Builder:** [Ex: Hibernate/JPA, Prisma, TypeORM]
* **Autenticação:** [Ex: JWT, OAuth2, Spring Security]

### 📱 Mobile (Opcional)

* **Framework:** [Ex: React Native, Flutter, Kotlin Multiplatform]
* **Ferramentas:** [Ex: Expo, Android Studio, Xcode]

### ⚙️ Infraestrutura & DevOps

* **Containerização:** [Ex: Docker, Docker Compose]
* **Orquestração:** [Ex: Kubernetes (K8s)]
* **Cloud:** [Ex: AWS (EC2, RDS, S3), Vercel, Heroku, Google Cloud]
* **CI/CD:** [Ex: GitHub Actions, Jenkins, SonarQube]

---

## 🏗 Arquitetura

Descreva aqui a **arquitetura completa do sistema**, explicando como as camadas, módulos e componentes foram organizados. Informe também **por que** essa arquitetura foi escolhida e **quais problemas ela ajuda a resolver**.

Você pode incluir:

- **Visão geral da arquitetura** (ex.: camadas, módulos, microsserviços, monólito modular, hexagonal, MVC etc.)
- **Principais componentes** e o papel de cada um
- **Padrões de design adotados** (ex.: Repository, Service Layer, DTOs, Factory, Observer)
- **Fluxo de dados** entre as partes do sistema
- **Tecnologias utilizadas em cada camada**
- **Decisões arquiteturais importantes**
- **Trade-offs** ou limitações relevantes

### Exemplos de diagramas

Para melhor visualização e entendimento da estrutura do sistema, os diagramas principais estão organizados lado a lado.

| Diagrama de Arquitetura | Detalhe da Arquitetura |
| :---: | :---: |
| **Visão Geral (Macro)** | **Camada de Serviço (Micro)** |
| | |
| **Modelo de Dados (Entidades)** | **Fluxo de Autenticação** |
| | |
| **Infraestrutura (Cloud)** | **API Gateway (Rotas)** |
| | |

---

## 🔧 Instalação e Execução

### Pré-requisitos
Certifique-se de que o usuário tenha o ambiente configurado.

* **Java JDK:** Versão **17** ou superior (Necessário para o **Back-end Spring Boot**)
* **Node.js:** Versão LTS (v18.x ou superior) (Necessário para o **Front-end Nuxt**)
* **Gerenciador de Pacotes:** npm ou yarn
* **Docker** (Opcional, mas **altamente recomendado** para rodar o Banco de Dados)

### 🔑 Variáveis de Ambiente

Crie arquivos `.env` específicos e/ou configure as variáveis de ambiente no seu sistema para cada parte da aplicação.

#### 1 Back-end (Spring Boot)

Configure estas variáveis como **variáveis de ambiente do sistema** ou em um arquivo de configuração do Spring (ex: `application.properties`/`application.yml`).

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `SERVER_PORT` | Porta onde o Back-end será executado. | `8080` |
| `SPRING_DATASOURCE_URL` | URL de conexão JDBC (PostgreSQL). | `jdbc:postgresql://localhost:5432/meubanco` |
| `SPRING_DATASOURCE_USERNAME` | Usuário do banco de dados. | `postgres` |
| `SPRING_DATASOURCE_PASSWORD` | Senha do banco de dados. | `senha-segura-123` |
| `JWT_SECRET` | Chave secreta para assinatura de tokens (Opcional). | `chave_super_segura_base64` |

#### 2 Front-end (Nuxt)

Crie um arquivo **`.env`** na raiz do projeto e use o prefixo `NUXT_PUBLIC_` para expor as variáveis ao *bundle* da aplicação.

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `NUXT_PUBLIC_API_URL` | URL base do endpoint do Backend (se houver). | `http://localhost:8080/api` |
| `NUXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço EmailJS. | `seu_service_id_aqui` |
| `NUXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID do template de e-mail. | `seu_template_id_aqui` |
| `NUXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Chave pública EmailJS. | `sua_public_key_aqui` |

---

#### 3. Exemplos de Variáveis de Ambiente na Vercel

A Vercel permite configurar variáveis no painel (Project Settings > Environment Variables).
Aqui estão exemplos comuns utilizadas em aplicações front-end e full-stack:

##### **Exemplo 4 – Frontend com Nuxt (EmailJS)**

```
NUXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME=seu_template_id_for_me_aqui
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER=seu_template_id_for_sender_aqui
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

> **Obs:** As variáveis de ambiente em projetos **Nuxt** precisam começar com `NUXT_PUBLIC_` para que o Nuxt as reconheça e as inclua no *bundle* do frontend.

---

Para adicionar essas variáveis:

1.  Acesse a página de Environment Variables do seu projeto no Vercel (ex.: `https://vercel.com/<seu-usuario>/<seu-projeto>/settings/environment-variables`)
2.  Clique em **"Add"** para adicionar cada variável com o nome e valor correspondente.

Alternativamente, crie um arquivo **`.env.local`** na raiz do projeto:

```
NUXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_ME=seu_template_id_for_me_aqui
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID_FOR_SENDER=seu_template_id_for_sender_aqui
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

### 📦 Instalação de Dependências

Clone o repositório e instale as dependências.

1.  **Clone o Repositório:**

```bash
git clone <URL_DO_SEU_REPOSITÓRIO>
cd <pasta-do-projeto>
```

2.  **Instale as Dependências (Monorepo):**


#### Front-end (Nuxt)

```bash
cd frontend
npm install
# ou
yarn install
cd .. # Retorna para a raiz
```

#### Back-end (Spring Boot)

* **Usando Maven:** `cd backend && ./mvnw clean install`
* **Usando Gradle:** `cd backend && ./gradlew clean build`

---

### 💾 Inicialização do Banco de Dados (PostgreSQL)

```bash
docker run --name minha_db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=senha-segura-123 -e POSTGRES_DB=nome_do_banco -p 5432:5432 -d postgres:16
```

---

### ⚡ Como Executar a Aplicação

#### Terminal 1: Back-end (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```
🚀 *O Back-end estará disponível em **http://localhost:8080**.*

#### Terminal 2: Front-end (Nuxt)

```bash
cd frontend
npm run dev
# ou
yarn dev
```

🎨 O site estará disponível em **http://localhost:3000** (Nuxt).
---

## 🚀 Deploy
Instruções claras para deploy em produção.

1.  **Build do Projeto:**

```bash
# 1. Build do Front-end (Nuxt) - Gera a pasta .output
cd frontend
npm run build

# 2. Build do Back-end (Spring Boot/Maven) - Gera o .jar em /target
cd ../backend
./mvnw clean package
```

2.  **Configuração do Ambiente de Produção:** Defina as variáveis de ambiente no seu provedor (e.g., Vercel, Railway, Heroku, DigitalOcean).

> 🔑 **Variáveis Cruciais:** Certifique-se de configurar as variáveis de **conexão com o banco de dados** (`SPRING_DATASOURCE_URL`, etc.) para o Back-end e (`NUXT_PUBLIC_API_URL`, `NUXT_PUBLIC_EMAILJS_*`) para o Front-end.

3.  **Execução em Produção:**
    A forma de execução depende do seu provedor, mas geralmente envolve o seguinte:

```bash
# ☕ Execução do Back-end Spring Boot (Java JAR)
java -jar backend/target/nome-do-projeto-0.0.1-SNAPSHOT.jar

# 🟢 Front-end (Nuxt): npx nuxi preview ou serve -s frontend/.output/public
```

---

## 📂 Estrutura de Pastas

```
.
├── .editorconfig                # ✍️ Padronização de estilo de código.
├── .env                         # 🔒 Variáveis de ambiente (não versionado).
├── .gitignore                   # 🧹 Ignora arquivos não versionados.
├── .github/                     # 🤖 CI/CD (Actions).
├── README.md                    # 📘 Documentação principal.
├── LICENSE                      # ⚖️ Licença do projeto.
├── nuxt.config.ts              # ⚙️ Configuração do Nuxt.
├── package.json                # 📦 Dependências.
│
├── app/                         # 📁 Aplicação Nuxt (Vue 3 + Nuxt 4)
│   ├── assets/css/             # 🎨 Estilos globais.
│   ├── components/              # 🧱 Componentes Vue (organizados por domínio)
│   │   ├── base/               #     Componentes base (AppLogo, PortfolioNav).
│   │   ├── portfolio/          #     Conteúdo do portfólio (PortfolioContent).
│   │   └── scene/              #     Cenários 3D (Portfolio3DScene, SplineBackground).
│   ├── composables/             # 🎣 Lógica reutilizável (usePortfolioLocale).
│   ├── data/                    # 📋 Dados do portfólio.
│   ├── layouts/                 # 📐 Layouts (default, embed).
│   ├── pages/                   # 📄 Rotas (index, embed, experience).
│   ├── app.config.ts           # ⚙️ Configuração da aplicação.
│   └── app.vue                  # 📱 Componente raiz.
│
├── public/                      # 📂 Arquivos estáticos servidos na raiz.
│   └── models/                 # 🎮 Modelos 3D (.glb).
│
└── docs/                        # 📚 Documentação.
    ├── guides/                  #     Guias passo a passo (Blender, integração GLB).
    └── prototipo/               # 🎨 Imagens dos protótipos (Lab01S01).
```

---

## 🎥 Demonstração

Use GIFs e prints para mostrar o projeto em ação.

> [!WARNING]
> Dê preferência a hospedar suas imagens em um **CDN** (Content Delivery Network) ou no **GitHub Pages** para garantir que elas carreguem rapidamente e não quebrem. Saiba mais sobre o GitHub Pages clicando [aqui](https://github.com/joaopauloaramuni/joaopauloaramuni.github.io).

### Protótipo (Lab01S01)

| Protótipo — Visão geral (Home) |
| :---: |
| ![Protótipo Home](./docs/prototipo/prototipo-home.png) |

### 📱 Aplicativo Mobile

| Demonstração 1 | Demonstração 2 | Demonstração 3 | Demonstração 4 |
|----------------|----------------|----------------|----------------|
| | | | |
| _Sua gif aqui_ | _Sua gif aqui_ | _Sua gif aqui_ | _Sua gif aqui_ |

| Tela | Captura de Tela |
| :---: | :---: |
| **Tela Inicial (Home)** | **Tela de Perfil / Settings** |
| | |
| **Tela de Cadastro** | **Tela de Lista / Detalhes** |
| | |

### 🌐 Aplicação Web

| Tela | Captura de Tela |
| :---: | :---: |
| **Página Inicial (Home)** | **Página de Login** |
| | |
| **Cadastro de Clientes** | **Cadastro de Produtos** |
| | |
| **Dashboard (Visão Geral)** | **Página Admin / Configurações** |
| | |

### 💻 Exemplo de Saída no Terminal (para Back-end, API, CLI)

Caso o projeto seja focado em serviços de Back-end (API, microserviço, CLI), utilize esta seção para demonstrar a interação com o sistema e a resposta esperada.

#### 1. Demonstração da API (Exemplo com cURL)

```bash
curl -X GET 'http://localhost:3000/api/v1/users' \
     -H 'Authorization: Bearer <seu-jwt-token>'
```

**Saída Esperada:**
```json
{
  "total": 2,
  "users": []
}
```

---

#### 2. Demonstração de Execução de CLI/Script

```bash
npm run cli validate:schema --target=production
```

---

## 🧪 Testes

### Testes Unitários e de Integração
Para rodar os testes da unidade e integração:

```
npm run test
```
*Ferramenta utilizada: Jest, Vitest, Mocha, etc.*

### Testes End-to-End (E2E)
Para rodar os testes de ponta a ponta (E2E):

```
npm run test:e2e
```
*Ferramenta utilizada: Cypress, Playwright, Selenium, etc.*

---

## 🔗 Documentações utilizadas

Liste aqui links para documentação técnica, referências de bibliotecas complexas ou guias de estilo que foram cruciais para o projeto.

* 📖 **Nuxt 3:** [Documentação Oficial](https://nuxt.com/docs)
* 📖 **Vue 3:** [Documentação Oficial](https://vuejs.org/)
* 📖 **Three.js:** [Documentação e exemplos](https://threejs.org/docs/)
* 📖 **Guia de Estilo:** [**Conventional Commits** (Padrão de Mensagens)](https://www.conventionalcommits.org/en/v1.0.0/)
* 📖 **EmailJS:** [Documentação para envio de e-mail](https://www.emailjs.com/docs/)

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
Guia para contribuições ao projeto.

1.  Faça um `fork` do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`). **(Utilize [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))**
4.  Faça o `push` para a branch (`git push origin feature/minha-feature`).
5.  Abra um **Pull Request (PR)**.

> [!IMPORTANT]
> 📝 **Regras:** Por favor, verifique o arquivo [`CONTRIBUTING.md`](./CONTRIBUTING.md) para detalhes sobre nosso guia de estilo de código e o processo de submissão de PRs.

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
