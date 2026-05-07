import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amama Fatima",
  location: "Islamabad, Pakistan",
  initials: "AF",
  title: "Full Stack Developer",
  description: "Full Stack Software Developer",
  summary:
    "Full stack engineer with 2 years of experience building web applications using React, Next.js, Node.js, and PostgreSQL",
  avatarUrl: "/pic.png",
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Python",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "TailwindCSS",
    "Express.js",
    "FastAPI",
    "Prisma",
    "tRPC",
    "Python",
    "NestJS",
  ],
  contact: {
    email: "amamafatima58@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Amama-Fatima",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amama-fatima/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Fiverr: {
        name: "Fiverr",
        url: "https://www.fiverr.com/amama_fatimadev",
        icon: Icons.fiverr,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amamafatima58@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Deal Guru",
      href: "https://dealguru.se/",
      badges: ["Ecommerce", "Full Stack Web Developer"],
      location: "Remote",
      title: "DealGuru",
      logoUrl: "/deal-guru.png",
      start: "Aug 2024",
      end: "Oct 2024",
      description: "Worked as a Next.js developer",
    },
    {
      company: "Freelance Developer",
      href: "https://www.fiverr.com/amama_fatimadev",
      badges: ["Full Stack Web Developer", "MCP Developer"],
      location: "Remote",
      title: "Freelance Developer",
      logoUrl: "/fiverr.png",
      start: "Oct 2025",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "Comsats Univeristy, Islamabad",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/COMSATS-logo.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    // {
    //   title: "LeNet CNN Implementation",
    //   href: "https://django-app-789455248731.asia-south1.run.app/",
    //   dates: "Feb 2025 - Mar 2025",
    //   active: false,
    //   description:
    //     "A purely Numpy based implementation of the LeNet-CNN trained on Emnist dataset",
    //   technologies: ["Python", "Numpy"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://django-app-789455248731.asia-south1.run.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/Amama-Fatima/LeNet-CNN-implementation",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://github.com/user-attachments/assets/4cbab265-41ad-433c-905a-a9ee7c9ea476",
    // },
    {
      title: "DealGuru",
      href: "https://dealguru.se/",
      dates: "Aug 2024 - Oct 2024",
      active: false,
      description: "Sweden based e-commerce website",
      technologies: [
        "Next.js",
        "Typescript",
        "Drizzle",
        "SQL",
        "TailwindCSS",
        "Shadcn UI",
        "tRPC",
      ],
      links: [
        {
          type: "Website",
          href: "https://dealguru.se/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dealGuru.png",
      video: "",
    },
    {
      title: "Detective's Quill",
      href: "https://detective-quill-frontend.vercel.app/",
      dates: "Nov 2025 - May 2026",
      active: false,
      description: "A story management platform for detective crime fiction writers",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Python",
        "TailwindCSS",
        "RabbitMQ",
      ],
      links: [
        {
          type: "Website",
          href: "https://detective-quill-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amama-Fatima/detective-quill",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/detective-quill.png",
      video: "",
    },
    {
      title: "TeamManager",
      href: "https://team-management-weld.vercel.app/",
      dates: "Jan 2024 - April 2024",
      active: false,
      description: "Team Management website. Create, join and manage teams",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Zod",
        "React Query",
        "React Hook Form",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://team-management-weld.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NoorFatima01/team-management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/team-manager.png",
      video: "",
    },
    {
      title: "Telecom Churn Prediction AI Model",
      href: "https://github.com/Amama-Fatima/telecom-churn-prediction",
      dates: "Jan 2024 - April 2024",
      active: false,
      description:
        "AI model to predict churn in telecom customers. Performed EDA, statistical analysis, and built a predictive model using XGBoost, CatBoost, and LightGBM and Ensemble methods.",
      technologies: [
        "Python",
        "Numpy",
        "Pandas",
        "Seaborn",
        "Scikit-learn",
        "XGBoost",
        "CatBoost",
        "LightGBM",
      ],
      links: [
        {
          type: "Website",
          href: "https://telecom-churn-prediction-amama.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amama-Fatima/telecom-churn-prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/churn.png",
      video: "",
    },
    {
      title: "Github MCP Server",
      href: "https://github.com/Amama-Fatima/github-mcp",
      dates: "July 2025",
      active: false,
      description: "A Github MCP server for Github repository management",
      technologies: ["Python", "FastAPI", "MCP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Amama-Fatima/github-mcp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video:
        "https://github.com/user-attachments/assets/751d371c-b067-492d-bdc8-84a8217e0e1c",
      image: "",
    },
    {
      title: "Hotel Booking App",
      href: "https://hotel-booking-website-pi.vercel.app",
      dates: "Oct 2024",
      active: false,
      description:
        "Add, view, search, filter, manage and book hotels with secure booking flow.",
      technologies: ["React", "TypeScript", "Express.js", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://hotel-booking-website-pi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/NoorFatima01/book-holidays",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "",
      image: "/hotel-booking-app.jpg",
    },
    {
      title: "PinPersona",
      href: "https://pin-persona.vercel.app/",
      dates: "",
      active: false,
      description:
        "LoRA fine tuned the flan-t5-base model to generate pinterest specific keywords for a historical personality",
      technologies: [
        "LoRA Fine Tuning",
        "Hugging Face Transformers",
        "Flan-T5",
        "Deep Learning",
        "Puppeteer",
      ],
      links: [
        {
          type: "Website",
          href: "https://pin-persona.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amama-Fatima/pin-persona",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video:
        "https://github.com/user-attachments/assets/8ebe4cbb-ed61-49d6-9248-6818e39a89cd",
      image: "",
    },
  ],
} as const;
