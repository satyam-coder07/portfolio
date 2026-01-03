# Portfolio Architecture & Design System

## Overview
This portfolio is built to be a high-performance, minimalist showcase of engineering and product design skills. It leverages a modern stack focusing on interaction design, cleanliness, and maintainability.

## core Stack
- **Framework:** React 19 + Vite (Fast HMR and optimizations)
- **Styling:** Tailwind CSS 4 (Utility-first, reduced bundle size)
- **Animation:** Framer Motion (Declarative animations, layout transitions)
- **Icons:** Lucide React (Consistent SVG iconography)

## Component Architecture

### 1. `App.jsx`
The single source of truth for the layout. It orchestrates the flow:
- `Hero`: High-impact typographic introduction.
- `TechMarquee`: Infinite scrolling ticker for skills (Framer Motion).
- `WorkGrid`: A responsive 2-column grid for major projects.
- `DeepDives`: A specialized section for research/whitepaper analysis.
- `Footer`: Includes a live "status widget" component.

### 2. `Reveal.tsx` (Component)
A reusable wrapper that triggers a slide-up + fade-in animation when children enter the viewport.
- **Hook:** `useAnimation`, `useInView`
- **Logic:** Only triggers once to prevent distraction.

### 3. `Magnetic.tsx` (Component)
A micro-interaction wrapper usually applied to buttons or cards.
- **Logic:** Tracks mouse position relative to the element center.
- **Effect:** The element physically "pulls" towards the cursor, creating a tactile feel.

### 4. `TechMarquee.jsx` (Component)
A continuous loop of skills.
- **Optimization:** Uses `transform: translate3d` logic via Framer Motion for GPU acceleration, avoiding layout thrashing.
- **Design:** Uses `WebkitTextStroke` to create the "hollow" text effect, adding visual depth without weight.

## Design Decisions
- **Typography:** `Inter` for unmatched readability and screen performance.
- **Color Palette:** Strictly Monochrome (Black `#000`/ White `#fff`) with semantic accent colors (Green for "Available", Gold for "Research").
- **Glassmorphism:** Used sparingly on cards (`bg-white/5`, `backdrop-blur`) to establish hierarchy without blocking the background.

## Deployment
- configured for easy deployment on Vercel/Netlify.
- `vite build` generates a highly optimized `dist` folder.
