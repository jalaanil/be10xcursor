export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  philosophy: string;
  yearsExperience: number;
  avatar: string;
  location: string;
  availability: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  heroImage: string;
  problem: string;
  process: string;
  outcome: string;
  tools: string[];
  metrics?: string[];
}

export interface Skill {
  label: string;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  heading: string;
  subheading: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const profile: Profile = {
  name: "Alex Morgan",
  title: "Product Designer",
  tagline: "Crafting intuitive digital experiences for 5+ years.",
  bio: "I'm a Product Designer with five years of experience shaping user-centered products across fintech, healthcare, and e-commerce. I bridge research, strategy, and visual craft to help teams ship experiences that feel effortless.",
  philosophy:
    "Great design is invisible — it removes friction, builds trust, and empowers people to accomplish their goals without thinking about the interface.",
  yearsExperience: 5,
  avatar: "/images/avatar.svg",
  location: "San Francisco, CA",
  availability: "Open to full-time roles and select freelance projects.",
};

export const projects: Project[] = [
  {
    slug: "fintech-onboarding",
    title: "Fintech Mobile Onboarding",
    category: "Mobile · Fintech",
    summary:
      "Redesigned a multi-step onboarding flow for a digital banking app, reducing drop-off and improving first-week activation.",
    heroImage: "/images/project-fintech.svg",
    problem:
      "New users abandoned onboarding at a 42% rate due to unclear progress indicators, redundant identity verification steps, and inconsistent microcopy across screens.",
    process:
      "Conducted 12 user interviews and mapped the existing funnel. Prototyped three simplified flows in Figma, ran unmoderated usability tests, and iterated with engineering on progressive disclosure patterns.",
    outcome:
      "Shipped a streamlined 4-step flow with clear progress tracking and contextual help. Onboarding completion increased by 28% and support tickets related to signup dropped by 35%.",
    tools: ["Figma", "Maze", "Principle", "FigJam"],
    metrics: ["+28% completion rate", "-35% support tickets", "4-step flow"],
  },
  {
    slug: "healthcare-dashboard",
    title: "Healthcare Provider Dashboard",
    category: "Web · Healthcare",
    summary:
      "Led the redesign of a clinical workflow dashboard used by 2,000+ providers to manage patient schedules and care plans.",
    heroImage: "/images/project-healthcare.svg",
    problem:
      "Providers spent excessive time navigating between modules. Critical patient alerts were buried, and the dense information architecture caused frequent task errors during high-volume shifts.",
    process:
      "Shadowed nurses and physicians during shifts, synthesized findings into journey maps, and co-designed solutions in weekly design critiques. Built a component library aligned with WCAG 2.1 AA standards.",
    outcome:
      "Delivered a modular dashboard with customizable widgets and a unified alert system. Average task completion time improved by 22% and provider satisfaction scores rose from 3.2 to 4.5 out of 5.",
    tools: ["Figma", "UserTesting", "Miro", "Storybook"],
    metrics: ["+22% task completion", "4.5/5 satisfaction", "2,000+ users"],
  },
  {
    slug: "ecommerce-design-system",
    title: "E-Commerce Design System",
    category: "Design System · E-Commerce",
    summary:
      "Created a scalable design system that unified 12 product surfaces under one cohesive visual and interaction language.",
    heroImage: "/images/project-ecommerce.svg",
    problem:
      "Twelve product teams maintained separate UI libraries, causing inconsistent branding, duplicated engineering effort, and accessibility gaps across the platform.",
    process:
      "Audited existing patterns across products, defined design tokens and core components, and established contribution guidelines. Partnered with engineering to ship the system in Storybook with full documentation.",
    outcome:
      "Reduced design-to-dev handoff time by 40%, achieved 100% token coverage on new features, and cut UI-related bug reports by 30% within two quarters.",
    tools: ["Figma", "Storybook", "Zeroheight", "React"],
    metrics: ["-40% handoff time", "100% token coverage", "-30% UI bugs"],
  },
];

export const skills: Skill[] = [
  { label: "User Research", category: "Research" },
  { label: "Usability Testing", category: "Research" },
  { label: "Journey Mapping", category: "Research" },
  { label: "Wireframing", category: "Design" },
  { label: "Prototyping", category: "Design" },
  { label: "Visual Design", category: "Design" },
  { label: "Design Systems", category: "Design" },
  { label: "Figma", category: "Tools" },
  { label: "FigJam", category: "Tools" },
  { label: "Principle", category: "Tools" },
  { label: "HTML/CSS", category: "Tools" },
  { label: "Accessibility (WCAG)", category: "Tools" },
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com", label: "LinkedIn profile" },
  { platform: "Dribbble", url: "https://dribbble.com", label: "Dribbble portfolio" },
  { platform: "Behance", url: "https://behance.net", label: "Behance portfolio" },
];

export const contact: ContactInfo = {
  email: "alex.morgan@example.com",
  heading: "Let's work together",
  subheading:
    "Have a project in mind or want to discuss a role? Send a message — I typically respond within 2 business days.",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const skillCategories = [...new Set(skills.map((skill) => skill.category))];
