export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and styled-components, featuring animations and a blog.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    description:
      "A modern e-commerce platform with Stripe integration, product search, and a custom admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742045-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "chat-app",
    title: "Chat App",
    description:
      "A real-time chat application using React, Socket.io, and Node.js, with group and private messaging.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    ],
  },
];
