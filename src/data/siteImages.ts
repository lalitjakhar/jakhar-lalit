export const SITE_URL = "https://lalit-jakhar.vercel.app";

export interface SiteImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const profileImages: SiteImage[] = [
  {
    src: "/images/lalit-jakhar-about.webp",
    alt: "Lalit Jakhar professional headshot as a Frontend Developer in Jaipur, Rajasthan",
    title: "Lalit Jakhar - Frontend Developer Profile Photo",
    caption:
      "Lalit Jakhar, frontend developer in Jaipur, working with React.js and Next.js.",
    width: 979,
    height: 992,
    priority: true,
  },
  {
    src: "/images/lalit-jakhar-about-2.webp",
    alt: "Lalit Jakhar portrait photo for web developer portfolio and personal branding",
    title: "Lalit Jakhar - Web Developer Portfolio Photo",
    caption:
      "Portrait of Lalit Jakhar showcasing his work as a responsive web and UI developer.",
    width: 1024,
    height: 1536,
    priority: true,
  },
  {
    src: "/images/lalit-jakhar-profile-picture.jpeg",
    alt: "Lalit Jakhar profile picture used across social profiles and portfolio branding",
    title: "Lalit Jakhar - Profile Picture",
    caption:
      "Profile picture of Lalit Jakhar, a frontend developer in Jaipur.",
    width: 400,
    height: 400,
  },
];

export const aboutGalleryImages: SiteImage[] = [
  {
    src: "/images/about/lalit-kumar-jakhar-post.webp",
    alt: "Lalit Jakhar at a professional event sharing frontend development insights",
    title: "Lalit Jakhar at Professional Event",
    caption:
      "Lalit Jakhar participating in a professional event focused on modern web development.",
    width: 1400,
    height: 1750,
  },
  {
    src: "/images/about/lalit-kumar-jakhar-post-2.webp",
    alt: "Lalit Jakhar collaborating with team members on a web development project",
    title: "Lalit Jakhar Team Collaboration",
    caption:
      "Lalit Jakhar working with colleagues on building responsive React and Next.js applications.",
    width: 1080,
    height: 1314,
  },
  {
    src: "/images/about/lalit-kumar-jakhar-post-3.webp",
    alt: "Lalit Jakhar presenting UI and UX design work for a client website",
    title: "Lalit Jakhar UI/UX Presentation",
    caption:
      "Lalit Jakhar presenting user interface and user experience design outcomes for a client project.",
    width: 1080,
    height: 1083,
  },
  {
    src: "/images/about/lalit-kumar-jakhar-post-4.webp",
    alt: "Lalit Jakhar at a tech meetup discussing React.js and Next.js development",
    title: "Lalit Jakhar at Tech Meetup",
    caption:
      "Lalit Jakhar at a technology meetup discussing frontend engineering with React.js and Next.js.",
    width: 1400,
    height: 1750,
  },
];

export const portfolioImages: SiteImage[] = [
  {
    src: "/images/portfolio/zyneto-global-technologies-v2.webp",
    alt: "Zyneto Global Technologies website version 2 homepage designed by Lalit Jakhar",
    title: "Zyneto Global Technologies Website Version 2",
    caption:
      "Second version of the Zyneto Global Technologies corporate website built with modern frontend technologies.",
    width: 1920,
    height: 1052,
  },
  {
    src: "/images/portfolio/zyneto-global-technologies.webp",
    alt: "Zyneto Global Technologies corporate website homepage screenshot by Lalit Jakhar",
    title: "Zyneto Global Technologies Website",
    caption:
      "Corporate website for Zyneto Global Technologies featuring responsive design and scalable web architecture.",
    width: 1920,
    height: 1049,
  },
  {
    src: "/images/portfolio/kroolo-corp-website.webp",
    alt: "Kroolo Corp AI productivity platform website homepage developed by Lalit Jakhar",
    title: "Kroolo Corp Website",
    caption:
      "Official Kroolo Corp website showcasing AI-powered productivity management software.",
    width: 1920,
    height: 1027,
  },
  {
    src: "/images/portfolio/kroolo-corp-website-v2.webp",
    alt: "Kroolo Corp website version 2 with improved UX and analytics by Lalit Jakhar",
    title: "Kroolo Corp Website Version 2",
    caption:
      "Enhanced Kroolo Corp website with improved user experience, analytics, and intuitive design patterns.",
    width: 1920,
    height: 1048,
  },
  {
    src: "/images/portfolio/kroolo-ai-workos.webp",
    alt: "Kroolo AI WorkOS homepage on a laptop, built by Lalit Jakhar with Next.js and Tailwind CSS",
    title: "Kroolo AI-Powered WorkOS Website",
    caption:
      "Kroolo corporate website presenting an AI-powered WorkOS, intelligent workflows, and productivity tools.",
    width: 480,
    height: 480,
  },
  {
    src: "/images/portfolio/zyneto-technology-insights.webp",
    alt: "Zyneto technology insights page developed by Lalit Jakhar for Zyneto Global Technologies",
    title: "Zyneto Technology Insights",
    caption:
      "Zyneto insights page covering web development, cloud, AI, and enterprise software.",
    width: 480,
    height: 239,
  },
  {
    src: "/images/portfolio/cheelgadi-jaipur.webp",
    alt: "Cheelgadi vegetarian restaurant, hotel, and wedding venue website in Jaipur, designed and developed by Lalit Jakhar",
    title: "Cheelgadi Restaurant and Wedding Venue Website",
    caption:
      "Cheelgadi website for a pure vegetarian restaurant, hotel, and wedding venue near Jaipur Airport.",
    width: 480,
    height: 240,
  },
  {
    src: "/images/portfolio/ndc-oman.webp",
    alt: "NDC Oman corporate website on a laptop, developed by Lalit Jakhar for National Distribution Company",
    title: "NDC Oman Corporate Website",
    caption:
      "National Distribution Company Oman website presenting distribution services, products, and partner brands.",
    width: 480,
    height: 480,
  },
];

export const ogImage: SiteImage = {
  src: "/images/og-lalit-jakhar-1200x630.jpg",
  alt: "Lalit Jakhar - Frontend Developer portfolio open graph preview image",
  title: "Lalit Jakhar - Frontend Developer",
  caption:
    "Open graph preview image for Lalit Jakhar's portfolio featuring React, Next.js, and UI/UX expertise.",
  width: 1200,
  height: 630,
};

export function toAbsoluteImageUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getAllIndexableImages(): SiteImage[] {
  return [...profileImages, ...aboutGalleryImages, ...portfolioImages, ogImage];
}
