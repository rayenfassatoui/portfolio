import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rayen Fassatoui",
  initials: "RF",
  url: "https://rayen.vercel.app",
  location: "Tunis, TN",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Web Developer & Solutions Developer | Skilled in React, Node.js, and Modern Database Technologies ",
  summary:
    "I am a Web Developer with experience in creating user-focused applications. I work with tools like React, Node.js, Tailwind CSS, and Spring MVC to build responsive and efficient solutions. My projects include managing databases like Oracle and PostgreSQL and designing dynamic user interfaces with Framer Motion and Tailwind CSS.I enjoy combining creativity and functionality to build seamless user experiences, precise backend processes, and uncover insights with tools like Tableau. My focus is on delivering practical and impactful digital solutions. Let’s work together to bring new ideas to life.👋",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "React",
    "Java",
    "Chakra UI",
    "Express JS",
    "TypeScript",
    "NodeJS",
    "Firebase",
    "MongoDB",
    "Supabase",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Spring MVC",
    "Spring Boot",
    "Shadcn UI",
    "Tailwind CSS",
    "Android Studio",
  ],
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
        "As a JavaScript instructor, I had the privilege of sharing my passion for web development with learners of various levels. My role involved designing and delivering interactive educational programs focused on JavaScript programming, with an emphasis on hands-on learning and creative projects. By teaching concepts such as DOM manipulation, API calls, and asynchronous programming, I was able to demonstrate how JavaScript can transform abstract ideas into tangible and dynamic solutions. My approach centered on creating an engaging learning environment where students could experiment, ask questions, and solve complex problems independently. This experience allowed me to develop strong skills in technical communication and group management while cultivating a keen sense of adaptability to meet the specific needs of each learner. I found that encouraging exploration and creativity was key to inspiring a deep mastery of the JavaScript language.",
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
        "I developed a robust maintenance contract management app for GTI projects. I used JavaServer Faces (JSF), Oracle, and Spring MVC. This honed my technical skills and provided insights into GTI project contract management.",
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
        "Designed and developed the promotional website for AJICO's 'Japan New Year' event using React and enhanced it with Chakra UI and SCSS styling. Built backend services with Node.js and Express.js, implementing both MongoDB and MySQL databases to handle client communications effectively. Created visually striking graphic assets that captured the essence of Japanese celebration while ensuring brand alignment.",
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
        "During my tenure at CIN Group, working alongside my esteemed colleagues, I embarked on a dynamic learning journey in the realm of web development to make a secure Investment platform. I was responsible for designing and developing the frontend and backend of the platform, ensuring a seamless user experience and robust security measures. My role involved collaborating closely with the team to implement new features and continuously improving the platform's performance and security.",
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
        "Developed a website with React.js for dynamic frontend, including animations and advanced filtering. Utilized SQL, Express.js, and Node.js for efficient backend development, resulting in a high-performing web application.",
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

