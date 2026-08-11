// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'email';
  url: string;
  username: string;
}

export interface TechSkill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'AI & Databases';
  proficiency: number;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'AI & SaaS' | 'Web Apps' | 'Cloud & DevOps' | 'Fintech';
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  technologies: readonly string[];
  highlights: readonly string[];
  metrics?: readonly { label: string; value: string }[];
  architectureNotes?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const portfolioData = {
  personalInfo: {
    name: 'Vivek Rawat',
    title: 'Full-Stack Developer',
    tagline: 'Architecting high-performance Web Apps, AI SaaS Platforms & Scalable Cloud Solutions',
    summary:
      'I build robust, visually stunning, and highly responsive web applications using React, TypeScript, Node.js, Next.js, and modern AI cloud infrastructures. Passionate about slick UI micro-interactions, clean architecture, and product performance.',
    aboutBio: [
      'With over 2 years of experience shipping production web applications, I bridge the gap between creative visual design and rock-solid software engineering.',
      'My core engineering principles focus on modular React architecture, rapid rendering optimization, type-safe APIs, and intuitive user experiences with micro-animations.',
      "When I'm not writing code or experimenting with new LLM agent frameworks, I contribute to open-source developer tooling and build modern SaaS side projects.",
    ],
    location: 'Dehradun / Remote, India',
    availability: 'Available for Full-Stack & AI Engineering Roles',
  },

  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '4+' },
    { label: 'Code Commits', value: '100k+' },
    { label: 'Client Rating', value: '99.9%' },
  ],

  socialLinks: [
    { platform: 'github'   as const, url: 'https://github.com/viveksinghrawat',          username: '@viveksinghrawat' },
    { platform: 'twitter'  as const, url: 'https://x.com/viveksinghrawat',               username: '@viveksinghrawat' },
    { platform: 'linkedin' as const, url: 'https://linkedin.com/in/viveksinghrawat',     username: 'Vivek Singh Rawat' },
  ],

  techStack: [
    // Frontend
    { id: 'react',     name: 'React 19',        category: 'Frontend' as const, proficiency: 95, description: 'Advanced Hooks, Concurrent Rendering, Server Components' },
    { id: 'ts',        name: 'TypeScript',       category: 'Frontend' as const, proficiency: 92, description: 'Strict type safety, Generics, Custom Utility Types' },
    { id: 'tailwind',  name: 'Tailwind CSS',     category: 'Frontend' as const, proficiency: 96, description: 'Utility-first design systems, v4 architecture, custom themes' },
    { id: 'framer',    name: 'Framer Motion',    category: 'Frontend' as const, proficiency: 90, description: 'Fluid layout animations, gesture controls, physics springs' },
    { id: 'gsap',      name: 'GSAP',             category: 'Frontend' as const, proficiency: 88, description: 'ScrollTrigger, Timeline orchestrations, split text reveals' },
    { id: 'nextjs',    name: 'Next.js 15',       category: 'Frontend' as const, proficiency: 92, description: 'App Router, SSR/ISR, Edge middleware, API routes' },
    // Backend
    { id: 'nodejs',    name: 'Node.js & Express', category: 'Backend' as const, proficiency: 90, description: 'Async I/O, REST APIs, Microservices, Middleware' },
    { id: 'python',    name: 'Python & FastAPI',  category: 'Backend' as const, proficiency: 86, description: 'High-speed async APIs, Pydantic validation, AI pipelines' },
    // AI & Databases
    { id: 'postgres',  name: 'PostgreSQL & Prisma', category: 'AI & Databases' as const, proficiency: 89, description: 'Relational modeling, indexing, migrations, connection pooling' },
    { id: 'redis',     name: 'Redis & Caching',     category: 'AI & Databases' as const, proficiency: 85, description: 'In-memory caching, Pub/Sub, rate limiting' },
    // Cloud & DevOps
    { id: 'docker',    name: 'Docker & Containers', category: 'Cloud & DevOps' as const, proficiency: 86, description: 'Multi-stage builds, compose networks, image slimming' },
  ],

  projects: [
    {
      id: 'neuralflow-ai',
      title: 'NeuralFlow AI — Analytics SaaS',
      shortDescription:
        'An AI-driven enterprise analytics dashboard providing real-time data visualisations, predictive insights, and LLM-assisted report generation.',
      fullDescription:
        'NeuralFlow AI is an end-to-end SaaS application designed to aggregate enterprise streaming metrics and generate automated natural language summaries using LLM agents. Built with React 19, TypeScript, Tailwind CSS, and Python FastAPI on the backend with Redis real-time websockets.',
      category: 'AI & SaaS' as const,
      imageUrl: '/images/project_ai_saas.jpg',
      githubUrl: 'https://github.com/viveksinghrawat/neuralflow-ai-saas',
      liveUrl: 'https://neuralflow-ai-demo.vercel.app',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'OpenAI API', 'Recharts', 'Framer Motion'],
      highlights: [
        'Real-time WebSocket data stream handling over 10,000 events/sec',
        'AI Summarizer agent generating executive reports in sub-500ms latency',
        'Dark glassmorphic SaaS interface with customizable widget grid',
        'Integrated OAuth2 authentication with multi-tenant workspace isolation',
      ],
      metrics: [
        { label: 'Data Throughput', value: '10k req/s' },
        { label: 'Report Latency', value: '< 450ms' },
        { label: 'Uptime SLA', value: '99.99%' },
      ],
      architectureNotes:
        'Utilizes a modular micro-frontend layout with Web Workers for client-side calculation, offloading chart aggregations to prevent main UI thread blocking.',
    },
    {
      id: 'omnistore-3d',
      title: 'OmniStore — 3D E-Commerce Platform',
      shortDescription:
        'Interactive 3D product customization store built with React Three Fiber, Framer Motion, and Stripe payment gateway integration.',
      fullDescription:
        'OmniStore delivers an immersive shopping experience allowing customers to interactively rotate, change materials, and inspect tech products in full 3D directly inside the browser.',
      category: 'Web Apps' as const,
      imageUrl: '/images/project_ecommerce.jpg',
      githubUrl: 'https://github.com/viveksinghrawat/omnistore-3d-shop',
      liveUrl: 'https://omnistore-3d.vercel.app',
      technologies: ['React 19', 'Three.js', 'TypeScript', 'Stripe API', 'Zustand', 'Tailwind CSS'],
      highlights: [
        'Real-time 3D webGL rendering at 60 FPS across desktop and mobile',
        'Instant visual material customization with high-res PBR textures',
        'Secure checkout with Stripe Elements & automated webhooks',
        'Optimized GLTF asset loading with progressive mesh LOD fallback',
      ],
      metrics: [
        { label: 'Render Frame Rate', value: '60 FPS' },
        { label: 'Conversion Lift', value: '+34%' },
        { label: 'Lighthouse Score', value: '98/100' },
      ],
      architectureNotes:
        'Implements Zustand state management for instant cross-component sync between 3D canvas controls and cart state.',
    },
    {
      id: 'kubewatch-cloud',
      title: 'KubeWatch — Cloud & Kubernetes Monitor',
      shortDescription:
        'Developer-first telemetry platform providing unified node topology views, real-time log streaming, and instant threshold alerts.',
      fullDescription:
        'KubeWatch gives DevOps engineers a futuristic unified interface for monitoring Kubernetes clusters, pod health metrics, network latency graphs, and container log tails.',
      category: 'Cloud & DevOps' as const,
      imageUrl: '/images/project_cloud_devops.jpg',
      githubUrl: 'https://github.com/viveksinghrawat/kubewatch-cloud-monitor',
      liveUrl: 'https://kubewatch-cloud.vercel.app',
      technologies: ['TypeScript', 'React', 'Node.js', 'Docker', 'Prometheus API', 'GSAP'],
      highlights: [
        'Interactive node cluster topology view with glowing alert states',
        'Infinite log tailing panel with instant regex search filtering',
        'Custom webhook integrations for Slack, Discord & PagerDuty alerts',
        'Dark theme by default with low-power high-contrast OLED support',
      ],
      metrics: [
        { label: 'Cluster Nodes', value: '500+' },
        { label: 'Log Tail Speed', value: '50k lines/s' },
        { label: 'Alert Dispatch', value: '< 100ms' },
      ],
      architectureNotes:
        'Leverages Virtualized List rendering for smooth infinite log scrolling without DOM node inflation.',
    },
    {
      id: 'nexuspay-web3',
      title: 'NexusPay — Web3 & Fintech Dashboard',
      shortDescription:
        'Ultra-fast crypto portfolio tracking, token swap aggregator interface, and yield analytics app with high-contrast charts.',
      fullDescription:
        'NexusPay is a modern web application designed for seamless Web3 financial portfolio management, token price tracking, and real-time yield strategy visualization.',
      category: 'Fintech' as const,
      imageUrl: '/images/project_fintech.jpg',
      githubUrl: 'https://github.com/viveksinghrawat/nexuspay-web3-fintech',
      liveUrl: 'https://nexuspay-web3.vercel.app',
      technologies: ['React 19', 'TypeScript', 'Wagmi', 'Ethers.js', 'Tailwind CSS', 'Chart.js'],
      highlights: [
        'Multi-wallet integration (MetaMask, WalletConnect, Coinbase Wallet)',
        'Real-time token price feeds via CoinGecko and Uniswap SDK',
        'Gas fee optimization estimator with historic trend graphs',
        'Responsive dark theme with high-contrast OLED support',
      ],
      metrics: [
        { label: 'Wallets Connected', value: '15k+' },
        { label: 'Daily Volume', value: '$4.2M' },
        { label: 'Security Audit', value: 'Passed 100%' },
      ],
      architectureNotes:
        'Built with resilient RPC node fallback routing to ensure zero downtime during high network volatility.',
    },
  ],

  contactInfo: {
    email: 'viveksrofficialwork@gmail.com',
    location: 'Dehradun, Uttarakhand, India',
    timezone: 'IST (UTC+05:30)',
  },
} as const;

export type PortfolioData = typeof portfolioData;
