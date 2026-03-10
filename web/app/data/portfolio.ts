export type Locale = 'pt-BR' | 'en'

const portfolioEn = {
  name: 'Gabriel Lacerda',
  role: 'Software Engineering Student at PUC Minas & DevOps/SRE Enthusiast',
  email: 'Gabriellemoslacerda@gmail.com',
  discord: 'Stteinz',
  quote: {
    text: 'When we are at our lowest point, we are open to the greatest change.',
    author: 'Avatar Aang'
  },
  currentlyWorkingOn: 'Portfolio',
  about: `I am a Software Engineering student at PUC Minas, passionate about DevOps and SRE practices. 
I enjoy building reliable systems and automating workflows. Always learning and open to new challenges.`,
  contactsIntro: "I'm interested in freelance opportunities and collaborative projects. Feel free to reach out.",
  funFacts: [
    'I am currently learning English to expand my career',
    'I use Tarot for self-reflection',
    'Cycling is my favorite way to hit my cardio goals',
    'Avatar: The Last Airbender is my favorite animation'
  ],
  skills: [
    { name: 'Languages', items: ['Java', 'JavaScript'] },
    { name: 'Databases', items: ['Azure SQL', 'MySQL'] },
    { name: 'Tools', items: ['VSCode', 'Linux', 'IntelliJ', 'Git'] },
    { name: 'Other', items: ['HTML', 'CSS'] },
    { name: 'Frameworks', items: ['React', 'Node'] }
  ],
  projects: [
    {
      name: 'Game Hub',
      description: 'Platform for searching games, ratings and user profiles.',
      details: `The project consists of developing a gaming platform that allows users to search for titles, rate games and interact with the site. The platform will include a registration system, enabling each user to have a personalized profile to record their preferences and track their ratings.

Additionally, the interface will be designed to offer an intuitive and dynamic experience, facilitating navigation and game search. The goal is to create an interactive environment where players can discover new titles, share opinions and contribute to building a collaborative catalog of ratings and recommendations.`,
      technologies: 'HTML, CSS, JavaScript, Java Spring Boot',
      liveUrl: 'https://github.com/Stteinz/ti2-jogos',
      repoUrl: 'https://github.com/Stteinz/ti2-jogos',
      year: '2025'
    },
    {
      name: 'Gerenciador Hackaton',
      description: 'Project management for hackathons',
      details: `This project simulates a system to manage hackathons promoted annually by universities. It was developed with a focus on managing teams, projects, presentations and judging panels, using a well-defined class structure and object-oriented best practices, such as the use of the Singleton pattern.`,
      technologies: 'Java',
      liveUrl: 'https://github.com/Stteinz/Projeto-Programacao-Modular',
      repoUrl: 'https://github.com/Stteinz/Projeto-Programacao-Modular',
      year: '2025'
    },
    {
      name: 'Estudos DevOps',
      description: 'DevOps practices and tutorials',
      details: `Hands-on technical laboratory focused on building strong Linux fundamentals for DevOps and Platform Engineering roles.

This repository emphasizes practical command usage, clear documentation, and reproducible workflows following an Infrastructure as Code mindset.`,
      technologies: 'Linux commands',
      liveUrl: 'https://github.com/Stteinz/linux-foundations-devops',
      repoUrl: 'https://github.com/Stteinz/linux-foundations-devops',
      year: '2025'
    }
  ],
  experiences: [
    { type: 'education', title: 'Software Engineering', subtitle: 'PUC Minas', period: '2023 – present', description: 'Bachelor\'s degree in Software Engineering.' },
    { type: 'project', title: 'Game Hub', subtitle: 'TI2 · Web platform', period: '2025', description: 'Platform for searching games, ratings and user profiles. Java Spring Boot, JavaScript, HTML/CSS.' },
    { type: 'project', title: 'Hackathon Manager', subtitle: 'Modular Programming · Java', period: '2025', description: 'System to manage university hackathons: teams, projects, presentations and judging panels.' },
    { type: 'learning', title: 'Linux Foundations for DevOps', subtitle: 'Hands-on labs', period: '2025', description: 'Shell, navigation, file systems, Bash scripting and Git workflow for DevOps.' }
  ],
  professionalExperience: [
    {
      role: 'Production Cycle Analyst',
      company: 'Coffee Farms, Patrocínio-MG region',
      period: '2020 – 2023',
      seasonal: true,
      bullets: [
        'Managed production pipeline in a high-demand environment, analogous to sprint management in SDLC.',
        'Implemented real-time Quality Assurance (QA) protocols during the processing phase.',
        'Direct involvement in troubleshooting and resolving operational bottlenecks using root cause analysis.',
        'Coordinated teams for seasonal process deployment, ensuring delivery within strict deadlines.'
      ]
    }
  ],
  complementaryDevelopment: [
    { hours: 60, title: 'Red Hat Training', provider: 'Red Hat', description: 'Linux system administration, Ansible automation and RHCSA certification preparation.' },
    { hours: 17, title: 'The Git & Github Bootcamp', provider: 'Udemy', description: 'Git workflows, branch management, merges, rebases and GitHub integration.' },
    { hours: 100, title: 'Data Structures and Algorithms + Leetcode', provider: 'Hubla', description: 'Complexity analysis, algorithms and interview-style problem solving (Leetcode).' },
    { hours: 40, title: 'Java.10x', provider: 'Hubla', description: 'Advanced Java and Spring Boot topics for high performance.' },
    { hours: 120, title: 'Complete Web Development', provider: 'Udemy', description: 'Overview of front-end (HTML/CSS/JS) and back-end (PHP/Node.js) technologies.' },
    { hours: 30, title: 'Algorithms and Programming Logic', provider: 'Udemy', description: 'Logic fundamentals, data types and control structures.' },
    { hours: 10, title: 'Leadership, Communication and Creativity Program', provider: 'PUC Minas', description: 'Soft skills, public speaking and team management.' }
  ],
  links: {
    github: 'https://github.com/Stteinz',
    linkedin: 'https://www.linkedin.com/in/gabriel-lacerda-4b13a5324/',
    discord: 'https://discord.com/users/',
    spotify: '#'
  }
}

const portfolioPt = {
  ...portfolioEn,
  role: 'Estudante de Engenharia de Software na PUC Minas & entusiasta de DevOps/SRE',
  quote: {
    text: 'Quando estamos no nosso ponto mais baixo, estamos abertos à maior mudança.',
    author: 'Avatar Aang'
  },
  currentlyWorkingOn: 'Portfólio',
  about: `Sou estudante de Engenharia de Software na PUC Minas, apaixonado por DevOps e práticas de SRE.
Gosto de construir sistemas confiáveis e automatizar fluxos de trabalho. Sempre aprendendo e aberto a novos desafios.`,
  contactsIntro: 'Tenho interesse em oportunidades de freelance e projetos em equipe. Entre em contato.',
  funFacts: [
    'Estou aprendendo inglês para expandir minha carreira',
    'Uso Tarot para autorreflexão',
    'Ciclismo é meu jeito favorito de bater minhas metas de cardio',
    'Avatar: A Lenda de Aang é minha animação favorita'
  ],
  skills: [
    { name: 'Linguagens', items: ['Java', 'JavaScript'] },
    { name: 'Bancos de dados', items: ['Azure SQL', 'MySQL'] },
    { name: 'Ferramentas', items: ['VSCode', 'Linux', 'IntelliJ', 'Git'] },
    { name: 'Outros', items: ['HTML', 'CSS'] },
    { name: 'Frameworks', items: ['React', 'Node'] }
  ],
  projects: [
    {
      name: 'Game Hub',
      description: 'Plataforma de busca de jogos, avaliações e perfis.',
      details: `O projeto consiste no desenvolvimento de uma plataforma de jogos que permite aos usuários pesquisar títulos, avaliar os jogos e interagir com o site. A plataforma contará com um sistema de cadastro, possibilitando que cada usuário tenha um perfil personalizado para registrar suas preferências e acompanhar suas avaliações.

Além disso, a interface será projetada para oferecer uma experiência intuitiva e dinâmica, facilitando a navegação e a busca por jogos. O objetivo é criar um ambiente interativo onde os jogadores possam descobrir novos títulos, compartilhar opiniões e contribuir para a construção de um acervo colaborativo de avaliações e recomendações.`,
      technologies: 'HTML, CSS, JavaScript, Java Spring Boot',
      liveUrl: 'https://github.com/Stteinz/ti2-jogos',
      repoUrl: 'https://github.com/Stteinz/ti2-jogos',
      year: '2025'
    },
    {
      name: 'Gerenciador Hackaton',
      description: 'Gestão de projetos para hackathons',
      details: `Este projeto simula um sistema para gerenciar hackathons promovidos anualmente por universidades. Ele foi desenvolvido com foco em gerenciar equipes, projetos, apresentações e bancas avaliadoras, utilizando uma estrutura de classes bem definida e boas práticas de orientação a objetos, como o uso do padrão Singleton.`,
      technologies: 'Java',
      liveUrl: 'https://github.com/Stteinz/Projeto-Programacao-Modular',
      repoUrl: 'https://github.com/Stteinz/Projeto-Programacao-Modular',
      year: '2025'
    },
    {
      name: 'Estudos DevOps',
      description: 'Práticas e tutoriais de DevOps',
      details: `Hands-on technical laboratory focused on building strong Linux fundamentals for DevOps and Platform Engineering roles.

This repository emphasizes practical command usage, clear documentation, and reproducible workflows following an Infrastructure as Code mindset.`,
      technologies: 'Comandos Linux',
      liveUrl: 'https://github.com/Stteinz/linux-foundations-devops',
      repoUrl: 'https://github.com/Stteinz/linux-foundations-devops',
      year: '2025'
    }
  ],
  experiences: [
    { type: 'education', title: 'Engenharia de Software', subtitle: 'PUC Minas', period: '2023 – atual', description: 'Graduação em Engenharia de Software.' },
    { type: 'project', title: 'Game Hub', subtitle: 'TI2 · Plataforma web', period: '2025', description: 'Plataforma de busca de jogos, avaliações e perfis. Java Spring Boot, JavaScript, HTML/CSS.' },
    { type: 'project', title: 'Gerenciador de Hackathons', subtitle: 'Programação Modular · Java', period: '2025', description: 'Sistema para gerenciar hackathons universitários: equipes, projetos, apresentações e bancas.' },
    { type: 'learning', title: 'Linux Foundations for DevOps', subtitle: 'Laboratórios práticos', period: '2025', description: 'Shell, navegação, sistemas de arquivos, Bash e fluxo Git para DevOps.' }
  ],
  professionalExperience: [
    {
      role: 'Analista de Ciclo de Produção',
      company: 'Fazendas de Café, Região de Patrocínio-MG',
      period: '2020 – 2023',
      seasonal: true,
      bullets: [
        'Gerenciamento do pipeline de produção em ambiente de alta demanda, análogo à gestão de sprints no SDLC.',
        'Implementação de protocolos de Quality Assurance (QA) em tempo real na fase de processamento.',
        'Atuação direta em troubleshooting e resolução de gargalos operacionais, aplicando análise de causa raiz.',
        'Coordenação de equipes para o deployment de processos sazonais, garantindo a entrega dentro de prazos rigorosos.'
      ]
    }
  ],
  complementaryDevelopment: [
    { hours: 60, title: 'Formação Red Hat', provider: 'Red Hat', description: 'Administração de sistemas Linux, automação com Ansible e preparação para certificação RHCSA.' },
    { hours: 17, title: 'The Git & Github Bootcamp', provider: 'Udemy', description: 'Workflows de Git, gerenciamento de branches, merges, rebases e integração com GitHub.' },
    { hours: 100, title: 'Estrutura de Dados e Algoritmos + Leetcode', provider: 'Hubla', description: 'Análise de complexidade, algoritmos e resolução de problemas padrão de entrevistas (Leetcode).' },
    { hours: 40, title: 'Java.10x', provider: 'Hubla', description: 'Tópicos avançados de Java e Spring Boot para alta performance.' },
    { hours: 120, title: 'Desenvolvimento Web Completo', provider: 'Udemy', description: 'Visão geral de tecnologias front-end (HTML/CSS/JS) e back-end (PHP/Node.js).' },
    { hours: 30, title: 'Algoritmos e Lógica de Programação', provider: 'Udemy', description: 'Fundamentos de lógica, tipos de dados e estruturas de controle.' },
    { hours: 10, title: 'Programa de Liderança, Comunicação e Criatividade', provider: 'PUC Minas', description: 'Desenvolvimento de soft skills, oratória e gestão de equipes.' }
  ]
}

export const uiStrings = {
  'pt-BR': {
    nav: { home: 'Início', works: 'Projetos', aboutMe: 'Sobre mim', experiences: 'Experiências', contacts: 'Contatos' },
    contactMe: 'Fale comigo !!',
    viewAll: 'Ver todos ->',
    readMore: 'Saiba mais',
    messageMeHere: 'Me envie uma mensagem aqui',
    projects: 'projetos',
    skills: 'skills',
    aboutMe: 'about-me',
    contacts: 'contacts',
    myFunFacts: 'my-fun-facts',
    media: 'Redes',
    experiences: 'experiências',
    professionalExperience: 'Experiência profissional',
    complementaryDevelopment: 'Desenvolvimento complementar',
    seasonal: 'Sazonal',
    educationAndProjects: 'Formação & projetos',
    sendMessage: 'Enviar mensagem',
    yourName: 'Seu nome',
    yourEmail: 'Seu e-mail',
    message: 'Mensagem',
    required: 'Obrigatório',
    invalidEmail: 'E-mail inválido',
    formSuccess: 'Mensagem enviada! Em breve respondo.',
    formError: 'Erro ao enviar. Tente novamente ou use o e-mail abaixo.',
    viewRepo: 'Ver repositório',
    viewLive: 'Ver demonstração',
    close: 'Fechar'
  },
  en: {
    nav: { home: 'Home', works: 'Projects', aboutMe: 'About me', experiences: 'Experiences', contacts: 'Contacts' },
    contactMe: 'Contact me !!',
    viewAll: 'View all ->',
    readMore: 'Read more',
    messageMeHere: 'Message me here',
    projects: 'projects',
    skills: 'skills',
    aboutMe: 'about-me',
    contacts: 'contacts',
    myFunFacts: 'my-fun-facts',
    media: 'Media',
    experiences: 'experiences',
    professionalExperience: 'Professional experience',
    complementaryDevelopment: 'Complementary development',
    seasonal: 'Seasonal',
    educationAndProjects: 'Education & projects',
    sendMessage: 'Send message',
    yourName: 'Your name',
    yourEmail: 'Your email',
    message: 'Message',
    required: 'Required',
    invalidEmail: 'Invalid email',
    formSuccess: 'Message sent! I\'ll get back to you soon.',
    formError: 'Failed to send. Try again or use the email below.',
    viewRepo: 'View repository',
    viewLive: 'View demo',
    close: 'Close'
  }
} as const

export function getPortfolio(locale: Locale) {
  return locale === 'pt-BR' ? portfolioPt : portfolioEn
}

export function getUi(locale: Locale) {
  return uiStrings[locale]
}

export const portfolio = portfolioEn
