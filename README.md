# MyPortfolio

A modern, responsive personal portfolio website showcasing software engineering projects, skills, and experience. Built with Next.js 14 and React 18, featuring dark/light theme support and smooth animations.

## Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme** - Seamless theme switching with system preference detection
- **Modern UI** - Clean, professional design using Tailwind CSS and shadcn/ui components
- **Smooth Animations** - Framer Motion animations for enhanced user experience
- **SEO Optimized** - Structured data (JSON-LD), sitemap, and metadata for better search visibility
- **Performance Focused** - Optimized for fast loading and smooth interactions
- **Type Safe** - Built with TypeScript for robust, maintainable code

## Tech Stack

**Framework & UI:**
- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

**Styling:**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives

**Animations & Interactions:**
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel component

**Forms & Validation:**
- [React Hook Form](https://react-hook-form.com/) - Form management
- [Zod](https://zod.dev/) - Schema validation

**Other Libraries:**
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Lucide React](https://lucide.dev/) - Icon library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- [Recharts](https://recharts.org/) - Chart library

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
MyPortfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (metadata, providers)
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects route
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # Robots.txt config
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Home.tsx          # Main home component
│   ├── Navbar.tsx        # Navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Education.tsx     # Education section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section
│   └── ...               # Other components
├── constants/            # Constants and configuration
│   └── animations.ts     # Framer Motion variants
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
│   └── globals.css       # CSS variables & base styles
└── types/                # TypeScript type definitions
```

## Configuration

### Theme System
- Uses CSS variables for flexible theming (see `styles/globals.css`)
- Dark mode class strategy via `next-themes`
- Toggle between light, dark, and system themes

### Path Aliases
- `@/*` - Maps to root directory for clean imports
- Example: `import { Button } from "@/components/ui/button"`

### Adding shadcn/ui Components
```bash
npx shadcn-ui@latest add <component-name>
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with default settings

Vercel Analytics is pre-configured for tracking.

## Environment Variables

Currently, no environment variables are required for basic functionality. Add a `.env.local` file if you need custom configuration.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out through the contact form on the website.

---

Built with Next.js and deployed on Vercel
