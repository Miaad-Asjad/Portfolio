export const site = {
  name: "Miaad",
  brand: "Miaad.dev",
  email: import.meta.env.VITE_CONTACT_EMAIL || "buildwithmiaad@gmail.com",
  github: "https://github.com/Miaad-Asjad",
  linkedin: "https://www.linkedin.com/in/miaad-asjad-853430353/" ,
  instagram: "https://www.instagram.com/build_with_miaad?obrf=MWNqd2JxZmU0c2dtaA%3D%3D&utm_source=qr" ,
  intro: "Full-stack developer with a soft spot for thoughtful details."
};

export const skills = [
  { title: "Frontend magic", note: "Interfaces that feel clear, playful, and effortless.", items: ["React", "JavaScript ES6+", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"] },
  { title: "Behind the scenes", note: "Reliable foundations for real-world applications.", items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT & Auth"] },
  { title: "My little toolkit", note: "The tools that keep the work moving.", items: ["Git & GitHub", "Vite", "Postman", "Responsive UI", "Debugging"] }
];

export const projects = [
  {
    number: "01",
    title: "Al-Maahir",
    type: "Full-stack learning platform",
    description: "A learning experience designed to make course discovery and study feel simple and welcoming.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://www.almaahir.online/",
    code: "https://github.com/Miaad-Asjad/Al-Maahir-Frontend",
    color: "lilac",
    symbol: "✿"
  },
  {
    number: "02",
    title: "Blogsite",
    type: "Full-stack web app",
    description: "A clean space for publishing ideas, exploring articles, and giving content room to breathe.",
    stack: ["React", "Express", "MongoDB", "REST API"],
    live: "https://blogsite-frontend-mauve.vercel.app/",
    code: "https://github.com/Miaad-Asjad/Blogsite-frontend",
    color: "blush",
    symbol: "♡"
  },
  {
    number: "03",
    title: "Arab Oasis",
    type: "Transport platform UI",
    description: "A responsive transport-focused interface with a clear journey from browsing to taking action.",
    stack: ["React", "Tailwind CSS", "Responsive UI"],
    live: "https://arab-oasis-frontend.vercel.app/",
    code: "https://github.com/Miaad-Asjad/Arab-Oasis-Frontend",
    color: "cream",
    symbol: "✧"
  },
  {
    number: "04",
    title: "Melt & Crumb",
    type: "Bakery e-commerce concept",
    description: "A sweet storefront concept for showcasing baked treats with a warm, inviting shopping experience.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "",
    code: "",
    color: "blush",
    symbol: "♡"
  }
];
