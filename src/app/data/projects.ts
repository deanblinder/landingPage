export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  gallery: string[];
  techStack: string[];
  features: string[];
  duration: string;
  client: string;
  categoryKey: string;
  liveDemo?: string;
  sourceCode?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    titleKey: "PROJECTS_PORTFOLIO_TITLE",
    descriptionKey: "PROJECTS_PORTFOLIO_DESC",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "MDX",
    ],
    features: [
      "Responsive Design",
      "Dark Mode",
      "Blog System",
      "SEO Optimized",
      "Performance Optimized",
    ],
    duration: "3 weeks",
    client: "Personal",
    categoryKey: "PROJECTS_CATEGORY_WEB_DEV",
    liveDemo: "https://portfolio-demo.com",
    sourceCode: "https://github.com/username/portfolio",
  },
  {
    id: "ecommerce-store",
    titleKey: "PROJECTS_ECOMMERCE_TITLE",
    descriptionKey: "PROJECTS_ECOMMERCE_DESC",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742045-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
    features: [
      "Payment Processing",
      "Product Management",
      "Order Tracking",
      "Admin Dashboard",
      "Inventory Management",
    ],
    duration: "8 weeks",
    client: "TechStart Inc.",
    categoryKey: "PROJECTS_CATEGORY_ECOMMERCE",
    liveDemo: "https://ecommerce-demo.com",
    sourceCode: "https://github.com/username/ecommerce",
  },
  {
    id: "chat-app",
    titleKey: "PROJECTS_CHAT_TITLE",
    descriptionKey: "PROJECTS_CHAT_DESC",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    ],
    techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Express", "JWT"],
    features: [
      "Real-time Messaging",
      "File Sharing",
      "Group Chats",
      "User Authentication",
      "Message History",
    ],
    duration: "6 weeks",
    client: "ChatCorp",
    categoryKey: "PROJECTS_CATEGORY_COMMUNICATION",
    liveDemo: "https://chat-demo.com",
    sourceCode: "https://github.com/username/chat-app",
  },
  {
    id: "analytics-dashboard",
    titleKey: "PROJECTS_DASHBOARD_TITLE",
    descriptionKey: "PROJECTS_DASHBOARD_DESC",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    ],
    techStack: [
      "React",
      "D3.js",
      "Node.js",
      "PostgreSQL",
      "Chart.js",
      "Express",
    ],
    features: [
      "Interactive Charts",
      "Real-time Data",
      "Custom Reports",
      "Data Export",
      "User Permissions",
    ],
    duration: "10 weeks",
    client: "DataCorp",
    categoryKey: "PROJECTS_CATEGORY_ANALYTICS",
    liveDemo: "https://analytics-demo.com",
    sourceCode: "https://github.com/username/analytics",
  },
  {
    id: "mobile-app",
    titleKey: "PROJECTS_MOBILE_TITLE",
    descriptionKey: "PROJECTS_MOBILE_DESC",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    ],
    techStack: [
      "React Native",
      "Expo",
      "Firebase",
      "Redux",
      "AsyncStorage",
      "Push Notifications",
    ],
    features: [
      "Offline Mode",
      "Push Notifications",
      "Cross-platform",
      "User Authentication",
      "Data Sync",
    ],
    duration: "12 weeks",
    client: "MobileCorp",
    categoryKey: "PROJECTS_CATEGORY_MOBILE",
    liveDemo: "https://mobile-demo.com",
    sourceCode: "https://github.com/username/mobile-app",
  },
  {
    id: "saas-platform",
    titleKey: "PROJECTS_SAAS_TITLE",
    descriptionKey: "PROJECTS_SAAS_DESC",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    ],
    techStack: [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
    ],
    features: [
      "Subscription Management",
      "User Dashboard",
      "Billing Integration",
      "Team Collaboration",
      "API Access",
    ],
    duration: "16 weeks",
    client: "SaaSStart",
    categoryKey: "PROJECTS_CATEGORY_SAAS",
    liveDemo: "https://saas-demo.com",
    sourceCode: "https://github.com/username/saas-platform",
  },
];
