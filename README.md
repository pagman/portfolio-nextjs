# Portfolio - Panagiotis Mantas | mCubedDevLabs

A modern, dark-themed developer portfolio built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Features smooth animations, project showcases with individual detail pages, and a fully responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16.1.5-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Features

- **Dark Theme** - Sleek dark design with purple-blue gradient accents
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Project Showcase** - Filterable project grid with category tabs (All, Mobile Apps, Web Apps, Websites)
- **Project Detail Pages** - Individual pages for each project with full descriptions, features, and outcomes
- **Smooth Animations** - Hover effects, transitions, and smooth scroll navigation
- **Modern Tech Stack** - Built with the latest versions of Next.js, React, and Tailwind CSS
- **shadcn/ui Components** - Beautiful, accessible UI components
- **SEO Optimized** - Dynamic metadata for each page
- **Static Site Generation** - Pre-rendered pages for optimal performance

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.5 | React framework with App Router |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | UI component library |
| [Lucide React](https://lucide.dev/) | Latest | Icon library |

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── projects/
│       └── [id]/
│           └── page.tsx     # Dynamic project detail pages
├── components/
│   ├── layout/
│   │   └── navbar.tsx       # Navigation bar
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── about-section.tsx
│   │   └── contact-section.tsx
│   ├── shared/
│   │   ├── project-card.tsx
│   │   ├── section-header.tsx
│   │   └── filter-tabs.tsx
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── badge.tsx
│       └── card.tsx
├── data/
│   └── projects.ts          # Project data & types
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## Customization

### Personal Information

Update your name and branding in:
- `components/layout/navbar.tsx` - Logo text
- `app/layout.tsx` - Page metadata
- `components/sections/hero-section.tsx` - Hero title and description
- `components/sections/about-section.tsx` - About me content
- `components/sections/contact-section.tsx` - Social links

### Projects

Edit your projects in `data/projects.ts`:

```typescript
{
  id: "1",
  title: "Project Name",
  description: "Short description",
  fullDescription: "Detailed description for the project page",
  tag: "Mobile App",
  category: "Mobile Apps",
  techStack: ["React Native", "Firebase"],
  gradientFrom: "#667eea",
  gradientTo: "#764ba2",
  features: ["Feature 1", "Feature 2"],
  challenges: "Description of challenges faced",
  outcome: "Results and impact",
  year: "2024",
  role: "Lead Developer",
  images: ["/images/projects/project-name/image1.svg"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example"
}
```

### Project Images

Store project images in `public/images/projects/<project-name>/`.

| Use Case | Dimensions | Aspect Ratio |
|----------|------------|--------------|
| Project Card | 800 x 600px | 4:3 |
| Project Detail | 1920 x 1080px | 16:9 |

Supported formats: `.svg`, `.png`, `.jpg`, `.webp`

### Colors

The gradient colors can be customized in `app/globals.css`:

```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
}
```

### Skills

Update the skills grid in `components/sections/about-section.tsx`:

```typescript
const skills = ["React", "Next.js", "TypeScript", "Node.js", "React Native", "Tailwind"];
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-nextjs)

### Other Platforms

This is a static site that can be deployed to any platform that supports Next.js:

- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [GitHub Pages](https://pages.github.com/) (with static export)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## Performance

- Lighthouse Score: 95+ across all metrics
- Static Site Generation for instant page loads
- Optimized images with Next.js Image component
- Minimal JavaScript bundle size

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Panagiotis Mantas** - mCubedDevLabs

- Website: [mcubeddevlabs.com]
- GitHub: [@pagman]
- LinkedIn: [linkedin.com/in/panagiotis-mantas-968ba1188/]

---

Made with Next.js, Tailwind CSS, and shadcn/ui
