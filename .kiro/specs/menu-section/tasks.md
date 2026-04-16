# Implementation Plan: Menu Section

## Overview

Replace the existing `MenuPreview` component with a full-catalog `MenuSection` featuring 7 categories, 37 products with Peruvian soles pricing, interactive category filtering via accessible tabs, highlight badges, featured product treatment, and Framer Motion animations. The implementation uses a separate data file (`src/data/menuData.ts`) for types and product data, and replaces the component in-place at `src/components/MenuPreview.tsx` to preserve existing imports.

## Tasks

- [x] 1. Create menu data file with TypeScript types and product data
  - [x] 1.1 Create `src/data/menuData.ts` with `HighlightLabel` type, `MenuItem` interface, `Category` interface, `formatPrice` function, `categories` array (7 categories with slugs), and `menuItems` array (all 37 products with name, description, numeric price, category slug, optional highlightLabel, optional featured flag)
    - Define `HighlightLabel` as union type: `"Best seller" | "Edición limitada" | "Chef's creation" | "Favorito" | "Ideal para regalo"`
    - Define `MenuItem` interface with `name: string`, `description: string`, `price: number`, `category: string`, `highlightLabel?: HighlightLabel`, `featured?: boolean`
    - Define `Category` interface with `slug: string`, `name: string`
    - Implement `formatPrice(price: number): string` returning `"S/ {price}"`
    - Export `categories` array with all 7 categories: tortas-enteras, porciones-individuales, postres-de-vitrina, box-regalos-dulces, bebidas-calientes, bebidas-frias, especiales-de-temporada
    - Export `menuItems` array with all 37 items across categories (5 tortas enteras, 5 porciones individuales, 7 postres de vitrina, 4 box/regalos dulces, 7 bebidas calientes, 5 bebidas frías, 4 especiales de temporada)
    - Mark the 6 featured products: "Torta de frutos rojos y vainilla", "Torta de chocolate belga", "Cheesecake de maracuyá", "Box de 6 macarons", "Croissant relleno de pistacho", "Sweet Box Clásica"
    - _Requirements: 6.1, 6.2, 6.3, 4.2, 5.1_

- [x] 2. Replace MenuPreview with MenuSection component
  - [x] 2.1 Rewrite `src/components/MenuPreview.tsx` as the new `MenuSection` component
    - Add `"use client"` directive
    - Import `useState` from React, `motion` and `AnimatePresence` from `framer-motion`, Lucide icons (`Star`, `Sparkles`, `ChefHat`, `Heart`, `Gift`), and data/types from `src/data/menuData.ts`
    - Implement `activeCategory` state defaulting to `"tortas-enteras"`
    - Render `<section id="menu">` with the same outer structure (py-28 lg:py-36, max-w-7xl container)
    - Render animated header with "La Carta" label, "Nuestra Carta" heading, and the introductory paragraph: "Postres hechos a mano, pensados para celebrar lo cotidiano. Sabores delicados, ingredientes nobles y una vitrina creada para enamorar a primera vista."
    - Use `motion.div` with `whileInView` for header entrance animation matching existing pattern
    - Export as `default` to preserve `page.tsx` import
    - _Requirements: 1.1, 1.2, 1.3, 8.1, 9.1, 9.2_

  - [x] 2.2 Implement category tabs with ARIA tablist pattern
    - Render `<div role="tablist" aria-label="Categorías del menú">` containing a button per category
    - Each button gets `role="tab"`, `aria-selected`, `aria-controls="tabpanel-{slug}"`, and `tabIndex` (0 for active, -1 for inactive)
    - Active tab styled with accent background/text; inactive tabs with subtle hover state using Design_Tokens
    - Container uses `overflow-x-auto` and `flex` with `gap` for horizontal scrolling on mobile without layout overflow
    - Hide scrollbar with `scrollbar-hide` or equivalent Tailwind utility
    - Implement keyboard navigation: ArrowLeft/ArrowRight to move between tabs, Enter/Space to activate
    - `onClick` sets `activeCategory` to the clicked category slug
    - _Requirements: 2.1, 2.3, 2.4, 7.3, 10.1, 10.2, 10.4_

  - [x] 2.3 Implement product grid with AnimatePresence transitions
    - Wrap the product grid in `<AnimatePresence mode="wait">` keyed by `activeCategory`
    - Render `<div role="tabpanel" id="tabpanel-{slug}" aria-labelledby="tab-{slug}">` as the grid container
    - Use responsive grid: `grid-cols-1` on mobile, `md:grid-cols-2` on tablet/desktop
    - Filter `menuItems` by `activeCategory` and map to product cards
    - Apply staggered entrance animation with `staggerChildren: 0.08` and item variants using `[0.22, 1, 0.36, 1]` easing
    - Ensure category transition completes within 500ms (exit 200ms + enter 300ms)
    - _Requirements: 2.2, 2.5, 7.1, 7.2, 8.2, 8.3, 8.4, 10.3_

  - [x] 2.4 Implement product cards with highlight badges and featured treatment
    - Render each product as `<article>` with `bg-white rounded-2xl p-6 shadow-sm` and hover state (`hover:shadow-md transition-all duration-300`)
    - Display product name in `font-heading` (Playfair Display), description in `font-body text-muted`, price via `formatPrice()` in `font-body font-semibold`
    - Conditionally render `HighlightBadge` pill above product name when `highlightLabel` exists, with label-to-color mapping: Best seller → `bg-delicate/50` + Star icon, Edición limitada → `bg-card/50` + Sparkles, Chef's creation → `bg-warm/50` + ChefHat, Favorito → `bg-accent/15` + Heart, Ideal para regalo → `bg-card/50` + Gift
    - Featured products get `border-l-4 border-accent md:col-span-2` for larger visual treatment
    - Products without highlight labels render without badge, maintaining consistent layout
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 9.3, 9.4_

  - [x] 2.5 Add footer note with soles pricing disclaimer
    - Render animated footer text: "Precios en soles (S/). Menú sujeto a disponibilidad de temporada."
    - Use `motion.p` with fade-in animation matching existing pattern
    - _Requirements: 9.1_

- [x] 3. Checkpoint — Verify component renders correctly
  - Ensure the app builds without errors (`npm run build`), the menu section renders with all 7 category tabs, products display correctly with prices in soles, category switching works, and featured products have distinct styling. Ask the user if questions arise.

- [x] 4. Set up testing framework and write tests
  - [x] 4.1 Install testing dependencies
    - Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, and `fast-check` as dev dependencies
    - Create `vitest.config.ts` with jsdom environment and path aliases matching `tsconfig.json`
    - _Requirements: (testing infrastructure)_

  - [ ]* 4.2 Write data integrity unit tests for `menuData.ts`
    - Create `src/data/__tests__/menuData.test.ts`
    - Test `categories` has exactly 7 entries with expected slugs
    - Test `menuItems` has 37 total items
    - Test item counts per category match: tortas-enteras=5, porciones-individuales=5, postres-de-vitrina=7, box-regalos-dulces=4, bebidas-calientes=7, bebidas-frias=5, especiales-de-temporada=4
    - Test all `highlightLabel` values are from the allowed set
    - Test the 6 named featured products have `featured: true`
    - Test every `MenuItem.category` matches a valid `Category.slug`
    - Test all prices are positive integers
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ]* 4.3 Write property-based test for category filtering
    - Create `src/data/__tests__/menuData.property.test.ts`
    - **Property 1: Category filter returns only matching items**
    - Use `fast-check` to generate random arrays of `MenuItem` objects with random category assignments from a pool of slugs
    - Pick a random category slug, filter items by that slug
    - Assert: every returned item has `category === selectedSlug`
    - Assert: count of returned items equals count of items with that category in the original array
    - Minimum 100 iterations
    - **Validates: Requirements 2.2**

  - [ ]* 4.4 Write property-based test for price formatting
    - Add to `src/data/__tests__/menuData.property.test.ts`
    - **Property 2: Price formatting round-trip**
    - Use `fast-check` to generate random positive integers (1 to 100,000)
    - Call `formatPrice(n)`, assert result matches `/^S\/ \d+$/`
    - Assert: `parseInt(result.replace("S/ ", ""), 10) === n`
    - Minimum 100 iterations
    - **Validates: Requirements 3.3, 6.3**

- [x] 5. Final checkpoint — Ensure all tests pass
  - Run `npx vitest --run` and ensure all tests pass. Ensure the app builds without errors. Ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The component file stays at `src/components/MenuPreview.tsx` with `default export` to preserve the existing `page.tsx` import
- All 37 menu items with descriptions and prices should follow the content brief from the design document
- The existing site easing curve `[0.22, 1, 0.36, 1]` must be used for all animations
- Property tests validate universal correctness properties from the design document
- No testing framework exists yet — task 4.1 sets up Vitest + fast-check
