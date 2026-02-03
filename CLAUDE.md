# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS website for NULogic, a commerce engineering and managed services firm. No build tools, no frameworks, no package manager — pure HTML5, CSS3, and vanilla JavaScript.

## Running Locally

```bash
# Any static file server works:
npx http-server
# or
python -m http.server 8000
```

## Deployment

Hosted on Vercel as a static site. Deploys automatically on push to `main`.

```bash
vercel --prod    # Manual production deploy
```

## Architecture

**No build step.** Every page is a standalone HTML file with shared CSS/JS assets.

### Key shared files
- `css/styles.css` — Main stylesheet (~2,200 lines), defines CSS custom properties for brand colors, spacing, and typography
- `css/casestudy-responsive.css` — Responsive overrides for case study pages
- `js/script.js` — Navigation toggle and dropdown menu logic (mobile click, desktop hover)
- `js/footer.js` — Shared footer component injected at runtime into every page's `<footer></footer>` element. Handles logo, navigation links, LinkedIn social link, copyright year, path detection, and English/Spanish language switching automatically.

### Page structure
Every page follows the same pattern: sticky header with nav dropdowns → hero section (gradient background + floating SVG icons) → content sections → footer. Header markup is duplicated in each HTML file (no templating). The footer is rendered dynamically by `js/footer.js` — each page only contains an empty `<footer></footer>` tag.

### Content organization
- Root HTML files: main site pages (`index.html`, `about.html`, `services.html`, `platforms.html`, `contact.html`, `work.html`, `partners.html`, `commerce-build.html`)
- `work/` — 23 individual case study pages
- `partners/` — 10 platform detail pages (Adobe Commerce, Commercetools, Shopify, etc.)
- `es/` — Full Spanish translation mirroring the English site structure (`es/index.html`, `es/work/`, `es/partners/`)
- `images/` — All static assets organized in subdirectories (`casestudies/`, `clients/`, `icons/`, `leadership/`, `partners/`, `banners/`, `certifications/`)

### Brand theming
CSS custom properties in `:root` of `styles.css` control all brand values:
- Colors: `--color-primary` (#1A1A1A), `--color-accent-purple` (#89389f), `--color-accent-red` (#ed2925)
- Fonts: Montserrat (headings), Open Sans (body) — loaded from Google Fonts
- Spacing scale: `--space-xs` through `--space-xxl`

### Responsive breakpoints
1920px → 1200px → 992px → 768px → 480px (mobile-first media queries in stylesheets)

### Contact form
Uses Formspree as the form backend. The form action URL in `contact.html` must contain a valid Formspree form ID.

### Hero carousel (`index.html`)
The homepage hero uses a rotating slide system with CSS + vanilla JS:
- **Equal-height slides**: All `.hero-slide` elements are stacked in the same CSS Grid cell (`grid-row: 1 / 2; grid-column: 1 / 2`) so the container height is always determined by the tallest slide. Only `opacity` and `pointer-events` toggle between slides — never `position` or `display`. This prevents layout jumps during transitions.
- **Indicators**: `.hero-indicators` sits in grid row 2, below the slides.
- **JS control**: Inline `<script>` after the hero section handles auto-rotation (6s interval) and manual indicator clicks. It is not in `js/script.js`.
- When adding/removing slides, also update the `.hero-indicator` divs and their `data-slide` attributes to match.

## Important Patterns

- **Bilingual content**: When modifying any English page, the corresponding Spanish page in `es/` likely needs a matching update.
- **Header is not templated**: Header/nav markup is copy-pasted across all ~83 HTML files. Navigation changes must be applied to every page.
- **Footer is shared via JS**: All pages use `js/footer.js` to render the footer. To change footer content, links, or social media — edit `js/footer.js` only. The script auto-detects path depth (root, one-level, two-level subdirectories) and language (`es/` pages get Spanish labels). Each HTML page just needs `<footer></footer>` and a `<script src="[path]/footer.js"></script>` tag with the correct relative path.
- **Gradient theme**: Purple-to-red gradients (`#89389f` → `#ed2925`) are used heavily in hero sections, CTAs, and decorative elements.
- **Adding new pages**: Copy an existing HTML file with the same layout pattern, update content, and add navigation links across all pages. Ensure `footer.js` script tag uses the correct relative path for the page's directory depth (`js/footer.js` for root, `../js/footer.js` for one level deep, `../../js/footer.js` for two levels deep).
- **CSS cache busting**: Stylesheet links use a `?v=` query parameter (e.g. `styles.css?v=5`). Increment the version number when making CSS changes to ensure browsers pick up the update.
