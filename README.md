# Product Designer Portfolio

A hyper-modern personal portfolio built with **Next.js 15**, **TypeScript**, and **Material UI**. Features a light-first theme with dark mode, placeholder content for a 5-year Product Designer, and a contact section with form validation.

## Features

- Single-page home with anchored sections: Hero, About, Work, Skills, Contact
- 3 case study detail pages at `/work/[slug]`
- Light theme by default with persistent dark mode toggle
- Responsive layout with mobile navigation drawer
- Framer Motion scroll animations (respects `prefers-reduced-motion`)
- SEO metadata, sitemap, and robots.txt

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Customizing Content

All portfolio content lives in a single data file:

```
src/data/portfolio.ts
```

Update the following sections:

| Section | What to change |
|---------|----------------|
| `profile` | Your name, bio, tagline, location, avatar path |
| `projects` | Case study titles, summaries, problem/process/outcome, images |
| `skills` | Your skills grouped by category |
| `socialLinks` | Your LinkedIn, Dribbble, Behance URLs |
| `contact` | Your email and contact copy |

Replace placeholder images in `public/images/` with your own project screenshots and photo.

## Theming

Light and dark palettes are defined in `src/theme/theme.ts`. The color mode toggle persists to `localStorage` under the key `portfolio-color-mode`.

## Deployment (Vercel)

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set environment variable `NEXT_PUBLIC_SITE_URL` to your production URL (for sitemap)
4. Deploy

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Navbar, Footer, ThemeToggle
│   ├── sections/         # Hero, About, Work, Skills, Contact
│   └── ui/               # Reusable UI components
├── context/              # Color mode context
├── data/                 # Portfolio content (edit this!)
└── theme/                # MUI theme configuration
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Material UI v6](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)
