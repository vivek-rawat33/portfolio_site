export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  aboutBio: string[];
  location: string;
  availability: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface SocialLink {
  name: string;
  platform: 'github' | 'twitter' | 'linkedin' | 'email' | 'discord';
  url: string;
  icon: string;
  username: string;
}

export interface TechSkill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'AI & Databases' | 'Tools & Methods';
  proficiency: number; // 0 to 100
  icon: string; // Lucide icon name or tag
  featured: boolean;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'All' | 'AI & SaaS' | 'Web Apps' | 'Cloud & DevOps' | 'Fintech';
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  architectureNotes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'full-time' | 'contract' | 'open-source';
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  stats: { label: string; value: string; suffix?: string }[];
  socialLinks: SocialLink[];
  techStack: TechSkill[];
  projects: Project[];
  experience: ExperienceItem[];
  contactInfo: {
    email: string;
    phone: string;
    location: string;
    timezone: string;
    availabilityMessage: string;
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Vivek Rawat",
    title: "Senior Full-Stack & AI Systems Engineer",
    tagline: "Architecting high-performance Web Apps, AI SaaS Platforms & Scalable Cloud Solutions",
    summary: "I build robust, visually stunning, and highly responsive web applications using React, TypeScript, Node.js, Next.js, and modern AI cloud infrastructures. Passionate about slick UI micro-interactions, clean architecture, and product performance.",
    aboutBio: [
      "With over 4 years of experience shipping production web applications, I bridge the gap between creative visual design and rock-solid software engineering.",
      "My core engineering principles focus on modular React architecture, rapid rendering optimization, type-safe APIs, and intuitive user experiences with micro-animations.",
      "When I'm not writing code or experimenting with new LLM agent frameworks, I contribute to open-source developer tooling and build modern SaaS side projects."
    ],
    location: "Dehradun / Remote, India",
    availability: "Available for Senior Full-Stack & AI Engineering Roles",
    avatarUrl: "/images/developer_avatar.jpg",
    resumeUrl: "#contact"
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Code Commits", value: "100k+" },
    { label: "Client Rating", value: "99.9%" }
  ],
  socialLinks: [
    {
      name: "GitHub",
      platform: "github",
      url: "https://github.com/viveksinghrawat",
      icon: "Github",
      username: "@viveksinghrawat"
    },
    {
      name: "X (Twitter)",
      platform: "twitter",
      url: "https://x.com/viveksinghrawat",
      icon: "Twitter",
      username: "@viveksinghrawat"
    },
    {
      name: "LinkedIn",
      platform: "linkedin",
      url: "https://linkedin.com/in/viveksinghrawat",
      icon: "Linkedin",
      username: "Vivek Singh Rawat"
    },
    {
      name: "Email",
      platform: "email",
      url: "mailto:vivek.rawat.dev@gmail.com",
      icon: "Mail",
      username: "vivek.rawat.dev@gmail.com"
    }
  ],
  techStack: [
    // Frontend
    { id: "react", name: "React 19", category: "Frontend", proficiency: 95, icon: "Code2", featured: true, description: "Advanced Hooks, Concurrent Rendering, Server Components" },
    { id: "typescript", name: "TypeScript", category: "Frontend", proficiency: 92, icon: "FileCode2", featured: true, description: "Strict type safety, Generics, Custom Utility Types" },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend", proficiency: 96, icon: "Palette", featured: true, description: "Utility-first design systems, v4 architecture, custom themes" },
    { id: "framer", name: "Framer Motion", category: "Frontend", proficiency: 90, icon: "Zap", featured: true, description: "Fluid layout animations, gesture controls, physics springs" },
    { id: "gsap", name: "GSAP", category: "Frontend", proficiency: 88, icon: "Sparkles", featured: true, description: "ScrollTrigger, Timeline orchestrations, split text reveals" },
    { id: "nextjs", name: "Next.js 15", category: "Frontend", proficiency: 92, icon: "Layers", featured: true, description: "App Router, SSR/ISR, Edge middleware, API routes" },

    // Backend
    { id: "nodejs", name: "Node.js & Express", category: "Backend", proficiency: 90, icon: "Server", featured: true, description: "Async I/O, REST APIs, Microservices, Middleware" },
    { id: "python", name: "Python & FastAPI", category: "Backend", proficiency: 86, icon: "Terminal", featured: true, description: "High-speed async APIs, Pydantic validation, AI pipelines" },
    { id: "graphql", name: "GraphQL & Apollo", category: "Backend", proficiency: 84, icon: "Network", featured: true, description: "Flexible schemas, query resolution, subscription feeds" },

    // AI & Databases
    { id: "openai", name: "OpenAI & LLM APIs", category: "AI & Databases", proficiency: 88, icon: "Cpu", featured: true, description: "LangChain, RAG pipelines, Vector Embeddings, Function Calling" },
    { id: "postgres", name: "PostgreSQL & Prisma", category: "AI & Databases", proficiency: 89, icon: "Database", featured: true, description: "Relational modeling, indexing, migrations, connection pooling" },
    { id: "redis", name: "Redis & Caching", category: "AI & Databases", proficiency: 85, icon: "Flame", featured: false, description: "In-memory caching, Pub/Sub, rate limiting" },

    // Cloud & DevOps
    { id: "docker", name: "Docker & Containers", category: "Cloud & DevOps", proficiency: 86, icon: "Box", featured: true, description: "Multi-stage builds, compose networks, image slimming" },
    { id: "aws", name: "AWS Cloud", category: "Cloud & DevOps", proficiency: 82, icon: "Cloud", featured: true, description: "S3, CloudFront, ECS, Lambda, IAM policies" },
    { id: "cicd", name: "GitHub Actions & CI/CD", category: "Cloud & DevOps", proficiency: 88, icon: "GitBranch", featured: false, description: "Automated linting, testing pipelines, zero-downtime deploys" }
  ],
  projects: [
    {
      id: "neuralflow-ai",
      title: "NeuralFlow AI - Next-Gen Analytics SaaS",
      shortDescription: "An AI-driven enterprise analytics dashboard providing real-time data visualisations, predictive insights, and LLM-assisted report generation.",
      fullDescription: "NeuralFlow AI is an end-to-end SaaS application designed to aggregate enterprise streaming metrics and generate automated natural language summaries using LLM agents. Built with React 19, TypeScript, Tailwind CSS, and Python FastAPI on the backend with Redis real-time websockets.",
      category: "AI & SaaS",
      imageUrl: "/images/project_ai_saas.jpg",
      githubUrl: "https://github.com/viveksinghrawat/neuralflow-ai-saas",
      liveUrl: "https://neuralflow-ai-demo.vercel.app",
      featured: true,
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "FastAPI", "OpenAI API", "Recharts", "Framer Motion"],
      highlights: [
        "Real-time WebSocket data stream handling over 10,000 events/sec",
        "AI Summarizer agent generating executive reports in sub-500ms latency",
        "Dark glassmorphic SaaS interface with custom customizable widget grid",
        "Integrated OAuth2 authentication with multi-tenant workspace isolation"
      ],
      metrics: [
        { label: "Data Throughput", value: "10k req/s" },
        { label: "Report Latency", value: "< 450ms" },
        { label: "Uptime SLA", value: "99.99%" }
      ],
      architectureNotes: "Utilizes a modular micro-frontend layout with Web Workers for client-side calculation, offloading chart aggregations to prevent main UI thread blocking."
    },
    {
      id: "omnistore-3d",
      title: "OmniStore - 3D E-Commerce Platform",
      shortDescription: "Interactive 3D product customization store built with React Three Fiber, Framer Motion, and Stripe payment gateway integration.",
      fullDescription: "OmniStore delivers an immersive shopping experience allowing customers to interactively rotate, change materials, and inspect tech products in full 3D directly inside the browser.",
      category: "Web Apps",
      imageUrl: "/images/project_ecommerce.jpg",
      githubUrl: "https://github.com/viveksinghrawat/omnistore-3d-shop",
      liveUrl: "https://omnistore-3d.vercel.app",
      featured: true,
      technologies: ["React 19", "Three.js", "TypeScript", "Stripe API", "Zustand", "Tailwind CSS"],
      highlights: [
        "Real-time 3D webGL rendering at 60 FPS across desktop and mobile",
        "Instant visual material customization with high-res PBR textures",
        "Secure checkout with Stripe Elements & automated webhooks",
        "Optimized GLTF asset loading with progressive mesh LOD fallback"
      ],
      metrics: [
        { label: "Render Frame Rate", value: "60 FPS" },
        { label: "Conversion Lift", value: "+34%" },
        { label: "Lighthouse Score", value: "98/100" }
      ],
      architectureNotes: "Implements Zustand state management for instant cross-component sync between 3D canvas controls and cart state."
    },
    {
      id: "kubewatch-cloud",
      title: "KubeWatch - Cloud & Kubernetes Monitor",
      shortDescription: "Developer-first telemetry platform providing unified node topology views, real-time log streaming, and instant threshold alerts.",
      fullDescription: "KubeWatch gives DevOps engineers a futuristic unified interface for monitoring Kubernetes clusters, pod health metrics, network latency graphs, and container log tails.",
      category: "Cloud & DevOps",
      imageUrl: "/images/project_cloud_devops.jpg",
      githubUrl: "https://github.com/viveksinghrawat/kubewatch-cloud-monitor",
      liveUrl: "https://kubewatch-cloud.vercel.app",
      featured: true,
      technologies: ["TypeScript", "React", "Node.js", "Docker", "Prometheus API", "GSAP"],
      highlights: [
        "Interactive node cluster topology view with glowing alert states",
        "Infinite log tailing panel with instant regex search filtering",
        "Custom webhook integrations for Slack, Discord & PagerDuty alerts",
        "Dark theme by default with low-power high-contrast OLED support"
      ],
      metrics: [
        { label: "Cluster Nodes", value: "500+" },
        { label: "Log Tail Speed", value: "50k lines/s" },
        { label: "Alert Dispatch", value: "< 100ms" }
      ],
      architectureNotes: "Leverages Virtualized List rendering for smooth infinite log scrolling without DOM node inflation."
    },
    {
      id: "nexuspay-web3",
      title: "NexusPay - Web3 & Fintech Dashboard",
      shortDescription: "Ultra-fast crypto portfolio tracking, token swap aggregator interface, and yield analytics app with high-contrast charts.",
      fullDescription: "NexusPay is a modern web application designed for seamless Web3 financial portfolio management, token price tracking, and real-time yield strategy visualization.",
      category: "Fintech",
      imageUrl: "/images/project_fintech.jpg",
      githubUrl: "https://github.com/viveksinghrawat/nexuspay-web3-fintech",
      liveUrl: "https://nexuspay-web3.vercel.app",
      featured: true,
      technologies: ["React 19", "TypeScript", "Wagmi", "Ethers.js", "Tailwind CSS", "Chart.js"],
      highlights: [
        "Multi-wallet integration (MetaMask, WalletConnect, Coinbase Wallet)",
        "Real-time token price feeds via CoinGecko and Uniswap SDK",
        "Gas fee optimization estimator with historic trend graphs",
        "Responsive dark & cyberpunk theme switching support"
      ],
      metrics: [
        { label: "Wallets Connected", value: "15k+" },
        { label: "Daily Volume", value: "$4.2M" },
        { label: "Security Audit", value: "Passed 100%" }
      ],
      architectureNotes: "Built with resilient RPC node fallback routing to ensure zero downtime during high network volatility."
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Systems Engineer",
      company: "Apex Tech Labs",
      period: "2024 - Present",
      location: "Remote / Bengaluru",
      description: "Leading the engineering team building enterprise AI analytics applications, cloud SaaS portals, and high-performance React frontends.",
      achievements: [
        "Spearheaded redesign of core React dashboard, improving page load speeds by 48%",
        "Architected AI agent integration framework using OpenAI API and TypeScript",
        "Mentored team of 6 frontend developers on modern React performance standards"
      ],
      technologies: ["React 19", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "AWS"],
      type: "full-time"
    },
    {
      id: "exp-2",
      role: "Senior Frontend Engineer",
      company: "Vortex Digital",
      period: "2022 - 2024",
      location: "Hybrid / Gurgaon",
      description: "Crafted interactive web applications, high-traffic SaaS landing pages, and complex visual web design systems.",
      achievements: [
        "Built component library used across 12 product fronts, accelerating feature delivery by 35%",
        "Implemented micro-animations using Framer Motion and GSAP for top brand campaigns",
        "Optimized core web vitals resulting in a 99/100 Lighthouse performance rating"
      ],
      technologies: ["React", "TypeScript", "Framer Motion", "GSAP", "Tailwind CSS", "GraphQL"],
      type: "full-time"
    },
    {
      id: "exp-3",
      role: "Full-Stack Developer",
      company: "Nova Cloud Solutions",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed cloud dashboard tools, REST APIs, and client web applications.",
      achievements: [
        "Migrated monolithic frontend codebase to modular TypeScript & React setup",
        "Created automated CI/CD pipeline reducing deployment time from 20 mins to 3 mins"
      ],
      technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Docker"],
      type: "full-time"
    }
  ],
  contactInfo: {
    email: "vivek.rawat.dev@gmail.com",
    phone: "+91 98765 43210",
    location: "Dehradun, Uttarakhand, India",
    timezone: "IST (UTC+05:30)",
    availabilityMessage: "Currently accepting new freelance projects, technical consulting, and senior full-stack software engineering roles."
  }
};
