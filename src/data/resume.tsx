import { Icons } from "@/components/icons";
import { Download, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rayen Fassatoui",
  initials: "RF",
  url: "https://rayen.vercel.app",
  location: "Tunis, TN",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Web Developer | Skilled in React, Node.js, and Modern Database Technologies ",
  summary:
    "Results-oriented Web Developer with experience building and maintaining responsive web applications using modern technologies like React, Node.js, Next.js, and Spring MVC. Skilled in both frontend and backend development, database management (SQL NoSQL), and creating dynamic user interfaces. Proven ability to contribute to projects from concept to deployment, focusing on delivering practical, efficient, and user-focused digital solutions.",
  descriptionFr:
    "Développeur Web | Compétent en React, Node.js et Technologies de Bases de Données Modernes",
  summaryFr:
    "Développeur Web orienté résultats avec une expérience dans la création et la maintenance d'applications web réactives utilisant des technologies modernes comme React, Node.js, Next.js et Spring MVC. Compétent en développement frontend et backend, gestion de bases de données (SQL NoSQL) et création d'interfaces utilisateur dynamiques. Capacité éprouvée à contribuer aux projets de la conception au déploiement, en se concentrant sur la fourniture de solutions numériques pratiques, efficaces et centrées sur l'utilisateur.",
  avatarUrl: "/me.png",
  skills: {
    Frontend: [
      "ReactJS",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "Tailwind CSS",
      "Chakra UI",
      "Shadcn UI",
      "Framer Motion"
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring MVC",
      "Spring Boot",
      "Python",
      "PHP",
      "Symfony"
    ],
    Databases: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Firebase",
      "Supabase",
      "Prisma"
    ],
    Testing: [
      "JUnit (Java)",
      "Jest",
      "React Testing Library"
    ],
    "Tools & Technologies": [
      "Git",
      "Docker",
      "RESTful APIs",
      "Auth.js",
      "AI Integration",
      "Tableau"
    ]
  },
  skillsFr: {
    Frontend: [
      "ReactJS",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "Tailwind CSS",
      "Chakra UI",
      "Shadcn UI",
      "Framer Motion"
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring MVC",
      "Spring Boot",
      "Python",
      "PHP",
      "Symfony"
    ],
    "Bases de données": [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Firebase",
      "Supabase",
      "Prisma"
    ],
    Tests: [
      "JUnit (Java)",
      "Jest",
      "React Testing Library"
    ],
    "Outils & Technologies": [
      "Git",
      "Docker",
      "RESTful APIs",
      "Auth.js",
      "Intégration IA",
      "Tableau"
    ]
  },
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "rayenft2001@gmail.com",
    tel: "+216 95 004 044",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rayenfassatoui",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rayenfassatoui/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },

      download: {
        name: "Download Resume",
        url: "/resume.pdf",
        icon: Download,
        navbar: true,
      },
      downloadFR: {
        name: "Télécharger le CV",
        url: "/resume_fr.pdf",
        icon: Download,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Aquil App",
      href: "https://www.aquilapp.fr/",
      badges: [],
      location: "Nantes, France (Remote)",
      title: "Full-stack Developer",
      logoUrl: "/aquilapp.png",
      start: "Jul 2025",
      end: "Present",
      description:
        "Built a job-matching platform using Next.js, Laravel, and AI algorithms to solve inefficiencies in traditional hiring. Implemented dynamic UIs with shadcn/ui, integrated REST and GraphQL APIs, and optimized performance with SSR and code splitting. Boosted user engagement by 60% and reduced time-to-hire for companies by over 40%.",
    },
    {
      company: "Storegen.ai",
      href: "https://www.storegen.ai/en",
      badges: [],
      location: "Montréal, Canada (Remote)",
      title: "Full-stack Developer",
      logoUrl: "storegen.png",
      start: "Jan 2025",
      end: "Apr 2025",
      description:
        "Built modern landing pages with Next.js 15, React, TypeScript, Tailwind CSS, and shadcn/ui components to maximize visitor-to-customer conversion. Implemented backend data models and API endpoints using Prisma ORM on Neon serverless PostgreSQL, exposing Next.js Server Actions and securing routes with Auth.js v5. Integrated AI generation workflows via Gemini and Flux API within Server Actions, persisting AI-generated data through Prisma.",
    },
    {
      company: "FRTN Technologies Tunisie",
      href: "https://incubation.frtn.tech/",
      badges: [],
      location: "Remote",
      title: "Freelance Trainer",
      logoUrl: "/FRTN.png",
      start: "Oct 2024 ",
      end: "Dec 2024",
      description:
        "Fostered a hands-on learning environment using real-world examples, enhancing student problem-solving skills and contributing to a 15% increase in cohort employability.",
    },
    {
      company: "Générale Tunisienne de l'Informatique | GTI",
      badges: [],
      href: "https://gtiinfo.com.tn",
      location: "On-site",
      title: "Fullstack developer",
      logoUrl: "/gti.jpg",
      start: "Feb 2023",
      end: "Jul 2023",
      description:
      "Developed and integrated new modules for internal maintenance and project tracking tools using Spring MVC, JSF, and Oracle, which increased operational visibility by 30% and reduced reporting time by 40%. Additionally, architected and implemented a full-stack analytics dashboard (Spring MVC, JSF) to monitor employee presence, tasks, and invoices, enabling data-driven decisions that previously took two days to complete to now be done in just 30 minutes. To further streamline operations, created a web and email notification system to alert employees about expiring contracts or due invoices, successfully reducing the rate of missed maintenance sessions to 1%.",
    },
    {
      company: "AJico Group",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Web Developer",
      logoUrl: "/ajico.png",
      start: "Dec 2022",
      end: "Feb 2023",
      description:
        "Built a responsive promotional website for the 'Japan New Year' event using React, Chakra UI, and SCSS, successfully managing high visitor traffic and boosting attendee engagement by 40% compared to traditional flyers. Additionally, engineered robust RESTful backend services with Node.js and Express.js, seamlessly integrating MongoDB and MySQL to maintain 99.5% uptime and streamline client data handling even during peak traffic periods.",
    },
    {
      company: "CIN Group",
      href: "",
      badges: [],
      location: "On-site",
      title: "Fullstack developer",
      logoUrl: "/cin.jpg",
      start: "Aug 2022 ",
      end: "Jan 2023",
      description:
        "Engineered a secure investment platform, developing the frontend with React and Chakra UI and the backend with Node.js, Express.js, and PostgreSQL, achieving 99.9% uptime and maintaining zero security breaches while efficiently processing user requests across Tunisia. Additionally, optimized PostgreSQL database queries and collaborated on the development of new features, improving application responsiveness by 20% and boosting user trust scores by 25% compared to the previous website design.",
    },
    {
      company: "Smart Kokusai",
      href: "",
      badges: [],
      location: "Remote",
      title: "Junior Developer",
      logoUrl: "/smartkokusai.jpg",
      start: "Jul 2022",
      end: "Aug 2022",
      description:
        "Developed dynamic frontend interfaces for client websites using React.js, incorporating engaging animations and advanced filtering features, which increased the average user session duration by 30%. Additionally, implemented backend solutions and RESTful APIs with Node.js, Express.js, and SQL, leading to a 40% improvement in data retrieval speeds.",
    },
  ],
  workFr: [
    {
      company: "Aquil App",
      href: "https://www.aquilapp.fr/",
      badges: [],
      location: "Nantes, France (À distance)",
      title: "Développeur Full-stack",
      logoUrl: "/aquilapp.png",
      start: "Juil 2025",
      end: "Présent",
      description:
        "Développement d'une plateforme de mise en relation professionnelle utilisant Next.js, Laravel et des algorithmes d'IA pour résoudre les inefficacités du recrutement traditionnel. Mise en œuvre d'interfaces utilisateur dynamiques avec shadcn/ui, intégration d'APIs REST et GraphQL, et optimisation des performances avec SSR et code splitting. Augmentation de l'engagement des utilisateurs de 60% et réduction du délai d'embauche pour les entreprises de plus de 40%.",
    },
    {
      company: "Storegen.ai",
      href: "https://www.storegen.ai/en",
      badges: [],
      location: "Montréal, Canada (À distance)",
      title: "Développeur Full-stack",
      logoUrl: "storegen.png",
      start: "Jan 2025",
      end: "Avr 2025",
      description:
        "Création de pages d'atterrissage modernes avec Next.js 15, React, TypeScript, Tailwind CSS et les composants shadcn/ui pour maximiser la conversion visiteur-client. Implémentation de modèles de données backend et d'endpoints API utilisant Prisma ORM sur PostgreSQL serverless Neon, exposition de Next.js Server Actions et sécurisation des routes avec Auth.js v5. Intégration de workflows de génération IA via Gemini et Flux API dans les Server Actions, persistance des données générées par IA via Prisma.",
    },
    {
      company: "FRTN Technologies Tunisie",
      href: "https://incubation.frtn.tech/",
      badges: [],
      location: "À distance",
      title: "Formateur Freelance",
      logoUrl: "/FRTN.png",
      start: "Oct 2024",
      end: "Déc 2024",
      description:
        "Création d'un environnement d'apprentissage pratique utilisant des exemples concrets, améliorant les compétences de résolution de problèmes des étudiants et contribuant à une augmentation de 15% de l'employabilité de la cohorte.",
    },
    {
      company: "Générale Tunisienne de l'Informatique | GTI",
      badges: [],
      href: "https://gtiinfo.com.tn",
      location: "Sur site",
      title: "Développeur Fullstack",
      logoUrl: "/gti.jpg",
      start: "Fév 2023",
      end: "Juil 2023",
      description:
        "Développement et intégration de nouveaux modules pour des outils internes de maintenance et de suivi de projets utilisant Spring MVC, JSF et Oracle, augmentant la visibilité opérationnelle de 30% et réduisant le temps de reporting de 40%. De plus, conception et implémentation d'un tableau de bord analytique full-stack (Spring MVC, JSF) pour surveiller la présence des employés, les tâches et les factures, permettant des décisions basées sur les données qui prenaient auparavant deux jours à être complétées en seulement 30 minutes. Pour rationaliser davantage les opérations, création d'un système de notifications web et email pour alerter les employés des contrats expirants ou des factures dues, réduisant avec succès le taux de sessions de maintenance manquées à 1%.",
    },
    {
      company: "AJico Group",
      href: "",
      badges: [],
      location: "Hybride",
      title: "Développeur Web",
      logoUrl: "/ajico.png",
      start: "Déc 2022",
      end: "Fév 2023",
      description:
        "Création d'un site web promotionnel responsive pour l'événement 'Nouvel An Japonais' utilisant React, Chakra UI et SCSS, gérant avec succès un trafic élevé de visiteurs et augmentant l'engagement des participants de 40% par rapport aux dépliants traditionnels. De plus, développement de services backend RESTful robustes avec Node.js et Express.js, intégrant de manière transparente MongoDB et MySQL pour maintenir une disponibilité de 99,5% et rationaliser la gestion des données clients même pendant les périodes de trafic intense.",
    },
    {
      company: "CIN Group",
      href: "",
      badges: [],
      location: "Sur site",
      title: "Développeur Fullstack",
      logoUrl: "/cin.jpg",
      start: "Août 2022",
      end: "Jan 2023",
      description:
        "Développement d'une plateforme d'investissement sécurisée, création du frontend avec React et Chakra UI et du backend avec Node.js, Express.js et PostgreSQL, atteignant une disponibilité de 99,9% et maintenant zéro faille de sécurité tout en traitant efficacement les demandes des utilisateurs à travers la Tunisie. De plus, optimisation des requêtes de base de données PostgreSQL et collaboration au développement de nouvelles fonctionnalités, améliorant la réactivité de l'application de 20% et augmentant les scores de confiance des utilisateurs de 25% par rapport à la conception précédente du site web.",
    },
    {
      company: "Smart Kokusai",
      href: "",
      badges: [],
      location: "À distance",
      title: "Développeur Junior",
      logoUrl: "/smartkokusai.jpg",
      start: "Juil 2022",
      end: "Août 2022",
      description:
        "Développement d'interfaces frontend dynamiques pour des sites web clients utilisant React.js, incorporant des animations engageantes et des fonctionnalités de filtrage avancées, augmentant la durée moyenne de session utilisateur de 30%. De plus, implémentation de solutions backend et d'APIs RESTful avec Node.js, Express.js et SQL, conduisant à une amélioration de 40% des vitesses de récupération des données.",
    },
  ],
  education: [
    {
      school: "Polytech Intl",
      href: "https://pi.tn/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/polytech.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Polytech Intl",
      href: "https://pi.tn/",
      degree: "IRM-Opt. Embedded and Mobile Systems Engineering.",
      logoUrl: "/polytech.jpg",
      start: "2024",
      end: "2026",
    },
  ],
  educationFr: [
    {
      school: "Polytech Intl",
      href: "https://pi.tn/",
      degree: "Licence en genie logiciel et systeme d'information",
      logoUrl: "/polytech.jpg",
      start: "2021",
      end: "2024",
    },
    {
      school: "Polytech Intl",
      href: "https://pi.tn/",
      degree: "IRM-Opt. Ingénierie des Systèmes Embarqués et Mobiles.",
      logoUrl: "/polytech.jpg",
      start: "2024",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "entretien-ai",
      href: "https://entretien-ai.com/",
      dates: "",
      active: true,
      description:
        "Land Your Dream Job With Our Interview Practice. 🚀 Get instant feedback, improve fast, and land your dream role. 95% of users increased confidence after just 3 sessions.",
      technologies: [
       
        "Next.js",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Neon",
        "Typescript",
        "PostgreSQL",
        "Auth.js", 
        "Prisma",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://entretien-ai.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/entretien-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/og.jpg",
      video:
        "",
    },
    {
      title: "Indigenes",
      href: "https://indigenes-project.vercel.app/",
      dates: "",
      active: true,
      description:
        "An investment platform that focuses on agricultural investments in Africa. We aim to empower African investors by providing opportunities to invest in agriculture and utilize their land assets for farming.",
      technologies: [
       

        "Vite",
        "React",
        "Chakra UI",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://indigenes-project.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/Indigenes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/indigenes.png",
      video: "",
    },
    {
      title: "AI_Powered_Data",
      href: "https://ai-powered-data.vercel.app",
      dates: "",
      active: true,
      description:
        "A modern web application built with Next.js, TypeScript, and Prisma that provides AI-powered data analysis and visualization capabilities. The platform features Google authentication and robust data processing tools.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js & Recharts",
        "Framer Motion",
        "Prisma",
        "NextAuth.js",
        "LangChain",
        "Together AI",
        "Excel.js & Papa Parse",
        "PDF Kit",

      ],
      links: [
        {
          type: "Website",
          href: "https://ai-powered-data.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/AI_Powered_Data",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dataviz.png",
      video: "",
    },
    {
      title: "management",
      href: "",
      dates: "",
      active: true,
      description:
        "Empowering teams to achieve more through seamless project management",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Moment.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
    
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/management.png",
      video:
        "",
    },
    {
      title: "WriteFlow",
      href: "https://writeflow-snowy.vercel.app/",
      dates: "",
      active: true,
      description:
        "WriteFlow is a sophisticated SaaS platform that leverages artificial intelligence to streamline and enhance the content creation process for marketers, writers, and content creators.",
      technologies: [
       

        "Next.js",
        "PostgreSQL",
        "OpenAI GPT",
        "Tailwind CSS",
        "NextAuth.js",
        "Shadcn UI",
        "Framer Motion",
        "Prisma",

        
      ],
      links: [
        {
          type: "Website",
          href: "https://writeflow-snowy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/writeflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/writeflow.png",
      video: "",
    },
    {
      title: "Neon Schema Pilot",
      href: "https://neon-schema-pilot.vercel.app/",
      dates: "",
      active: true,
      description:
        "Neon Schema Pilot is a schema-first database studio tailored for Neon: connect a single URL and instantly explore your schema through a draggable visual canvas, rich table metadata, and live SQL previews. Built with Next.js (App Router), Bun, shadcn/ui, and Neon's serverless driver, it normalizes snapshots server-side, highlights foreign-key relationships, and keeps connection context synced as you switch between visual, table, and SQL views -- delivering a polished, theme-aware workspace that's ready to share with collaborators.",
      technologies: [
        "Next.js 16",
        "Bun runtime ",
        "React ",
        "TypeScript",
        "Tailwind CSS" ,
         "shadcn/ui ",
        "Neon serverless Postgres driver and API",
        "Lucide icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://neon-schema-pilot.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/NeonSchemaPilot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/neonschemapilot.png",
      video: "",
    },
{
  title: "OptimumCV",
  href: "https://cv.rayenft.dev/",
  dates: "",
  active: true,
  description: "OptimumCV is an AI-powered CV builder designed to simplify and optimize the creation of professional resumes. Connect your profile or import an existing CV, and instantly explore smart features: ATS optimization, automatic adaptation to job postings, cover letter generation, and internship application assistance with automatic extraction of company emails. Built with Next.js (App Router), TypeScript, Google Gemini AI, shadcn/ui, and React Hook Form, it provides real-time previews, supports dark/light mode, and generates professional Harvard-style PDFs—offering a modern, intuitive workspace ready to boost your job search.",
  technologies: [
    "Next.js 16",
    "TypeScript",
    "Google Gemini AI",
    "React Hook Form",
    "Zod validation",
    "Tailwind CSS",
    "shadcn/ui",
    "Radix UI",
    "PDF.js",
    "jsPDF",
    "Lucide icons"
  ],
  links: [
    {
      type: "Website",
      href: "https://cv.rayenft.dev/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/rayenfassatoui/optimumcv",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/optimumcv.png",
  video: ""
}


  ],
  projectsFr: [
    {
      title: "entretien-ai",
      href: "https://entretien-ai.com/",
      dates: "",
      active: true,
      description:
        "Décrochez l'emploi de vos rêves avec notre pratique d'entretien. 🚀 Obtenez des commentaires instantanés, progressez rapidement et décrochez le poste de vos rêves. 95% des utilisateurs ont gagné en confiance après seulement 3 sessions.",
      technologies: [
       
        "Next.js",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Neon",
        "Typescript",
        "PostgreSQL",
        "Auth.js", 
        "Prisma",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://entretien-ai.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/entretien-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/og.jpg",
      video:
        "",
    },
    {
      title: "Indigenes",
      href: "https://indigenes-project.vercel.app/",
      dates: "",
      active: true,
      description:
        "Une plateforme d'investissement axée sur les investissements agricoles en Afrique. Nous visons à autonomiser les investisseurs africains en leur offrant des opportunités d'investir dans l'agriculture et d'utiliser leurs actifs fonciers pour l'agriculture.",
      technologies: [
       

        "Vite",
        "React",
        "Chakra UI",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://indigenes-project.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/Indigenes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/indigenes.png",
      video: "",
    },
    {
      title: "AI_Powered_Data",
      href: "https://ai-powered-data.vercel.app",
      dates: "",
      active: true,
      description:
        "Une application web moderne construite avec Next.js, TypeScript et Prisma qui offre des capacités d'analyse et de visualisation de données alimentées par l'IA. La plateforme dispose d'une authentification Google et d'outils de traitement de données robustes.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js & Recharts",
        "Framer Motion",
        "Prisma",
        "NextAuth.js",
        "LangChain",
        "Together AI",
        "Excel.js & Papa Parse",
        "PDF Kit",

      ],
      links: [
        {
          type: "Website",
          href: "https://ai-powered-data.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/AI_Powered_Data",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dataviz.png",
      video: "",
    },
    {
      title: "management",
      href: "",
      dates: "",
      active: true,
      description:
        "Permettre aux équipes d'accomplir davantage grâce à une gestion de projet transparente",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Moment.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
    
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/management.png",
      video:
        "",
    },
    {
      title: "WriteFlow",
      href: "https://writeflow-snowy.vercel.app/",
      dates: "",
      active: true,
      description:
        "WriteFlow est une plateforme SaaS sophistiquée qui exploite l'intelligence artificielle pour rationaliser et améliorer le processus de création de contenu pour les spécialistes du marketing, les rédacteurs et les créateurs de contenu.",
      technologies: [
       

        "Next.js",
        "PostgreSQL",
        "OpenAI GPT",
        "Tailwind CSS",
        "NextAuth.js",
        "Shadcn UI",
        "Framer Motion",
        "Prisma",

        
      ],
      links: [
        {
          type: "Website",
          href: "https://writeflow-snowy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/writeflow",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/writeflow.png",
      video: "",
    },
    {
      title: "Neon Schema Pilot",
      href: "https://neon-schema-pilot.vercel.app/",
      dates: "",
      active: true,
      description:
        "Neon Schema Pilot est un studio de base de données centré sur le schéma conçu pour Neon : connectez une seule URL et explorez instantanément votre schéma via un canevas visuel glissable, des métadonnées de table riches et des aperçus SQL en direct. Construit avec Next.js (App Router), Bun, shadcn/ui et le pilote serverless de Neon, il normalise les instantanés côté serveur, met en évidence les relations de clés étrangères et maintient le contexte de connexion synchronisé lorsque vous passez entre les vues visuelle, table et SQL -- offrant un espace de travail soigné, compatible avec les thèmes, prêt à être partagé avec des collaborateurs.",
      technologies: [
        "Next.js 16 ",
        "Bun runtime ",
        "React ",
        "TypeScript",
        "Tailwind CSS ",
        "shadcn/ui ",
        "Neon serverless Postgres driver and API",
        "Lucide icons",
      ],
      links: [
        {
          type: "Website",
          href: "https://neon-schema-pilot.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rayenfassatoui/NeonSchemaPilot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/neonschemapilot.png",
      video: "",
    },


    {
  title: "OptimumCV",
  href: "https://cv.rayenft.dev/",
  dates: "",
  active: true,
  description: "OptimumCV est un générateur de CV alimenté par l'IA conçu pour simplifier et optimiser la création de CV professionnels. Connectez votre profil ou importez un CV existant, et explorez instantanément des fonctionnalités intelligentes : optimisation ATS, adaptation automatique aux offres d'emploi, génération de lettres de motivation, et assistant de candidature pour stages avec extraction automatique des emails d'entreprise. Construit avec Next.js (App Router), TypeScript, Google Gemini AI, shadcn/ui et React Hook Form, il offre un aperçu en temps réel, supporte le mode sombre/clair, et génère des PDF professionnels au format Harvard -- offrant un espace de travail moderne, intuitif et prêt à propulser votre recherche d'emploi.",
  technologies: [
    "Next.js 16",
    "TypeScript",
    "Google Gemini AI",
    "React Hook Form",
    "Zod validation",
    "Tailwind CSS",
    "shadcn/ui",
    "Radix UI",
    "PDF.js",
    "jsPDF",
    "Lucide icons"
  ],
  links: [
    {
      type: "Website",
      href: "https://cv.rayenft.dev/",
      icon: <Icons.globe className="size-3" />
    },
    {
      type: "Source",
      href: "https://github.com/rayenfassatoui/optimumcv",
      icon: <Icons.github className="size-3" />
    }
  ],
  image: "/optimumcv.png",
  video: ""
}
  ],
  hackathons: [
    {
      title: "Certiport - A Pearson VUE Business",
      dates: "Dec 2024",
      location: "IT Specialist - HTML and CSS",
      description: "",
      image: "/certiport.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },
//2
    {
      title: "freeCodeCamp",
      dates: "Dec 2023",
      location: " Foundational C# with Microsoft",
      description: "",
      image: "/freecodecamp.jpg",
      win: "",
      mlh: "",
      links: [
        
      ],
    },
//3

    {
      title: "BI-Geek",
      dates: "Mar 2022",
      location: "Fullstack development",
      description: "",
      image: "/bgeek.jpg",
      win: "",
      mlh: "",
      links: [],
    },
//4
    {
      title: "GOMYCODE",
      dates: "Jan 2022",
      location: "CODING WITH PYTHON",
      description: "",
      image: "/gomycode.png",
      win: "",
      mlh: "",
      links: [
  
      ],
    },
    //5
    {
      title: "Certiport - A Pearson VUE Business",
      dates: "Dec 2021",
      location: "MTA 98-381 Introduction to using Python",
      description: "",
      image: "/certiport.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },
    {
      title: "Udemy",
      dates: "Oct 2021",
      location: "Java Programming: Complete Beginner to Advanced",
      description: "",
      image: "/udemy.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    }
  ],
  hackathonsFr: [
    {
      title: "Certiport - A Pearson VUE Business",
      dates: "Déc 2024",
      location: "Spécialiste IT - HTML et CSS",
      description: "",
      image: "/certiport.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },
    {
      title: "freeCodeCamp",
      dates: "Déc 2023",
      location: "Fondamentaux de C# avec Microsoft",
      description: "",
      image: "/freecodecamp.jpg",
      win: "",
      mlh: "",
      links: [
        
      ],
    },
    {
      title: "BI-Geek",
      dates: "Mar 2022",
      location: "Développement Fullstack",
      description: "",
      image: "/bgeek.jpg",
      win: "",
      mlh: "",
      links: [],
    },
    {
      title: "GOMYCODE",
      dates: "Jan 2022",
      location: "PROGRAMMATION AVEC PYTHON",
      description: "",
      image: "/gomycode.png",
      win: "",
      mlh: "",
      links: [
  
      ],
    },
    {
      title: "Certiport - A Pearson VUE Business",
      dates: "Déc 2021",
      location: "MTA 98-381 Introduction à l'utilisation de Python",
      description: "",
      image: "/certiport.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    },
    {
      title: "Udemy",
      dates: "Oct 2021",
      location: "Programmation Java : Du Débutant Complet à Avancé",
      description: "",
      image: "/udemy.png",
      win: "",
      mlh: "",
      links: [
        
      ],
    }
  ],



  clubs: [
    {
      name: "Lions Club",
      description: "Our association is made up of 1.4 million members in 49,000 clubs who bring hands and hearts to the communities we serve in nearly every country on earth. Our Lions and Leos help hundreds of millions of people every year. Check out the ways we serve.",
      logoUrl: "/LIONS_LOGO.png",
      start: "2021",
      end: "2022",
      role: "Member",
      events: [
        {
          title: "DIABETES AWARENESS",
          description: "On the occasion of World Diabetes Day, Zone 2-3 of District Lions 414, in collaboration with Sirius Ariana and Kolna Nemchiw, is organizing an event on November 20 at the Menzah 1 track from 10 a.m. to 12 p.m.This event aims to raise awareness about the crucial role of regular walking in the treatment and prevention of diabetes.",
          date: "nov 2021",
          image: "/diabetes1.png",
          url:"https://www.instagram.com/p/CWkxiFcg3Aq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          title: "ACTION SDf",
          description: "Let's Think About the Homeless, Edition 2.0, was organized this Sunday, November 21, in collaboration with @leoclubtuniselmedina, benefiting 30 individuals located in Lac 1, in front of the International Organization for Migration.",
          date: "nov 2021",
          image: "/sdf.png",
          url:"https://www.instagram.com/tv/CXuIvlSga1i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    },
    {
      name: "zealers_pi",
      description: "ZEALERS is a club created by the generation Z intended for those who want to prove themselves and make the change.",
      logoUrl: "/zealers.png",
      start: "2021",
      end: "2022",
      role: "Training Manager",
      events: [
        {
          title: "HACKATHON CODE WARRIORS",
          description: "hackathon aimed at developing a web and mobile application to evaluate Agil's services",
          date: "nov 2021",
          image: "/hak.jpg",
          url: "https://www.instagram.com/p/CbTFKnzLaOB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    },

  ],
  clubsFr: [
    {
      name: "Lions Club",
      description: "Notre association compte 1,4 million de membres répartis dans 49 000 clubs qui apportent leur aide et leur cœur aux communautés que nous servons dans presque tous les pays du monde. Nos Lions et Leos aident des centaines de millions de personnes chaque année. Découvrez les façons dont nous servons.",
      logoUrl: "/LIONS_LOGO.png",
      start: "2021",
      end: "2022",
      role: "Membre",
      events: [
        {
          title: "SENSIBILISATION AU DIABÈTE",
          description: "À l'occasion de la Journée mondiale du diabète, la Zone 2-3 du District Lions 414, en collaboration avec Sirius Ariana et Kolna Nemchiw, organise un événement le 20 novembre sur la piste de Menzah 1 de 10h à 12h. Cet événement vise à sensibiliser au rôle crucial de la marche régulière dans le traitement et la prévention du diabète.",
          date: "nov 2021",
          image: "/diabetes1.png",
          url:"https://www.instagram.com/p/CWkxiFcg3Aq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          title: "ACTION SDF",
          description: "Pensons aux Sans-Abris, Édition 2.0, a été organisé ce dimanche 21 novembre, en collaboration avec @leoclubtuniselmedina, au profit de 30 personnes situées à Lac 1, devant l'Organisation internationale pour les migrations.",
          date: "nov 2021",
          image: "/sdf.png",
          url:"https://www.instagram.com/tv/CXuIvlSga1i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    },
    {
      name: "zealers_pi",
      description: "ZEALERS est un club créé par la génération Z destiné à ceux qui veulent se prouver et faire le changement.",
      logoUrl: "/zealers.png",
      start: "2021",
      end: "2022",
      role: "Responsable Formation",
      events: [
        {
          title: "HACKATHON CODE WARRIORS",
          description: "Hackathon visant à développer une application web et mobile pour évaluer les services d'Agil",
          date: "nov 2021",
          image: "/hak.jpg",
          url: "https://www.instagram.com/p/CbTFKnzLaOB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
      ],
    },

  ],
} as const;

