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
  { label: "Work", href: "/work" },
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

export const workCategories = [
  { id: "figma", label: "Figma", short: "Figma" },
  { id: "rive", label: "Rive", short: "Rive" },
  { id: "wordpress", label: "WordPress", short: "WordPress" },
  { id: "webflow", label: "Webflow", short: "Webflow" },
  { id: "custom", label: "Next.js | Sanity | HTML | CSS | JS", short: "Next.js" },
] as const;

export type WorkCategoryId = (typeof workCategories)[number]["id"];

export type Project = {
  title: string;
  summary: string;
  year: string;
  categories: WorkCategoryId[];
  tools: string[];
  slug?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Dutch Rules",
    summary:
      "a homepage for a Melbourne distillery and bar — the shop, the venue, and Club Dutch on one scroll, with the palm mark over a Sri Lankan shore.",
    year: "2025",
    categories: ["figma"],
    tools: ["Figma", "Shopify"],
    slug: "dutch-rules",
    image: "/images/dutch-rules/hero.png",
  },
  {
    title: "Proverb",
    summary:
      "a sector-first site for a Boston creative agency — the work is the hero, and six industries get a visitor to the case study that matches them.",
    year: "2024",
    categories: ["figma", "wordpress"],
    tools: ["Figma", "WordPress", "Elementor"],
    slug: "proverb",
    image: "/images/proverb/cover.png",
  },
  {
    title: "Naturhotel Haller",
    summary:
      "a seasonal hospitality website for a wellness hotel in South Tyrol — designed and built as one site that can hold summer and winter without either feeling like an afterthought.",
    year: "2024",
    categories: ["figma", "custom"],
    tools: ["Figma", "Next.js", "React", "Tailwind"],
    slug: "naturhotel-haller",
    image: "/images/haller/hero.png",
  },
  {
    title: "Fans Wallet",
    summary:
      "a GETIN card inside the Fans events app — load a balance, send it to someone you came with, and redeem a voucher without turning the wallet into a bank.",
    year: "2025",
    categories: ["figma", "rive"],
    tools: ["Figma", "Rive"],
    slug: "fans-wallet",
    image: "/images/fans/cover.png",
  },
  {
    title: "GETIN",
    summary:
      "the public events site — a dark homepage that opens on the night, then the artists, producers, and rooms in a city.",
    year: "2025",
    categories: ["figma", "rive"],
    tools: ["Figma", "Rive"],
    slug: "getin-website",
    image: "/images/getin/cover.png",
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
