import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amama Fatima",
  initials: "DV",
  url: "https://dillion.io",
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
    "Node.js",
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
      badges: ["ecommerce"],
      location: "Remote",
      title: "DealGuru",
      logoUrl: "/deal-guru.png",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Comsats Univeristy, Islamabad",
      href: "https://buildspace.so",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/COMSATS-logo.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
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
