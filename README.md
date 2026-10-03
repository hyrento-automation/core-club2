# ONYX CLUB — High Performance Athletic Sanctuary

A bold, editorial fitness and athletic club web application built with **Next.js 14 (App Router)**, **TypeScript (strict)**, **Tailwind CSS**, **Framer Motion**, and **Lenis Smooth Scroll**. Designed to match the exact aesthetic, typography, spacing, and interaction patterns of the reference editorial gym design.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom editorial design tokens
- **Animations**: Framer Motion (page transitions, crossfades, layout animations, scroll triggers)
- **Smooth Scroll**: Lenis (`@studio-freight/lenis` / `lenis`) with `lerp: 0.1` and `prefers-reduced-motion` compliance
- **Icons**: Lucide React
- **Validation**: Zod (strict schema validation for BMI calculator and Contact dispatches)

---

## 🎨 Design Tokens

- **Colours**:
  - `black`: `#000000`
  - `dark section`: `#141414` (with `#0a0a0a` bottom accents & `#1a1a1a` cards)
  - `white`: `#ffffff`
  - `body grey`: `#777777`
  - `light border`: `#e5e5e5`
  - `dark border`: `#262626`
  - `accent pink-red`: `#ef2853` (sampled directly from the reference floating icon button)
- **Headings**: Montserrat geometric sans, weight 700–800, uppercase, tight line-height (1.05–1.1), clamped (28px to 44px).
- **Body**: Poppins sans, weight 300–400, 14–15px, line-height 1.8, grey.
- **Micro Labels**: 10–11px, uppercase, letter-spacing 0.15–0.2em.
- **Section Watermarks**: Giant vertical outlined text (`GYM`, `STAFF`, `BODY`, `TIMETABLE`, `BLOG`, `ASK`) pinned to the left edge, rotated 90deg (bottom-to-top), transparent fill, 1px stroke at ~10% opacity, subtle parallax translation.
- **Outline Buttons**:
  - Double-line look with 1px border + 3px offset line.
  - Hover: offset line collapses to border (0.3s), arrow translates 3px up-right, background fills solid, text color inverts (0.35s).
  - Variants: `inline`, `box` (on-image), and `solid` (BMI Calculate).

---

## 📐 14 Sections Overview

1. **Header / Menu**: Outlined monogram logo top-left; flush solid black nav bar top-right (~52% width, ~52px tall) with hover underlines, dropdowns with 1px top accent line, 2-line unequal hamburger, mobile drawer, and floating action controls.
2. **Hero Slider (100vh)**: 2 full-bleed slides with double-exposure crossfade (`AnimatePresence mode="sync"`), diagonal glass overlay (`polygon(32% 0, 100% 0, 100% 100%, 75% 100%)`), outlined headline `"NOT YOUR / TYPICAL / FITNESS"` with solid 'O', 'Y', 'E', and custom desktop chevron mouse follower (`‹` / `›`).
3. **Intro + Portfolio Grid**: Watermark `GYM`. 6 zero-gap tiles (Row 1: square, square, wide 2 cols; Row 2: wide 2 cols, square, square). On desktop hover, the image wrapper shifts inward from top-left (revealing black) while a solid black label bar wipes in from the right edge with cubic-bezier timing.
4. **Team of Expert Coaches**: Dark `#141414`, watermark `STAFF`. 3 portrait cards with 90deg vertical name and role running vertically beside the photo; black square share icon expands upward into social icons.
5. **Reviews From You**: White background with faint giant quote marks watermark. 2x2 grid of small grayscale avatars; clicking cross-fades the quote (0.5s) while the active avatar becomes full-color with a 2px black outline.
6. **Video Banner**: Full-width cinematic banner with centred white circular play button on the top edge; hover pulses the ring and opens a responsive modal video player.
7. **What is BMI**: Watermark `BODY`. Interactive BMI & BMR calculator with Zod validation, 1px light-grey inputs, solid black button, animated 1s count up, and sliding row highlight in the status table.
8. **Three Service Banners**: 3 full-width zero-gap columns (Progression, Workout, Performance). The middle column uses a light washed overlay variation. Lift and zoom hover effects.
9. **Working Hours & Classes**: Dark `#141414`, watermark `TIMETABLE`. Filter tabs with sliding bracket-style indicator. Desktop hourly timetable grid (07:00–19:00, Mon–Sun) with multi-hour event span blocks, hover tooltips, and detail modal. Mobile day-by-day accordion list.
10. **Latest Blog Posts**: Watermark `BLOG`. 3 landscape cards with black square date badge flipping to accent color on hover, and title underlines that draw left-to-right.
11. **Four Program Tiles**: 2x2 zero-gap grid. Hover zooms image, lightens overlay, dims sibling tiles, and slides content up.
12. **Map**: Full-width grayscale cartographic map (~210px) with custom black kettlebell SVG marker, zoom controls, and click-to-activate interaction.
13. **Feel Free to Ask Anything**: Watermark `ASK`. Two address/email columns, contact form with floating labels and 1px borders, Zod validation, and right-aligned outline dispatch button.
14. **Footer**: Instagram follow strip with underline hover accent, 4 columns (monogram & socials with 360deg spin, blog post links, dotted world map with Brooklyn pin, working hours), and bottom copyright bar.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ♿ Accessibility & Reduced Motion
- Uses semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<nav>`, `<aside>`, `<footer>`, `<article>`).
- Respects `prefers-reduced-motion: reduce` by disabling parallax, scale, and long translations.
- All interactive elements feature keyboard focus outlines (`focus-visible:ring-2 focus-visible:ring-accent`).
