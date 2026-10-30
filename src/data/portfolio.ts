import driftLogin from "../assets/Drift project image 1 .png";
import driftEntries from "../assets/Drift project image 2 .png";
import driftMap from "../assets/Drift project image 3 .png";
import flipkartHome from "../assets/Flipkart project image.png";
import flipkartProduct from "../assets/Flipkart project image 2.png";
import flipkartCart from "../assets/Flipkart project image 3.png";
import flipkartFilters from "../assets/Flipkart project image 4.png";
import kfcHome from "../assets/Kfc project image .png";
import kfcMenu from "../assets/kfc project image 2 .png";
import kfcCart from "../assets/Kfc project image 3 .png";
import movieCatalogue from "../assets/Movie catalogue project image 1 .png";
import movieDetails from "../assets/Movie catalogue project image 2 .png";
import movieAddForm from "../assets/Movie catalogue project image 3.png";
import movieDeleteDialog from "../assets/Movie catalogue project image 4 .png";

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

export const education = [
  {
    institution: "Dr. Sivanthi Adithanar College of Engineering",
    qualification: "Bachelor of Technology (B.Tech), Information Technology",
    period: "2019 – 2023",
  },
  {
    institution: "James Memorial Matriculation Higher Secondary School of SDA",
    qualification: "Computer Science",
    location: "Prakasapuram, Nazareth",
  },
];

export const projects = [
  {
    title: "Drift",
    status: "In progress",
    description:
      "A location-aware journaling app that enriches entries with mood, weather, place, and time-of-day context, helping users revisit personal moments on a map or timeline.",
    highlights: [
      "Create and manage journal entries with mood tracking.",
      "Enrich entries with GPS coordinates, reverse-geocoded place names, weather, and time-of-day context.",
      "Browse entries in map and timeline views with pagination and filters.",
      "JWT authentication and protected journal APIs.",
    ],
    contribution:
      "Built a full-stack journaling experience with a React and TypeScript client, an Express and TypeScript API, and MongoDB persistence. Designed the entry flow to combine journal text with location and environmental context. Mood and location analytics are planned for a future iteration.",
    images: [
      { src: driftLogin, alt: "Drift sign-in page" },
      { src: driftEntries, alt: "Drift journal entries list" },
      { src: driftMap, alt: "Drift journal entries displayed on a map" },
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "React Leaflet", "TanStack Query", "Axios", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Zod", "OpenStreetMap / Nominatim", "OpenWeather API"],
    github: "https://github.com/Allwin-d/Drift",
    live: "https://drift-one-self.vercel.app/",
  },
  {
    title: "Movie Catalogue",
    status: "",
    description:
      "A full-stack movie catalogue where users can browse movies and view details, while admins can add, update, and delete catalogue entries.",
    highlights: [
      "Browse the movie catalogue and view individual movie details.",
      "Role-based access separates user browsing from admin management.",
      "Admins can add, update, and delete movies through protected APIs.",
      "JWT authentication with password hashing using bcryptjs.",
    ],
    contribution:
      "Built a React and TypeScript client connected to a Node.js and Express API, with MongoDB and Mongoose for persistence. Used TanStack Query and Axios for client-side data fetching and API requests.",
    images: [
      { src: movieCatalogue, alt: "Movie Catalogue admin movie list" },
      { src: movieDetails, alt: "Movie Catalogue movie details page" },
      { src: movieAddForm, alt: "Movie Catalogue add movie form" },
      { src: movieDeleteDialog, alt: "Movie Catalogue delete confirmation dialog" },
    ],
    stack: ["React", "TypeScript", "TanStack Query", "Axios", "Tailwind CSS", "React Router DOM", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcryptjs"],
    github: "https://github.com/Allwin-d/Movie-Catalog-Application",
    live: "https://movie-catalog-application-blush.vercel.app",
    backendApi: "https://movie-catalog-application.onrender.com",
  },
  {
    title: "KFC Clone",
    status: "",
    description:
      "A responsive KFC-inspired restaurant ordering app with category-based menu browsing, cart management, checkout, offers, and final-order pages.",
    highlights: [
      "Browse menus by category with smooth navigation between sections.",
      "Load menu data from a mock API with loading and error states.",
      "Manage cart state with Redux Toolkit and continue through the checkout flow.",
      "Explore offers and review the final order.",
    ],
    contribution:
      "Built a React and TypeScript ordering experience with React Router DOM for navigation, Axios and TanStack Query for menu data, and Redux Toolkit for cart state. Styled the responsive interface with Tailwind CSS.",
    images: [
      { src: kfcHome, alt: "KFC Clone restaurant home page" },
      { src: kfcMenu, alt: "KFC Clone category menu and food items" },
      { src: kfcCart, alt: "KFC Clone menu with food item and add-to-cart action" },
    ],
    stack: ["React 19", "TypeScript", "Vite", "React Router DOM", "Redux Toolkit", "React Redux", "TanStack Query", "Axios", "Tailwind CSS 3", "React Toastify"],
    github: "https://github.com/Allwin-d/Kfc-Clone",
    live: "https://kfc-clone-dusky.vercel.app/",
  },
  {
    title: "Flipkart Clone",
    status: "",
    description:
      "A responsive e-commerce app with product discovery, detailed product pages, ratings and comments, and a Redux-powered shopping cart.",
    highlights: [
      "Search products with a debounced input synced to URL query parameters.",
      "Filter products by rating, discount, and price range.",
      "View product details, images, pricing, ratings, and comments; submit comments and ratings through a mock API.",
      "Manage cart quantities and removals, with totals, discounts, and savings calculated from cart state.",
      "Use TanStack Query for product data and mock API comment operations, with query invalidation after comment updates.",
    ],
    contribution:
      "Built reusable product, filtering, cart, and comment interfaces in React and TypeScript. Connected product data with Axios and TanStack Query, integrated a mock API for comment and rating operations, managed cart state with Redux Toolkit, and used URL-based search state and debouncing to avoid firing a request on every keystroke.",
    images: [
      { src: flipkartHome, alt: "Flipkart Clone home page with product search and categories" },
      { src: flipkartProduct, alt: "Flipkart Clone product details with image gallery and purchase actions" },
      { src: flipkartCart, alt: "Flipkart Clone shopping cart with order price details" },
      { src: flipkartFilters, alt: "Flipkart Clone product results with rating, discount, and price filters" },
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "React Router DOM", "TanStack Query", "Axios", "Redux Toolkit"],
    github: "https://github.com/Allwin-d/Flipkart-clone",
    live: "https://flipkart-clone-ruby-two.vercel.app",
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React", "TypeScript", "JavaScript (ES6+)", "Redux", "TanStack Query", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Prisma ORM", "REST APIs", "JWT auth"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  "Computer Science Foundations": ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"],
  Workflow: ["Git & GitHub", "JIRA", "Agile / Scrum", "Postman", "Docker (basic)", "AWS (basic)"],
};