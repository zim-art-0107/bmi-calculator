# 🤖 AGENTS.md
## SEO-First BMI Calculator (Micro-SaaS)

This document defines how AI agents, contributors, and automation tools should understand, modify, and extend this project.

---

## 📌 Project Overview

**Project Name:** SEO-Optimized BMI Calculator  
**Type:** Micro-SaaS (Static, SEO-Driven)

**Primary Goal:**  
Build a fast, SEO-optimized BMI calculator that can be monetized, scaled, and eventually flipped on marketplaces like Flippa.

**Target Audience:**
- Health-conscious users
- Organic search traffic
- SaaS buyers and investors

---

## 🧠 Agent Responsibilities

AI agents working on this project must prioritize:

1. SEO-first development
2. Performance and fast load times
3. Clean, maintainable code
4. Monetization readiness
5. Static hosting compatibility

---

## 🏗️ Tech Stack Constraints

Agents MUST follow these rules:

- Framework: Next.js
- Hosting: Shared hosting (Hostinger)
- No SSH access
- No server-side backend
- No database
- No heavy dependencies

Code must be:
- Static-export friendly
- Uploadable via File Manager
- Compatible with `next build` and `next export`

---

## 🎨 UI / UX Guidelines

Agents should maintain:

- Card-based SaaS UI
- Minimal and clean design
- Mobile-first responsiveness
- Accessible form inputs
- Clear call-to-action buttons

Avoid:
- Heavy UI frameworks
- Over-engineered layouts
- Unnecessary animations

---

## 🧮 Functional Rules (BMI Logic)

### Calculation Formula
- Use the standard BMI formula:

  BMI = weight (kg) / height² (m²)

- For imperial units: Convert to metric first
  - Height: (feet × 12 + inches) × 0.0254 = meters
  - Weight: pounds × 0.453592 = kilograms

### Display Requirements
- Always display:
  - BMI value (rounded to 1 decimal place)
  - BMI category (Underweight, Normal, Overweight, Obese)
  - Health interpretation text (contextual message)
  - Color-coded category for visual feedback

### Input Validation
- Handle empty or invalid input safely (return null, don't calculate)
- Set reasonable min/max limits:
  - Height: 1-300 cm or 1-120 inches total
  - Weight: 1-1000 kg or 1-2200 lbs
- Provide user-friendly placeholders and labels
- Use `useMemo` for performance (calculate only when inputs change)

---

## 🔍 SEO Rules (CRITICAL)

Agents MUST implement and maintain:

### Meta Tags & Headers
- Unique, keyword-rich `<title>` (60-70 characters)
- Compelling meta description (150-160 characters)
- Proper H1, H2, H3 hierarchy (one H1 per page)
- Semantic HTML5 elements (`<header>`, `<article>`, `<section>`, `<footer>`)

### Structured Data (Schema.org)
- FAQ schema (JSON-LD) for rich snippets
- Organization schema if applicable
- BreadcrumbList schema for navigation
- Validated via Google Rich Results Test

### Content & Keywords
- Primary keywords: "BMI calculator", "Body Mass Index calculator", "calculate BMI online"
- Natural keyword integration (no keyword stuffing)
- Long-tail keyword variations
- Informative, helpful content (FAQ section)

### Technical SEO
- Fast loading times (Core Web Vitals optimized)
- Mobile-responsive design
- Canonical URLs set correctly
- Robots.txt configured (if needed)
- XML sitemap (for production)
- Clean URL structure

### Performance
- Minimize JavaScript bundle size
- Optimize images (if any)
- Use CSS efficiently
- Lazy load non-critical content

### Accessibility
- Proper ARIA labels on form inputs
- Alt text for images
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

---

## 💰 Monetization Structure

Leave space for:
- Google AdSense placement zones
- Future premium feature hooks
- Newsletter signup areas (optional)
- Affiliate link placement (if applicable)

Code structure should allow easy insertion of:
- Ad containers without breaking layout
- Paywall gates for premium features
- Analytics tracking code

---

## 📦 Build & Deployment

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

Output: Static files in `out/` directory

### Deployment Steps
1. Run `npm run build` (creates static export in `out/` directory)
2. Upload `out/` folder contents to Hostinger via File Manager
   - Upload all files from `out/` to your domain root (public_html)
   - Ensure `.html` files are in root, `_next/` folder included
3. Verify `index.html` is accessible at root URL
4. Test all functionality:
   - BMI calculation with both unit systems
   - Mobile responsiveness
   - SEO meta tags (view page source)
   - FAQ schema validation (use Google Rich Results Test)

### Important Notes
- Next.js static export uses `output: 'export'` in `next.config.js`
- All routes are pre-rendered at build time
- No server-side features are available (API routes won't work)
- Client-side JavaScript runs in the browser

---

## 🚫 Things to NEVER Do

- Add server-side code (API routes, getServerSideProps)
- Use Node.js-only packages
- Require database connections
- Break static export compatibility
- Add heavy dependencies (avoid UI libraries like Material-UI, Ant Design)
- Implement authentication/user accounts (keep it simple)
- Use environment variables that require runtime evaluation

---

## ✅ Code Quality Standards

- TypeScript strict mode enabled
- Consistent code formatting
- Meaningful variable/function names
- Comments for complex logic only
- No console.logs in production code
- Handle edge cases and errors gracefully

---

## 📝 File Structure Reference

```
BMI/
├── app/
│   ├── layout.tsx       # Root layout with metadata & FAQ schema (JSON-LD)
│   ├── page.tsx         # Main BMI calculator page (client component)
│   └── globals.css      # Global styles with CSS variables
├── next.config.js       # Static export configuration
├── package.json         # Dependencies (Next.js, React, TypeScript)
├── tsconfig.json        # TypeScript config
└── agents.md           # This file (project guidelines)
```

### Key Implementation Details

**app/layout.tsx:**
- Uses Next.js Metadata API for SEO
- Contains FAQ schema (JSON-LD) for rich snippets
- Imports global CSS styles

**app/page.tsx:**
- Client component (`'use client'`) for interactivity
- Real-time BMI calculation using `useMemo` hook
- Supports metric (cm/kg) and imperial (ft/in, lbs) units
- Displays BMI category with color coding
- Includes FAQ section with semantic HTML

**app/globals.css:**
- CSS custom properties (variables) for theming
- Mobile-responsive breakpoints
- Card-based UI styling

---

## 🎯 Success Metrics

This project is successful when:
- ✅ Fast load times (< 2s)
- ✅ SEO-friendly structure with proper meta tags
- ✅ FAQ schema validated in Google Rich Results Test
- ✅ Mobile-responsive (test on various devices)
- ✅ Accessible to all users (ARIA labels, keyboard nav)
- ✅ Real-time BMI calculation working smoothly
- ✅ Ready for AdSense integration
- ✅ Clean, maintainable code structure
- ✅ Scalable codebase for future features

## 🔧 Current Implementation Status

✅ **Completed:**
- BMI calculator with metric/imperial unit support
- Real-time calculation with React hooks
- SEO metadata (title, description, keywords)
- FAQ schema (JSON-LD) for rich snippets
- Semantic HTML structure
- Mobile-responsive CSS
- TypeScript configuration
- Static export configuration

🚧 **Future Enhancements (Optional):**
- BMI chart/visualization
- Historical tracking (localStorage)
- Print-friendly view
- Social sharing buttons
- Additional health calculators
- Blog/educational content section

---

*Last Updated: 2024 - Project fully implemented and ready for deployment*
