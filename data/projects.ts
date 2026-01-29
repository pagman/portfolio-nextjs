export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tag: string;
  category: "Mobile Apps" | "Web Apps" | "Websites";
  techStack: string[];
  gradientFrom: string;
  gradientTo: string;
  features: string[];
  challenges: string;
  outcome: string;
  year: string;
  role: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "mCubed tracker",
    description:
      "A comprehensive fitness tracking app with real-time analytics and personalized workout plans.",
    fullDescription:
      "Fitness Tracker Pro is a comprehensive mobile application designed to help users achieve their fitness goals through personalized workout plans, real-time progress tracking, and detailed analytics. The app integrates with wearable devices to provide accurate health metrics and offers AI-powered recommendations.",
    tag: "Mobile App",
    category: "Mobile Apps",
    techStack: ["React Native", "Firebase", "Redux", "Node.js", "TensorFlow"],
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
    features: [
      "Personalized workout plans based on user goals",
      "Real-time heart rate and calorie tracking",
      "Integration with Apple Health and Google Fit",
      "Social features for workout challenges",
      "AI-powered form correction using camera",
      "Detailed progress analytics and reports",
    ],
    challenges:
      "The main challenge was implementing real-time synchronization across devices while maintaining battery efficiency. We optimized the data sync algorithm and implemented intelligent caching to reduce API calls by 60%.",
    outcome:
      "The app achieved 50,000+ downloads in the first month with a 4.8-star rating. User engagement increased by 40% compared to the client's previous solution.",
    year: "2024",
    role: "Lead Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg",
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Telefarm tracking",
    description:
      "Modern dashboard for managing projects, teams, and workflows with real-time collaboration.",
    fullDescription:
      "A comprehensive project management solution built for modern teams. The dashboard provides real-time collaboration features, Kanban boards, Gantt charts, time tracking, and detailed reporting. Designed with a focus on user experience and team productivity.",
    tag: "Web App",
    category: "Mobile Apps",
    techStack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Socket.io"],
    gradientFrom: "#f093fb",
    gradientTo: "#f5576c",
    features: [
      "Real-time collaborative editing",
      "Customizable Kanban boards",
      "Interactive Gantt charts",
      "Time tracking and reporting",
      "Team workload management",
      "Integration with Slack and GitHub",
    ],
    challenges:
      "Implementing real-time collaboration without conflicts was complex. We built a custom CRDT-based system for conflict resolution and optimized WebSocket connections for handling thousands of concurrent users.",
    outcome:
      "Reduced project delivery time by 35% for teams using the platform. Currently serving 200+ enterprise clients with 99.9% uptime.",
    year: "2024",
    role: "Full Stack Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Camel study",
    description:
      "Full-featured online store with seamless checkout experience and admin panel.",
    fullDescription:
      "A scalable e-commerce platform built from the ground up with modern technologies. Features include a headless CMS, multi-vendor support, advanced inventory management, and a powerful admin dashboard. The platform handles high traffic with ease and provides an exceptional shopping experience.",
    tag: "Website",
    category: "Mobile Apps",
    techStack: ["Next.js", "Stripe", "MongoDB", "Redis", "AWS"],
    gradientFrom: "#4facfe",
    gradientTo: "#00f2fe",
    features: [
      "Headless CMS for content management",
      "Multi-vendor marketplace support",
      "Advanced inventory management",
      "Real-time order tracking",
      "AI-powered product recommendations",
      "Multiple payment gateway integrations",
    ],
    challenges:
      "Handling Black Friday traffic spikes was critical. We implemented auto-scaling infrastructure on AWS and optimized database queries, achieving sub-100ms response times even under 10x normal load.",
    outcome:
      "Platform processes $2M+ in monthly transactions with 99.99% payment success rate. Conversion rate improved by 25% compared to the previous platform.",
    year: "2023",
    role: "Technical Lead",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "mCubed manager",
    description:
      "Seamless food ordering experience with live tracking and smart recommendations.",
    fullDescription:
      "A feature-rich food delivery application connecting users with local restaurants. The app provides real-time order tracking, AI-powered recommendations based on preferences and past orders, and a seamless payment experience. Built for both iOS and Android with a single codebase.",
    tag: "Mobile App",
    category: "Mobile Apps",
    techStack: ["Flutter", "Node.js", "PostgreSQL", "Redis", "Google Maps API"],
    gradientFrom: "#fa709a",
    gradientTo: "#fee140",
    features: [
      "Real-time GPS order tracking",
      "AI-powered restaurant recommendations",
      "In-app chat with delivery partners",
      "Multiple payment options",
      "Loyalty rewards program",
      "Restaurant partner dashboard",
    ],
    challenges:
      "Accurate ETA predictions were crucial for user satisfaction. We developed a machine learning model that considers traffic, restaurant preparation time, and driver location to provide ETAs with 95% accuracy.",
    outcome:
      "App handles 10,000+ daily orders with an average delivery time 20% faster than competitors. Customer satisfaction rating of 4.7 stars.",
    year: "2024",
    role: "Mobile Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Habit tracker",
    description:
      "Powerful analytics platform for tracking social media performance and engagement metrics.",
    fullDescription:
      "An enterprise-grade analytics platform for social media managers and marketing teams. Provides comprehensive insights across all major social platforms, competitor analysis, sentiment tracking, and automated reporting. Built to handle millions of data points in real-time.",
    tag: "Web App",
    category: "Web Apps",
    techStack: ["React", "D3.js", "Express", "MongoDB", "Apache Kafka"],
    gradientFrom: "#30cfd0",
    gradientTo: "#330867",
    features: [
      "Multi-platform analytics dashboard",
      "Real-time engagement tracking",
      "Competitor benchmarking",
      "Sentiment analysis with NLP",
      "Automated PDF report generation",
      "Custom alert notifications",
    ],
    challenges:
      "Processing millions of social media posts in real-time required careful architecture. We implemented a distributed system using Apache Kafka for stream processing and optimized our NLP pipeline for 10x faster sentiment analysis.",
    outcome:
      "Platform analyzes 5M+ posts daily for 500+ brands. Helped clients achieve an average 30% improvement in engagement rates through data-driven insights.",
    year: "2023",
    role: "Backend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Replog",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Web Apps",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "7",
    title: "mCubed dashboard",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Web Apps",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "8",
    title: "Trip cost calculator",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Web Apps",
    category: "Web Apps",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "9",
    title: "Capcap",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "10",
    title: "Bubble tea",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "11",
    title: "Econest",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "12",
    title: "Goldensmile",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "13",
    title: "Greek property hunters",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "14",
    title: "Hona festival",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "15",
    title: "Ichnos soap",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "16",
    title: "Milianjo",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "17",
    title: "Selene luxury rooms",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
  {
    id: "18",
    title: "Velvore transfers",
    description:
      "Stunning portfolio website with smooth animations and interactive elements.",
    fullDescription:
      "A visually stunning portfolio website for a creative agency, featuring cutting-edge animations, 3D elements, and interactive storytelling. The site showcases the agency's work through immersive case studies and has won multiple design awards for its innovative approach.",
    tag: "Website",
    category: "Websites",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js", "Sanity CMS"],
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    features: [
      "Immersive 3D hero section",
      "Smooth page transitions",
      "Interactive case study presentations",
      "Custom cursor effects",
      "Performance-optimized animations",
      "CMS for easy content updates",
    ],
    challenges:
      "Balancing visual richness with performance was key. We implemented progressive loading, code splitting, and optimized 3D assets to achieve a 95+ Lighthouse performance score while maintaining the visual experience.",
    outcome:
      "Website won Awwwards Site of the Day and increased agency inquiries by 150%. Average session duration increased to 4+ minutes.",
    year: "2024",
    role: "Frontend Developer",
    images: [
      "/images/projects/fitness-tracker-pro/dashboard.svg"
    ],
    liveUrl: "https://example.com",
  },
];

export const filterTabs = ["All", "Mobile Apps", "Web Apps", "Websites"];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
