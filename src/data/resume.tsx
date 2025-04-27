import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

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
    },
  },

  work: [
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
      end: "2027",
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
} as const;

