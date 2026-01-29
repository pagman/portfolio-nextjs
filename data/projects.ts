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
    title: "MCubed Tracker",
    description:
      "Pet tracking app with real-time GPS, activity monitoring, geofencing, and health calendar.",
    fullDescription:
      "A Flutter-based pet tracking application that allows owners to monitor their pets' location, activity, and health in real-time. Features include live GPS tracking on an interactive map, geofencing with boundary alerts, daily activity analytics, and a health calendar for scheduling vet appointments and medications. The app uses a dual backend system with Firebase as primary and MongoDB Atlas as fallback, ensuring reliable data sync and push notifications.",
    tag: "Mobile App",
    category: "Mobile Apps",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "MongoDB Atlas",
      "Google Maps",
      "Provider",
      "Syncfusion Charts"
    ],
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
    features: [
      "Real-time GPS tracking with live map view",
      "Activity monitoring with daily analytics",
      "Geofencing with boundary alerts",
      "Health calendar for vet appointments and medications",
      "Location history with date filtering",
      "Subscription management for device plans",
      "Activity reports with statistics",
      "Multi-language support (EN, GR, FI, SE)"
    ],
    challenges:
      "The main challenge was building a reliable real-time tracking system with a dual backend architecture. Implementing stream-based device updates while maintaining battery efficiency on mobile devices required careful optimization of location polling and data synchronization.",
    outcome:
      "The app provides pet owners with comprehensive tracking and health management tools. Users can monitor their pets' locations, receive instant alerts when boundaries are crossed, and keep track of health schedules from a single mobile interface.",
    year: "2024",
    role: "Mobile Developer",
    images: [
      "/images/projects/mCubedTracker/mCubedTracker_mobile_1.png",
      "/images/projects/mCubedTracker/mCubedTracker_mobile_2.png",
      "/images/projects/mCubedTracker/mCubedTracker_mobile_3.png"
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=io.mcubed.mcubed&hl=el",
  },
  {
    id: "2",
    title: "Telefarm Tracking",
    description:
      "GPS pet and livestock tracking app with real-time location, geofencing, and activity monitoring.",
    fullDescription:
      "A Flutter-based GPS tracking application for pets and livestock. Users can monitor real-time locations on a map, set up geofencing with boundary alerts, track daily activity levels and movement patterns, and schedule events like vet appointments and medications. The app supports multiple languages (English, Greek, Finnish, Swedish) and includes subscription management with day-based tracking. Built with Firebase for backend services and Google Maps for location visualization.",
    tag: "Mobile App",
    category: "Mobile Apps",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Google Maps",
      "Provider",
      "Syncfusion Charts",
      "FCM"
    ],
    gradientFrom: "#f093fb",
    gradientTo: "#f5576c",
    features: [
      "Real-time GPS location tracking on map",
      "Geofencing with boundary alerts",
      "Daily activity and movement monitoring",
      "Calendar for vet appointments, medications, and events",
      "Location history and reports",
      "Subscription management with day tracking",
      "Multi-language support (EN, GR, FI, SE)",
      "Push notifications via Firebase Cloud Messaging"
    ],
    challenges:
      "The main challenge was implementing accurate real-time GPS tracking while optimizing battery consumption on mobile devices. Building a reliable geofencing system that triggers alerts promptly when animals cross boundaries required careful handling of location updates and background services.",
    outcome:
      "The app provides pet and livestock owners with peace of mind through real-time tracking and instant alerts. Users can monitor their animals' locations, activity levels, and health schedules from a single mobile interface.",
    year: "2024",
    role: "Mobile Developer",
    images: [
      "/images/projects/TMTracking/TMTracking_mobile_1.png",
      "/images/projects/TMTracking/TMTracking_mobile_2.png",
      "/images/projects/TMTracking/TMTracking_mobile_3.png"
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=io.mcubed.telecubed&hl=el",
  },
  {
    id: "3",
    title: "Camel Study",
    description:
      "Adaptive study timer app with dynamic scheduling, session types, and animated visual feedback.",
    fullDescription:
      "A Flutter study management app that creates personalized study schedules based on available time. Unlike fixed Pomodoro timers, Camel Study dynamically generates optimized schedules with hard sessions (50-90 min), easy sessions (25 min), and appropriate breaks. The app schedules longer sessions first when energy is highest, and features animated pink bubbles that gradually fill the screen as time runs out, providing gentle visual reminders.",
    tag: "Mobile App",
    category: "Mobile Apps",
    techStack: [
      "Flutter",
      "Dart",
      "Material Design 3",
      "SharedPreferences",
      "Physics Engine"
    ],
    gradientFrom: "#ff6b9d",
    gradientTo: "#c44569",
    features: [
      "Adaptive timer with auto-generated study schedules",
      "Hard sessions (50-90 min) and easy sessions (25 min)",
      "Intelligent time distribution algorithm",
      "Animated bubble visual feedback with physics",
      "State persistence when leaving/returning to app",
      "Dark theme with pink accents",
      "Clear study/break session indicators",
      "Realistic bubble collision detection"
    ],
    challenges:
      "The main challenge was implementing the schedule algorithm that intelligently splits available time into appropriate session types. Building the physics engine for bubble animations with realistic collision detection while maintaining smooth performance required careful optimization.",
    outcome:
      "The app provides a unique study experience that adapts to how much time users have. The visual bubble feedback creates a gentle, non-intrusive way to stay aware of remaining time without the anxiety of a traditional countdown timer.",
    year: "2024",
    role: "Mobile Developer",
    images: [
      "/images/projects/CamelStudy/CamelStudy_mobile_1.png",
      "/images/projects/CamelStudy/CamelStudy_mobile_2.png",
      "/images/projects/CamelStudy/CamelStudy_laptop_1.png"
    ],
    liveUrl: "https://github.com/pagman/camel_study",
  },
  {
    id: "4",
    title: "MCubed Manager",
    description:
      "Device management and SMS communication platform for IoT/GPS tracking devices.",
    fullDescription:
      "A Flutter-based mobile application for managing IoT and GPS tracking devices. The platform allows users to register devices with IMEI and SIM information, send SMS commands remotely to configure device settings (APN, server connections, restarts), and manage device reports with status tracking. The app integrates with multiple SMS providers and uses Firebase Firestore, MongoDB Atlas, and Google Sheets for data management.",
    tag: "Mobile App",
    category: "Mobile Apps",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase Firestore",
      "MongoDB Atlas",
      "Google Sheets API",
      "SMS APIs"
    ],
    gradientFrom: "#0f2027",
    gradientTo: "#2c5364",
    features: [
      "Device registration with IMEI and SIM management",
      "Remote SMS command sending for device configuration",
      "QR code scanning for quick IMEI entry",
      "Device type support (P-BOX, Goat V3, Cow)",
      "Report management with open/solved status tracking",
      "Multi-provider SMS integration (SimBase, Things Mobile, Nexmo)",
      "Google Sheets device registry sync",
      "Material Design 3 interface"
    ],
    challenges:
      "The main challenge was integrating multiple SMS providers with different APIs and response formats while maintaining a consistent user experience. Syncing device data across Firebase, MongoDB, and Google Sheets required careful architecture to prevent data inconsistencies.",
    outcome:
      "The app provides a centralized platform for managing IoT device fleets, enabling remote configuration and monitoring. Technicians can quickly register devices, send commands, and track issues from a single mobile interface.",
    year: "2024",
    role: "Mobile Developer",
    images: [
      "/images/projects/mCubedManager/mCubedManager_mobile_1.png",
      "/images/projects/mCubedManager/mCubedManager_mobile_2.png",
      "/images/projects/mCubedManager/mCubedManager_mobile_3.png"
    ],
  },
  {
    id: "5",
    title: "Habit Tracker",
    description:
      "Beautiful habit tracking app with streak tracking, statistics dashboard, and customizable colors.",
    fullDescription:
      "A modern habit tracking application built with Next.js 16 and shadcn/ui. Users can create and track daily habits, build streaks, and visualize progress with an intuitive interface. The app features a 7-day view for quick weekly overview, statistics dashboard showing completion rates, and 17 customizable color options for personalizing habits. All data persists locally in the browser with full dark mode support.",
    tag: "Web App",
    category: "Web Apps",
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "shadcn/ui",
      "Tailwind CSS",
      "Radix UI",
      "Local Storage"
    ],
    gradientFrom: "#6366f1",
    gradientTo: "#a855f7",
    features: [
      "Visual progress tracking with habit cards",
      "Current and longest streak calculations",
      "7-day completion overview",
      "Statistics dashboard with completion rates",
      "17 customizable color options per habit",
      "Local storage data persistence",
      "Responsive design for all devices",
      "Dark mode support"
    ],
    challenges:
      "The main challenge was building a smooth and responsive UI that updates in real-time while persisting data to local storage. Implementing streak calculations that correctly handle missed days and timezone differences required careful logic to ensure accurate tracking.",
    outcome:
      "The app provides a clean, distraction-free way to build and maintain daily habits. Users can quickly log completions, track their streaks, and see their progress at a glance with an elegant, customizable interface.",
    year: "2024",
    role: "Full Stack Developer",
    images: [
      "/images/projects/habit-tracker/habit-tracker_laptop_1.png"
    ],
    liveUrl: "https://habit-tracker-phi-hazel.vercel.app/",
  },
  {
    id: "6",
    title: "Replog",
    description:
      "Full-stack gym tracking PWA for logging workouts, tracking progress, and sharing programs.",
    fullDescription:
      "A modern gym tracking application built with Next.js 15, TypeScript, and MongoDB. Users can create custom workout programs, log weights, reps, and sets for every exercise, and monitor progress over time. The app displays previous workout data to help beat personal records, supports program sharing via email, and automatically saves workout progress for resuming unfinished sessions. Built as a Progressive Web App, it works offline and can be installed on any device.",
    tag: "Web App",
    category: "Web Apps",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma ORM",
      "Tailwind CSS",
      "NextAuth.js",
      "PWA"
    ],
    gradientFrom: "#ff416c",
    gradientTo: "#ff4b2b",
    features: [
      "User authentication with NextAuth.js",
      "Custom workout program creation",
      "Workout logging with weights, reps, and sets",
      "Previous workout data for beating PRs",
      "One-click copy from previous workouts",
      "Program sharing with other users",
      "Auto-save and resume unfinished workouts",
      "Installable PWA with offline support"
    ],
    challenges:
      "The main challenge was building a seamless workout tracking experience that persists progress even when the app is closed unexpectedly. Implementing auto-save to localStorage with MongoDB sync, along with PWA functionality for offline use, required careful state management and data synchronization logic.",
    outcome:
      "The app provides a complete gym tracking solution that users can install on their devices. Athletes can track their progress, share programs, and never lose workout data thanks to automatic saving and resume functionality.",
    year: "2024",
    role: "Full Stack Developer",
    images: [
      "/images/projects/replog/replog_laptop_1.png",
      "/images/projects/replog/replog_laptop_2.png",
      "/images/projects/replog/replog_laptop_3.png"
    ],
    liveUrl: "https://replog-pi.vercel.app/",
  },
  {
    id: "7",
    title: "MCubed Dashboard",
    description:
      "Device management and GPS tracking dashboard with real-time monitoring, geofencing, and activity analytics.",
    fullDescription:
      "A comprehensive device management and tracking dashboard application built with Next.js and MongoDB. The system enables real-time GPS tracking of devices, user management with push notifications via Firebase Cloud Messaging, SMS functionality, SIM card management, and detailed activity monitoring. The dashboard provides location history with satellite data, geofencing capabilities, and comprehensive reporting tools for tracking device usage patterns.",
    tag: "Web App",
    category: "Web Apps",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma ORM",
      "Tailwind CSS",
      "Radix UI",
      "Leaflet",
      "Google APIs"
    ],
    gradientFrom: "#4776e6",
    gradientTo: "#8e54e9",
    features: [
      "Real-time GPS device tracking with location history",
      "Geofencing and boundary alerts",
      "User management with FCM push notifications",
      "SMS messaging to devices",
      "SIM card management system",
      "Activity monitoring with calories, walks, and duration",
      "Interactive maps with Leaflet",
      "System notifications and user reports"
    ],
    challenges:
      "The main challenge was building a real-time tracking system that handles multiple devices simultaneously while maintaining performance. Integrating GPS data with interactive maps and implementing geofencing logic required careful architecture to ensure accurate and responsive location updates.",
    outcome:
      "The dashboard provides a centralized platform for managing GPS-enabled devices, enabling users to track locations, monitor activity, and receive alerts in real-time. The system handles device fleets efficiently with comprehensive reporting capabilities.",
    year: "2024",
    role: "Full Stack Developer",
    images: [
      "/images/projects/mcubedDashboard/mcubedDashboard_laptop_1.png",
      "/images/projects/mcubedDashboard/mcubedDashboard_laptop_2.png"
    ],
    liveUrl: "https://mcubed.io",
  },
  {
    id: "8",
    title: "Trip Cost Calculator",
    description:
      "Road trip cost calculator for Greece with fuel consumption, toll fees, and interactive route mapping.",
    fullDescription:
      "A web application that helps travelers estimate the total cost of road trips in Greece by calculating fuel consumption and toll road fees. Built with Next.js, TypeScript, and Mapbox, the calculator provides an intuitive interface with real-time route visualization. Users can select vehicle types, split costs among passengers, compare toll vs. toll-free routes, and get accurate estimates for any journey across Greece.",
    tag: "Web App",
    category: "Web Apps",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mapbox GL JS",
      "React Map GL",
      "Mapbox APIs"
    ],
    gradientFrom: "#11998e",
    gradientTo: "#38ef7d",
    features: [
      "Interactive route mapping with Mapbox",
      "Fuel cost calculation based on vehicle type and consumption",
      "Smart toll estimation for 7 major routes",
      "Multiple vehicle types with different toll multipliers",
      "Cost splitting among passengers",
      "Toll-free alternative route finder",
      "Detailed cost breakdown with distance and duration"
    ],
    challenges:
      "The main challenge was building accurate toll estimation logic that works for both known routes with fixed prices and unknown routes using distance-based formulas. Integrating Mapbox for real-time route visualization while keeping the interface simple required careful UX decisions.",
    outcome:
      "The calculator helps travelers plan road trips with accurate cost estimates, compare routes, and fairly split expenses among companions. It serves as a practical tool for anyone driving in Greece.",
    year: "2024",
    role: "Full Stack Developer",
    images: [
      "/images/projects/tripcost/tripcost_laptop_1.png"
    ],
    liveUrl: "https://trip-cost-calculator-psi.vercel.app/",
  },
  {
    id: "9",
    title: "CapCap",
    description:
      "Website for Greece's most beloved cupcake and sweets shop with menu, locations, and catering services.",
    fullDescription:
      "A WordPress website developed for CapCap, the biggest and most popular cupcake and sweets destination in Greece. Built with Elementor, the site showcases the irresistible menu of cupcakes, cakes, and sweet treats that have made CapCap a must-visit spot for dessert lovers. The design captures the playful and indulgent spirit of the brand while helping customers explore the menu, find store locations, and inquire about catering for special events.",
    tag: "Website",
    category: "Websites",
    techStack: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Contact Forms"
    ],
    gradientFrom: "#ff758c",
    gradientTo: "#ff7eb3",
    features: [
      "Cupcake and sweets menu showcase",
      "Store locations across Greece",
      "Catering and event inquiry forms",
      "Seasonal specials and new arrivals section",
      "Brand story and company heritage",
      "Mobile-responsive design",
      "Social media integration"
    ],
    challenges:
      "The challenge was creating a website that captures the joy and indulgence of the CapCap experience while making it easy for customers to explore the menu and find their nearest location. The design needed to be as inviting and sweet as the products themselves, encouraging visitors to stop by.",
    outcome:
      "The website showcases why CapCap has become a beloved destination for sweets lovers across Greece, driving foot traffic to stores and generating catering inquiries for parties and corporate events.",
    year: "2024",
    role: "Web Developer",
    images: [
      "/images/projects/capcap/preview.svg"
    ],
    liveUrl: "https://www.capcap.gr/",
  },
  {
    id: "10",
    title: "Bubble Tea",
    description:
      "Website for Greece's largest bubble tea brand featuring menu, locations, and franchise information.",
    fullDescription:
      "A WordPress website developed for the biggest bubble tea chain in Greece. Built with Elementor, the site showcases the full drink menu with customization options, store locations across the country, and franchise opportunities. The design captures the fun and colorful identity of the brand while providing customers with everything they need to find their nearest store and explore the menu before visiting.",
    tag: "Website",
    category: "Websites",
    techStack: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Contact Forms"
    ],
    gradientFrom: "#ee9ca7",
    gradientTo: "#ffdde1",
    features: [
      "Interactive drink menu with customization options",
      "Store locator with all Greek locations",
      "Franchise inquiry and partnership information",
      "Brand story and company information",
      "Mobile-responsive design",
      "Social media integration",
      "Contact forms for business inquiries"
    ],
    challenges:
      "The challenge was presenting a large and customizable drink menu in an engaging way while making it easy for customers to find their nearest location. The design needed to reflect the playful brand identity while remaining functional and informative for both customers and potential franchise partners.",
    outcome:
      "The website serves as the central hub for the brand, helping customers discover locations and menu options while generating franchise inquiries from entrepreneurs looking to join Greece's leading bubble tea chain.",
    year: "2024",
    role: "Web Developer",
    images: [
      "/images/projects/bubble-tea/preview.svg"
    ],
    liveUrl: "https://bubbletea.gr/",
  },
  {
    id: "11",
    title: "Econest",
    description:
      "E-commerce store for home renovation products including furniture, decor, and building materials.",
    fullDescription:
      "A WordPress e-commerce website built for a home renovation retailer offering everything from furniture and decor to tools and building materials. Using WooCommerce and Elementor, the store provides customers with a comprehensive catalog organized by room type, project category, and brand. The site is designed to help homeowners and contractors find exactly what they need for any renovation project, with detailed product specifications and easy bulk ordering options.",
    tag: "E-commerce",
    category: "Websites",
    techStack: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Online Payments"
    ],
    gradientFrom: "#f5af19",
    gradientTo: "#f12711",
    features: [
      "Large product catalog with category organization",
      "Filtering by room, project type, and brand",
      "Detailed product specifications and dimensions",
      "Cart and secure checkout system",
      "Bulk ordering for contractors",
      "Stock and inventory management",
      "Mobile-friendly shopping experience"
    ],
    challenges:
      "The main challenge was organizing a large and diverse product catalog in a way that makes it easy for both homeowners and professionals to find what they need. Custom category structures and filtering options were implemented to streamline product discovery across different renovation projects.",
    outcome:
      "The business now reaches customers online with a well-organized store that handles everything from small decor purchases to large material orders. The client manages products, pricing, and orders directly from the WordPress dashboard.",
    year: "2024",
    role: "Web Developer",
    images: [
      "/images/projects/econest/econest_laptop_1.png",
      "/images/projects/econest/econest_laptop_2.png"
    ],
    liveUrl: "https://econestshop.gr/",
  },
  {
    id: "12",
    title: "Golden Smile",
    description:
      "Professional dentistry website showcasing dental services, team, and appointment booking.",
    fullDescription:
      "A WordPress website currently under development for a dental clinic in Greece. Built with Elementor, the site presents the clinic's services, introduces the dental team, and provides patients with essential information about treatments. The design prioritizes trust and professionalism, with clear navigation to help visitors find the services they need and easily get in touch with the clinic.",
    tag: "Website",
    category: "Websites",
    techStack: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Contact Forms"
    ],
    gradientFrom: "#56ccf2",
    gradientTo: "#2f80ed",
    features: [
      "Service pages for dental treatments",
      "Team and dentist profile sections",
      "Contact and appointment inquiry forms",
      "Clinic location and hours information",
      "Mobile-responsive design",
      "SEO-optimized structure for local search",
      "Before/after treatment gallery"
    ],
    challenges:
      "The challenge is creating a website that conveys professionalism and trust while making it easy for patients to understand available treatments and contact the clinic. The design balances medical credibility with approachability to reduce patient anxiety about dental visits.",
    outcome:
      "Currently under development. The website will help the clinic establish a stronger online presence and make it easier for new patients to discover their services and book appointments.",
    year: "2025",
    role: "Web Developer",
    images: [
      "/images/projects/goldensmile/goldensmile_laptop_1.png",
      "/images/projects/goldensmile/goldensmile_laptop_2.png",
      "/images/projects/goldensmile/goldensmile_laptop_3.png"
    ],
    liveUrl: "https://goldensmile.gr/",
  },
  {
    id: "13",
    title: "Greek Property Hunters",
    description:
      "Subscription platform for finding value-for-money land opportunities across Greece with email notifications.",
    fullDescription:
      "A WordPress subscription-based platform helping users discover the best value-for-money land listings across Greece. Built with Elementor and integrated with a membership system, subscribers receive curated property alerts based on their preferences, budget, and desired locations. The site aggregates land opportunities, evaluates them for investment potential, and notifies members before properties hit the mainstream market.",
    tag: "Website",
    category: "Websites",
    techStack: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Membership System",
      "Email Notifications"
    ],
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
    features: [
      "Subscription-based membership system",
      "Curated land listing alerts via email",
      "Property filtering by region, size, and budget",
      "Value-for-money analysis on each listing",
      "Member dashboard with saved searches",
      "Early access to new listings before public release",
      "Mobile-friendly property browsing"
    ],
    challenges:
      "The challenge was building a reliable notification system that delivers timely alerts without overwhelming subscribers. Custom automation was set up to filter new listings based on member preferences and send targeted emails only for relevant opportunities.",
    outcome:
      "Subscribers now receive personalized land alerts directly to their inbox, helping them find investment opportunities faster than browsing traditional listing sites. The platform has grown a loyal member base seeking land deals across Greece.",
    year: "2024",
    role: "Web Developer",
    images: [
      "/images/projects/gph/gph_laptop_1.png",
      "/images/projects/gph/gph_laptop_2.png",
      "/images/projects/gph/gph_laptop_3.png"
    ],
    liveUrl: "https://greekpropertyhunters.com/",
  },
  {
    id: "14",
    title: "Hona Festival",
    description:
      "Event website for a Naxos cultural festival with online ticketing and event schedule.",
    fullDescription:
      "A WordPress website developed for a cultural festival in Naxos, Greece. Built with Elementor, the site serves as the central hub for event information, artist lineups, and ticket purchases. The online ticketing system allows visitors to browse available events, select seats or ticket types, and complete secure purchases. The design captures the vibrant atmosphere of the festival while providing a straightforward path from discovery to booking.",
    tag: "Website",
    category: "Websites",
    techStack: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Online Ticketing System",
      "Payment Integration"
    ],
    gradientFrom: "#f6d365",
    gradientTo: "#fda085",
    features: [
      "Online ticket purchasing system",
      "Event schedule and artist lineup pages",
      "Secure payment processing",
      "Mobile-responsive event browsing",
      "Ticket management from WordPress admin",
      "Event countdown and announcements",
      "Social media integration for event sharing"
    ],
    challenges:
      "The main challenge was implementing a reliable ticketing system that could handle high demand during ticket release periods while keeping the booking process simple for users unfamiliar with online purchases. The system was configured to manage ticket inventory and prevent overselling.",
    outcome:
      "The festival successfully sold tickets online for the first time, reducing manual box office work and reaching a wider audience beyond Naxos. Organizers can now track sales and manage event capacity directly from the dashboard.",
    year: "2024",
    role: "Web Developer",
    images: [
      "/images/projects/honafestival/honafestival_laptop_1.png",
      "/images/projects/honafestival/honafestival_laptop_2.png",
      "/images/projects/honafestival/honafestival_laptop_3.png"
    ],
    liveUrl: "https://honafestival.com/",
  },
  {
    id: "15",
    title: "Ichnos Soap",
    description:
      "E-commerce website for handcrafted organic soaps and natural skincare products.",
    fullDescription:
      "A WordPress e-commerce website developed for a local artisan brand specializing in handmade organic soaps and natural skincare. Built with WooCommerce and Elementor, the site showcases the brand's commitment to eco-friendly ingredients while providing customers with a seamless shopping experience. The design emphasizes the natural and organic nature of the products through earthy tones and clean layouts, making it easy for customers to explore product ingredients and benefits before purchase.",
    tag: "E-commerce",
    category: "Websites",
    techStack: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "PHP",
      "JavaScript",
      "HTML/CSS",
      "Online Payments"
    ],
    gradientFrom: "#d4fc79",
    gradientTo: "#96e6a1",
    features: [
      "Product catalog with ingredient transparency",
      "Organic certification badges and trust signals",
      "Cart and secure checkout system",
      "Product filtering by skin type and ingredients",
      "Stock and inventory management",
      "Mobile-optimized shopping experience",
      "Customer reviews and ratings system"
    ],
    challenges:
      "The challenge was presenting detailed ingredient information and organic certifications in a way that builds customer trust without overwhelming the shopping experience. Custom product templates were created to highlight natural ingredients while keeping the purchase flow simple and intuitive.",
    outcome:
      "The brand successfully transitioned to online sales, reaching customers beyond the local market. The client manages all products, orders, and inventory independently through the WordPress dashboard.",
    year: "2024",
    role: "Web Developer",
    images: [
      "/images/projects/ichnossoap/ichnossoap_laptop_1.png"
    ],
    liveUrl: "https://ichnossoap.gr",
  },
  {
  id: "16",
  title: "Milianjo",
  description:
    "WooCommerce e-commerce website for beauty products with full shopping and checkout flow.",
  fullDescription:
    "A custom WordPress e-commerce website built for a beauty products brand. Using WooCommerce and Elementor, the site allows customers to browse products, manage their cart, and complete secure online purchases. The project focused on creating a clean shopping experience while giving the client full control over products, stock, and orders through the WordPress admin panel.",
  tag: "E-commerce",
  category: "Websites",
  techStack: [
    "WordPress",
    "WooCommerce",
    "Elementor",
    "PHP",
    "JavaScript",
    "HTML/CSS",
    "Online Payments"
  ],
  gradientFrom: "#a8edea",
  gradientTo: "#fed6e3",
  features: [
    "Custom WooCommerce shop design",
    "Product management and inventory control",
    "Cart and checkout system",
    "Secure online payments",
    "Order management from WordPress admin",
    "Mobile-first responsive shopping experience",
    "SEO-friendly product pages"
  ],
  challenges:
    "The main challenge was designing a clean and trustworthy shopping experience while ensuring the client could easily manage products, prices, and orders without technical knowledge. WooCommerce was customized to fit the brand and improve usability.",
  outcome:
    "The business can now sell products online with a smooth checkout process and manage all orders and inventory directly from the WordPress dashboard.",
  year: "2024",
  role: "Web Developer",
  images: [
    "/images/projects/milianjo/milianjo_laptop_1.png",
    "/images/projects/milianjo/milianjo_laptop_2.png",
    "/images/projects/milianjo/milianjo_laptop_3.png"
  ],
  liveUrl: "https://milianjo.gr/"
},
  {
  id: "17",
  title: "Selene Luxury Rooms",
  description:
    "WordPress booking website with room reservations and Airbnb calendar synchronization.",
  fullDescription:
    "A custom WordPress website for a luxury rooms rental business. Built with Elementor, the site allows visitors to book rooms directly through an integrated booking system while automatically synchronizing availability with the Airbnb calendar. The project focused on creating an elegant presentation for the property while solving the client's real operational need for managing bookings across multiple platforms without double reservations.",
  tag: "Website",
  category: "Websites",
  techStack: [
    "WordPress",
    "Elementor",
    "PHP",
    "JavaScript",
    "HTML/CSS",
    "Booking System",
    "Airbnb iCal Calendar Sync"
  ],
  gradientFrom: "#a8edea",
  gradientTo: "#fed6e3",
  features: [
    "Custom design built with Elementor",
    "Room booking and reservation system",
    "Airbnb calendar synchronization via iCal",
    "Availability management from WordPress admin",
    "Mobile-first responsive design",
    "SEO-friendly structure"
  ],
  challenges:
    "The main challenge was preventing double bookings between the website and Airbnb. iCal synchronization was implemented to keep availability updated automatically while ensuring the client could easily manage reservations from the WordPress dashboard.",
  outcome:
    "The client can now manage all room reservations from one place without double bookings, reducing manual work and increasing direct bookings through the website.",
  year: "2024",
  role: "Web Developer",
  images: [
    "/images/projects/selene-luxury-rooms/preview.svg"
  ],
  liveUrl: "https://example.com"
},
  {
  id: "18",
  title: "Velvore Transfers",
  description:
    "Custom WordPress business website with dynamic trip cost calculator and booking forms.",
  fullDescription:
    "A fully custom-designed WordPress website for a luxury transfers company in Greece. Built with Elementor, the site includes dynamic booking and contact forms, as well as a custom trip cost calculator that calculates transfer prices based on user input. The project focused on creating a premium visual identity while ensuring the client could easily manage content and pricing through the WordPress admin panel.",
  tag: "Website",
  category: "Websites",
  techStack: [
    "WordPress",
    "Elementor",
    "PHP",
    "JavaScript",
    "HTML/CSS",
    "Contact Form",
    "Custom Price Calculator Logic"
  ],
  gradientFrom: "#a8edea",
  gradientTo: "#fed6e3",
  features: [
    "Custom premium design built with Elementor",
    "Dynamic trip cost calculator based on distance and route",
    "Booking and contact forms",
    "Mobile-first responsive layout",
    "Easy content and price management via WordPress admin",
    "SEO-friendly structure"
  ],
  challenges:
    "The main challenge was implementing a dynamic pricing calculator inside a WordPress + Elementor environment while keeping the interface simple for users and editable for the client. Custom JavaScript and PHP logic were integrated with the form system to achieve this.",
  outcome:
    "The client now receives automated booking inquiries with calculated trip costs, reducing manual communication time and improving conversion rates.",
  year: "2024",
  role: "Web Developer",
  images: [
    "/images/projects/velvoreTransfers/velvoreTransfers_laptop_1.png",
    "/images/projects/velvoreTransfers/velvoreTransfers_laptop_2.png",
    "/images/projects/velvoreTransfers/velvoreTransfers_laptop_3.png",
    "/images/projects/velvoreTransfers/velvoreTransfers_laptop_4.png"
  ],
  liveUrl: "http://velvoretransfers.gr/"
}

];

export const filterTabs = ["All", "Mobile Apps", "Web Apps", "Websites"];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
