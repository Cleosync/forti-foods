# FortiFoods Copilot Instructions

## Project Overview

FortiFoods is a Next.js 16 marketing/product landing page built with modern React and TypeScript. The site showcases food preparation solutions with multiple feature sections, animated components, and responsive design.

**Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, ESLint

## Build & Run Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm lint
```

## Project Structure

```
app/                  # Next.js App Router
  - page.tsx         # Main landing page (composition of sections)
  - layout.tsx       # Root layout
  - globals.css      # Global styles

components/          # Reusable UI components
  shared/            # Shared layout components (Header, BrandedMarquee)
  ui/                # Reusable UI primitives (Button)
  - *.tsx            # Feature section components

public/              # Static assets
  fonts/             # Custom fonts

Configuration:
  - tsconfig.json    # TypeScript strict mode enabled
  - eslint.config.mjs # ESLint with Next.js + TypeScript rules
  - next.config.ts   # Next.js configuration
  - tailwind.config.* # Tailwind CSS v4 config
```

## Coding Conventions

### Components

- **Functional components** with TypeScript props interfaces
- **Use "use client"** directive for interactive components (useState, useEffect, event handlers)
- **Props pattern**: Define prop types as inline interfaces or separate types
- **Export pattern**: `export default ComponentName` (named exports rare)

Example:

```tsx
"use client";

import React, { useState } from "react";

function MyComponent() {
  const [state, setState] = useState(false);
  return <div>{state ? "Active" : "Inactive"}</div>;
}

export default MyComponent;
```

### Styling

- **Tailwind CSS** for all styling (v4)
- **clsx utility** for conditional class merging
- **Responsive classes**: Use `sm:`, `md:`, `lg:` prefixes
- **Custom CSS**: Use `globals.css` for global styles, component-scoped in Tailwind
- **Button component example**: Uses variant pattern (primary, secondary, tertiary) + size modifiers (sm, md, lg)

### File Naming

- Components: `kebab-case.tsx` (e.g., `hero-section.tsx`, `forti-box.tsx`)
- Directories: `lowercase` (e.g., `components/shared/`, `components/ui/`)
- Page routes: lowercase with hyphens (e.g., `/solutions`, `/how-it-works`)

### TypeScript

- Strict mode enabled
- Type all props interfaces
- Use `ReactNode` for children props
- Path alias: `@/*` maps to workspace root

## Key Patterns

### Button Component (UI Primitive)

Pattern for variant-based components:

```tsx
<Button
  variant="primary|secondary|tertiary"
  size="sm|md|lg"
  fullWidth={boolean}
  className="additional classes"
>
  Label
</Button>
```

### Client-Side Interactivity

- Use `"use client"` at top of component
- Example: Header with scroll detection, nav toggle
- Import from `@iconify/react` for icons

### Animation

- Use `react-fast-marquee` for animated marquee sections
- Tailwind animations for other effects

### Layout Composition

- Main page (`app/page.tsx`) composes feature sections
- Each section is a standalone component
- Sections are stacked vertically

## Common Tasks

### Adding a New Component

1. Create file in `components/` directory with kebab-case name
2. Add TypeScript interface for props
3. Add "use client" if component needs interactivity
4. Use Tailwind for styling, clsx for conditional classes
5. Export as default

### Adding a New Page

1. Create directory under `app/` with page name
2. Add `page.tsx` with async/SSR or "use client" as needed
3. Import section components and compose layout
4. Update Header navigation if needed

### Styling Updates

- Modify Tailwind classes in component JSX
- For global styles, edit `app/globals.css`
- For theme/config changes, update Tailwind config files
- Test responsive behavior with browser devtools

## Important Notes

- **Stub Components**: Some components are still stubs (like `PrepTime`) - expand as needed
- **Type Safety**: All props should be typed; leverage TypeScript strict mode
- **Responsive Design**: Test on mobile/tablet/desktop viewports
- **Performance**: Next.js Image optimization for images, code splitting is automatic
- **ESLint**: Run `npm lint` before committing; config includes Next.js best practices

## Next.js App Router Essentials

- `page.tsx` defines routes (e.g., `app/solutions/page.tsx` → `/solutions`)
- `layout.tsx` wraps routes with shared layout
- Use `Image` component from `next/image` for optimized images
- Dynamic `use client` for browser APIs (window, localStorage, events)

## IDE Setup Tips

- ESLint is configured; ensure your editor runs the linter
- TypeScript strict mode is enabled for type safety
- Path alias `@/*` is configured for clean imports
- Tailwind IntelliSense recommended for class completion

---

**Last Updated**: March 9, 2026 | **Next.js**: 16.1.6 | **React**: 19.2.3
