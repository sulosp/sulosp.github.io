export const site = {
  name: "Sulochana Peiris",
  wordmark: "sulochana",
  title: "Sulochana Peiris — UI & UX Design",
  description:
    "I craft easy, human-centric digital experiences — brand identities, design systems, and product interfaces with a balance of beauty and performance.",
  email: "hello@sulochanapeiris.design",
  location: "Colombo · Remote",
  socials: [
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const processSteps = [
  {
    title: "Research",
    body: "I start by understanding the user, their behaviour and their goals. Together we map pain points, shape UX strategy, and explore concepts before a single pixel is polished.",
  },
  {
    title: "Design",
    body: "From that research I create future-proof identities, intuitive design systems, effective user experiences, and contemporary interfaces that feel inevitable to use.",
  },
  {
    title: "Iterate",
    body: "Some products need ongoing crafting. I integrate with your team, stay close to the work, and help you design, build and grow the brand or product over time.",
  },
];

export type Project = {
  title: string;
  summary: string;
  year: string;
  tags: string[];
  slug?: string;
  image?: string;
  mock?: "aurora" | "solace" | "forma" | "nexus";
};

export const projects: Project[] = [
  {
    title: "Naturhotel Haller",
    summary:
      "a seasonal hospitality website for a wellness hotel in South Tyrol — designed and built as one site that can hold summer and winter without either feeling like an afterthought.",
    year: "2024",
    tags: ["UI/UX Design", "Development"],
    slug: "naturhotel-haller",
    image: "/images/haller/hero.png",
  },
  {
    title: "Solace Health",
    summary:
      "a calm patient journey, from first booking to follow-up, for a clinic network that needed to feel human at every tap.",
    year: "2025",
    tags: ["UX Research", "UI"],
    mock: "solace" as const,
  },
  {
    title: "Forma Studio",
    summary:
      "a brand identity and marketing site for an architecture practice — quiet type, generous space, and a CMS their team can actually run.",
    year: "2024",
    tags: ["Brand", "Web"],
    mock: "forma" as const,
  },
  {
    title: "Nexus Platform",
    summary:
      "a scalable design system and internal product UI for a B2B operations suite used across three continents.",
    year: "2024",
    tags: ["Design System", "Product"],
    mock: "nexus" as const,
  },
];

export const moreProjects = [
  {
    title: "Lumen",
    summary: "a landing page and brand system for an African climate-tech startup.",
  },
  {
    title: "Harbor",
    summary: "a focused marketing site for an established SaaS analytics company.",
  },
  {
    title: "Atelier",
    summary: "a website for an agency-focused content studio.",
  },
  {
    title: "Northstar",
    summary: "a brand refresh and product UI for a consumer budgeting app.",
  },
];

export const stats = {
  intro:
    "Since 2018 I have worked with founders, marketers and product teams from Colombo, London, San Francisco and Singapore — always remotely, always collaboratively.",
  items: [
    { value: "40+", label: "products shipped" },
    { value: "12", label: "design systems" },
    { value: "7+", label: "years of craft" },
    { value: "18", label: "brands shaped" },
  ],
};

export const images = {
  process: "/images/process.jpg",
  portrait: "/images/portrait.jpg",
};
