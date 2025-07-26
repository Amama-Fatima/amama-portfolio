import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amama Fatima",
  initials: "DV",
  location: "Islamabad, Pakistan",
  description: "",
  summary:
    "Web developer specializing in building scalable solutions with Next.js and MERN stack. Currently expanding expertise in AI/ML, focusing on convolutional neural networks (CNNs) to integrate intelligent features into web applications. Pragmatic problem-solver prioritizing clean, maintainable code and collaborative execution.",
  avatarUrl: "/pic.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Supabase",
    "Postgres, MongoDB",
    "Docker",
    "TailwindCSS",
    "Express.js",
    "FastAPI",
    "Drizzle",
    "tRPC",
    "Python",
    "Numpy",
    "Pandas",
    "Scikit-learn",
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
      company: "Deal Guru",
      href: "https://dealguru.se/",
      badges: ["ecommerce", "Full Stack Web Developer"],
      location: "Remote",
      title: "DealGuru",
      logoUrl: "/deal-guru.png",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Worked as a Next.js developer",
    },
    {
      company: "Scient Systems",
      href: "https://www.linkedin.com/company/scient-systems/posts/?feedView=all",
      badges: ["Full Stack Web Developer"],
      location: "Remote",
      title: "Scient Systems",
      logoUrl: "/scient_systems_logo.jpg",
      start: "Feb 2025",
      end: "June 2025",
      description:
        "",
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
    {
      title: "LeNet CNN Implementation",
      href: "https://lenet-cnn-digit-classification.onrender.com/",
      dates: "Feb 2025 - Mar 2025",
      active: false,
      description: "A purely Numpy based implementation of the LeNet-CNN trained on Emnist dataset",
      technologies: [
        "Python",
        "Numpy",
      ],
      links: [
        {
          type: "Website",
          href: "https://lenet-cnn-digit-classification.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amama-Fatima/LeNet-CNN-implementation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/4cbab265-41ad-433c-905a-a9ee7c9ea476",
    },
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
      description: "AI model to predict churn in telecom customers. Performed EDA, statistical analysis, and built a predictive model using XGBoost, CatBoost, and LightGBM and Ensemble methods.",
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
      technologies: [
        "Python",
        "FastAPI",
        "MCP"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Amama-Fatima/github-mcp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "https://github.com/user-attachments/assets/751d371c-b067-492d-bdc8-84a8217e0e1c",
      image: "",
    },
    {
      title: "Movix",
      href: "https://movix-two-zeta.vercel.app/",
      dates: "",
      active: false,
      description:
        "Movie search website. Search for movies and get details about them",
      technologies: ["React.js", "JavaScript", "CSS", "Redux"],
      links: [
        {
          type: "Website",
          href: "https://movix-two-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Amama-Fatima/movix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/movix.png",
      video: "",
    },
  ],
} as const;
