# Lalit Jakhar — Portfolio

A responsive portfolio built with the Next.js App Router, React, TypeScript, and Tailwind CSS. The site includes selected projects, professional experience, skills, contact details, structured data, and locally stored portfolio images.

## Requirements

- Node.js 20.9 or newer
- pnpm 10.10.0 (the version specified by `package.json`)

## Start locally

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and build

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Run the production build locally with `pnpm start`.

## Project structure

```text
src/
  app/         App Router pages, layout, and SEO routes
  components/  Page sections and shared UI
  data/        Portfolio content, project details, and SEO metadata
  lib/         Shared utilities
  styles/      Global styles
public/
  images/      Profile, project, gallery, and technology images
```

Project content and metadata are maintained in `src/data/`. Replace or update images in `public/images/` and keep their paths and descriptions in sync with the data files.

## Deployment

The project is configured for standard Next.js hosting, including Vercel. Import this repository into a hosting provider and use the default pnpm install and Next.js build settings. Set the production site URL and any service-specific settings in the hosting environment before deploying.
