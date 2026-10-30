export const profile = {
  name: "Allwin Selva D",
  role: "Full Stack Developer",
  tagline:
    "I build React + TypeScript interfaces and the Prisma/PostgreSQL backends behind them. Currently shipping an enterprise healthcare engagement platform for IQVIA.",
  email: "allwinselva7@gmail.com",
  phone: "+91 8883673673",
  github: "https://github.com/Allwin-d",
  linkedin: "https://linkedin.com/in/allwinselva7",
  location: "Chennai, India",
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Novastrid IT Ventures",
    period: "Sep 2026 – Present",
    points: [
      "Moved from frontend to full stack on a healthcare engagement platform built for IQVIA, owning features across UI, backend logic and database.",
      "Model data and write queries with Prisma ORM and PostgreSQL.",
      "Connect React + TypeScript components to APIs for speaker and event management workflows.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Novastrid IT Ventures",
    period: "Apr 2025 – Aug 2026",
    points: [
      "Built React + TypeScript components with Redux state across interconnected views.",
      "Cut load times with lazy loading and code-splitting.",
      "Fixed responsive issues and refactored CSS for consistency.",
    ],
  },
  {
    role: "Python Full Stack Developer",
    company: "Shiash Info Solutions, Chennai",
    period: "Oct 2024 – Mar 2025",
    points: [
      "Built full-stack apps with Django, PostgreSQL and React.",
      "Integrated responsive React interfaces with backend APIs.",
    ],
  },
];

export const projects = [
  {
    title: "Drift",
    status: "In progress",
    description:
      "A geospatial journal. Each entry captures your location, then the server adds live weather and the place name. Entries show on a map and can be searched by distance.",
    stack: ["React", "TypeScript", "Express", "MongoDB", "TanStack Router", "Leaflet", "Zod"],
    github: "https://github.com/Allwin-d/Drift",
    live: "",
  },
  {
    title: "Movie Catalogue",
    status: "",
    description:
      "Admins manage movies, users browse them. JWT auth with separate roles, protected REST endpoints and role-based UI.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "TanStack Query", "JWT"],
    github: "https://github.com/Allwin-d/Movie-Catalog-Application",
    live: "https://movie-catalog-application-blush.vercel.app",
  },
  {
    title: "KFC Clone",
    status: "",
    description:
      "A fully responsive KFC ordering app where users can browse categorized menus, view product details, add items to a cart, and proceed to checkout, with cart logic and dynamic UI.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Allwin-d/Kfc-Clone",
    live: "https://kfc-clone-dusky.vercel.app/",
  },
  {
    title: "Flipkart Clone",
    status: "",
    description:
      "E-commerce app with 100+ products, product pages, a persistent cart, comments, and debounced search that cut API calls by about 90%.",
    stack: ["React", "TypeScript", "Tailwind", "TanStack Query", "Redux"],
    github: "https://github.com/Allwin-d/Flipkart-clone",
    live: "https://flipkart-clone-ruby-two.vercel.app",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React", "TypeScript", "JavaScript (ES6+)", "Redux", "TanStack Query", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Prisma ORM", "REST APIs", "JWT auth"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  Workflow: ["Git & GitHub", "JIRA", "Agile / Scrum", "Postman", "Docker (basic)", "AWS (basic)"],
};