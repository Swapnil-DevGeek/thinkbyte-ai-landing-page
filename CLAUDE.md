# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Core Development Tasks:**
- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

**Package Management:**
This project uses npm with package-lock.json, but also has pnpm-lock.yaml and bun.lockb files present. Prefer npm for consistency unless explicitly required otherwise.

## Architecture & Structure

### Tech Stack
- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite with SWC for fast compilation
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives + shadcn/ui components
- **Routing:** React Router DOM v6
- **State Management:** React Query for server state
- **Animations:** Framer Motion + custom MagicUI components

### Project Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components (Button, Card, etc.)
│   ├── magicui/      # Custom animated components (FadeIn, SlideIn, etc.)
│   └── [Component].tsx # Main page components
├── pages/
│   ├── Index.tsx     # Landing page
│   ├── Work.tsx      # Portfolio/work showcase
│   ├── NotFound.tsx  # 404 page
│   └── work/         # Individual case study pages
├── hooks/            # Custom React hooks
└── lib/
    └── utils.ts      # Utility functions with clsx/tailwind-merge
```

### Key Architecture Patterns

**Component Organization:**
- UI components follow shadcn/ui patterns with Radix UI primitives
- MagicUI components provide reusable animations (FadeIn, SlideIn, AnimatedCard)
- Main components are feature-specific (HeroSection, Navigation, etc.)

**Styling System:**
- Uses CSS custom properties for theming (HSL color system)
- Extensive Tailwind configuration with custom gradients, shadows, and animations
- Custom color palette: primary, secondary, accent with glow variants
- Custom animations: marquee, accordion, scroll effects

**Route Structure:**
- `/` - Main landing page with hero, services, testimonials
- `/work` - Portfolio showcase with project grid and client logos
- `/work/[project-id]` - Individual case study pages (seo-agent, dementia-care, recruitment-agent)

### Design System

**Colors:** HSL-based with CSS custom properties, supporting dark mode
**Typography:** Inter font family with custom font-sans configuration
**Animations:** Framer Motion for complex animations, Tailwind for simple transitions
**Components:** Consistent use of backdrop-blur, gradients, and subtle shadows for glassmorphism effects

### Important Implementation Notes

- Project uses React Router for client-side routing
- All major sections use FadeIn/SlideIn animations for smooth UX
- Image assets are hosted externally (Unsplash, client logos from thinkbyte.ai)
- Mobile-responsive design with responsive breakpoints
- TypeScript configuration allows JavaScript files and has relaxed strict checks

## Component Patterns

**Animation Components:**
- Use `<FadeIn delay={0} duration={600}>` for entrance animations
- Use `<SlideIn direction="up|down|left|right">` for directional animations
- Wrap cards/sections with `<AnimatedCard>` for hover effects

**Layout Patterns:**
- Sections typically use `py-20 md:py-28` for consistent vertical spacing
- Content containers use `max-w-7xl mx-auto px-4` for responsive centering
- Grid layouts prefer `grid grid-cols-1 lg:grid-cols-2` patterns

**UI Consistency:**
- Buttons use shadcn/ui Button component with consistent variants
- Cards use consistent backdrop-blur and border styling
- Gradients follow the custom theme configuration in tailwind.config.ts