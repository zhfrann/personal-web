# Muhammad Zhafran Ilham — Portfolio

Source code for my personal portfolio website. It presents my profile, work
experience, education, technical skills, projects, and long-form project
stories.

Live site: [zhafranilham.my.id](https://zhafranilham.my.id)

## About

I am a Software Engineering undergraduate focused on backend development,
REST APIs, databases, and scalable web applications. This website serves as a
central place for my professional background and selected work.

## Built with

- [Astro](https://astro.build) as the static site generator
- [React](https://react.dev) for interactive components
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Motion](https://motion.dev) for animation
- TypeScript for type safety

The website is generated as a static site.

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:4321> after the development server starts.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Check Astro, TypeScript, and component diagnostics |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run validate` | Run checks followed by a production build |

Run `npm run validate` before committing or deploying changes.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/data/resume.tsx` | Profile, work, education, skills, projects, and social links |
| `src/data/config.ts` | Site URL, SEO defaults, typography, and theme values |
| `src/content/project-stories/` | Markdown project stories shown under `/blog` |
| `src/components/` | React components used by the website |
| `src/pages/` | Astro routes and pages |
| `public/` | Images, favicons, `robots.txt`, and other static files |

Most portfolio content can be changed through `src/data/resume.tsx` without
editing the components. A project story filename must match its project
`slug`. For example, the slug `internify-lms` uses
`src/content/project-stories/internify-lms.md`.

## Build

```bash
npm run validate
```

The production-ready static files are generated in `dist/`. They can be
served by any static hosting provider or web server.

## SEO

The site includes canonical URLs, Open Graph and social sharing metadata, a sitemap, and `robots.txt`. The production domain is configured in `src/data/config.ts`; update it there if the domain changes.

The custom 404 page is marked `noindex` so search engines do not include it in search results.

## Development notes

- npm is the only package manager used; commit `package-lock.json` for reproducible installs.
- Local AI and editor tooling is intentionally excluded from the repository.
- Secrets and environment files must never be committed.

## Credits and license

This portfolio is based on the [Starfolio](https://github.com/webrating/starfolio) Astro template.

The project is available under the terms in [LICENSE](./LICENSE).
