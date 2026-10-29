# BMI Calculator

Free, SEO-oriented Body Mass Index calculator. Enter height and weight in metric or imperial units and get a BMI value, category, and short health interpretation.

Built as a static Next.js app so it can run on shared hosting (for example Hostinger File Manager) with no server, database, or SSH.

## Features

- Real-time BMI calculation
- Metric (cm, kg) and imperial (ft/in, lbs) units
- BMI rounded to 1 decimal place
- Categories: Underweight, Normal, Overweight, Obese (color-coded)
- Input validation with safe handling of empty or out-of-range values
- FAQ section plus FAQ JSON-LD for search snippets
- Mobile-first, accessible form labels
- Static export (`output: 'export'`) for upload-only hosting

## BMI formula

Metric:

```text
BMI = weight (kg) / height² (m²)
```

Imperial is converted to metric first:

```text
height (m) = (feet × 12 + inches) × 0.0254
weight (kg) = pounds × 0.453592
```

Adult categories used by this app:

| BMI        | Category     |
| ---------- | ------------ |
| Below 18.5 | Underweight  |
| 18.5–24.9  | Normal       |
| 25.0–29.9  | Overweight   |
| 30.0+      | Obese        |

This tool is a screening calculator for adults, not medical advice.

## Tech stack

- Next.js 14 (App Router, static export)
- React 18
- TypeScript
- CSS custom properties (no UI library)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are written to `out/`. Upload the **contents** of `out/` to your domain root (`public_html`): include `index.html`, other HTML files, and the `_next/` folder.

After deploy:

1. Confirm the site loads at the root URL.
2. Test metric and imperial calculations.
3. Check mobile layout.
4. Review meta tags in page source.
5. Validate FAQ structured data with [Google Rich Results Test](https://search.google.com/test/rich-results).

`index.html` in the project root is a standalone static version of the calculator (inline CSS/JS) if you need a single-file drop-in without a Next.js build.

## Project structure

```text
BMI/
├── app/
│   ├── layout.tsx    # Metadata and FAQ schema
│   ├── page.tsx      # Calculator UI and logic
│   └── globals.css   # Theme and layout
├── index.html        # Standalone static calculator
├── next.config.js    # Static export
├── package.json
└── tsconfig.json
```

## Constraints

Keep the app static-export friendly: no API routes, no database, no Node-only packages, and no runtime-only environment variables.

## License

Private project. All rights reserved unless otherwise specified.
