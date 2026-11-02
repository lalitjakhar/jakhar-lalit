# Lalit Jakhar - Portfolio Website

A modern, responsive portfolio website built with Next.js 16.1.4, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 16.1.4 with Page Router
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🚀 Optimized for performance
- 🔍 SEO optimized with metadata and structured data
- 📊 Vercel Analytics integration
- ⚡ Vercel Speed Insights

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory (Page Router)
│   │   ├── layout.tsx    # Root layout with metadata
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── About.tsx
│   │   ├── Resume.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/             # Data files
│   │   └── resumeData.ts
│   ├── styles/           # Global styles
│   │   └── globals.css
│   └── assets/           # Static assets
├── public/               # Public assets
└── package.json
```

## Technologies Used

- **Next.js 16.1.4** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vercel Analytics** - Analytics
- **Vercel Speed Insights** - Performance monitoring

## License

Copyright © 2024 Lalit Jakhar. All rights reserved.
