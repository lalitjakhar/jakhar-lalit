import type { Metadata } from "next";
import { resumeData } from "@/data/resumeData";
import {
  ogImage,
  portfolioImages,
  profileImages,
  SITE_URL,
  toAbsoluteImageUrl,
} from "@/data/siteImages";

export const SITE_NAME = "Lalit Jakhar";
export const SITE_TITLE = "Lalit Jakhar | React & Next.js Developer in Jaipur";
export const SITE_UPDATED = "2026-11-02";
export const SITE_DESCRIPTION =
  "Lalit Jakhar is a Jaipur-based frontend engineer specializing in React, Next.js, and TypeScript. Explore selected product, corporate, and client work.";

export const SITE_KEYWORDS = [
  "Lalit Jakhar",
  "frontend developer Jaipur",
  "React developer India",
  "Next.js developer India",
  "TypeScript frontend developer",
  "web developer Rajasthan",
  "frontend engineer portfolio",
  "React Next.js developer portfolio",
];

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/lalitjakhar/",
  "https://www.instagram.com/lalitjakhar_/",
  "https://github.com/lalitjakhar",
  "https://www.facebook.com/lalit.choudhary25",
  "https://x.com/lalit_jakhar25",
  "https://www.youtube.com/@lalit_jakhar_25",
] as const;

export const PORTFOLIO_PROJECTS = [
  {
    title: "Kroolo — AI WorkOS",
    description:
      "A clear, responsive corporate experience for Kroolo’s AI-powered WorkOS. I build and refine pages that bring its AI agents, workflows, and productivity tools into focus, using Next.js, TypeScript, and Tailwind CSS.",
    url: "https://www.kroolo.com",
    image: portfolioImages[4],
    role: "Frontend Web Developer",
    period: "Oct 2024 – Present",
    imageFit: "center",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    title: "Zyneto Global Technologies",
    description:
      "A corporate website for Zyneto’s technology services. I translated product and design requirements into responsive Next.js pages, with clear content structure and on-page SEO.",
    url: "https://www.zyneto.com",
    image: portfolioImages[0],
    role: "Frontend Developer",
    period: "Feb 2024 – Present",
    imageFit: "cover",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    title: "Cheelgadi — Jaipur",
    description:
      "A welcoming digital home for a vegetarian restaurant, hotel, and wedding venue near Jaipur Airport. The responsive site helps guests explore dining, stays, and event spaces.",
    url: "https://cheelgadi.com/",
    image: portfolioImages[6],
    role: "Frontend Developer",
    period: "Jul 2026 – Sep 2026",
    imageFit: "cover",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "National Distribution Company — Oman",
    description:
      "A responsive corporate website for National Distribution Company in Oman, bringing its distribution services, product categories, and partner brands together in a clear, navigable experience.",
    url: "https://ndcmuscat.com/en",
    image: portfolioImages[7],
    role: "Frontend Developer",
    period: "Apr 2026 – Jul 2026",
    imageFit: "center",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
] as const;

export const FAQS = [
  {
    question: "Who is Lalit Jakhar?",
    answer:
      "Lalit Jakhar is a frontend engineer based in Jaipur, Rajasthan, India. He builds responsive digital experiences with React, Next.js, and TypeScript for product teams and clients.",
  },
  {
    question: "What technologies does Lalit Jakhar use?",
    answer:
      "Lalit works with React, Next.js, TypeScript, JavaScript, Tailwind CSS, Material UI, Bootstrap, HTML, and CSS, with an interest in performance, accessibility, and technical SEO.",
  },
  {
    question: "Where is Lalit Jakhar based?",
    answer:
      "Lalit Jakhar is based in Jaipur, Rajasthan, India. Email lalit25jakhar@gmail.com or call +91 8690843263.",
  },
  {
    question: "Is Lalit Jakhar available for projects or roles?",
    answer:
      "For frontend roles, product collaborations, or project inquiries, contact Lalit using the form on this page or email lalit25jakhar@gmail.com.",
  },
  {
    question: "Which websites has Lalit Jakhar worked on?",
    answer:
      "Selected work includes Kroolo’s AI WorkOS website, the Zyneto Global Technologies corporate site, Cheelgadi in Jaipur, and National Distribution Company in Oman. Project links and details are on this page.",
  },
  {
    question: "Which companies has Lalit Jakhar worked with?",
    answer:
      "He currently works with Kroolo and Zyneto Global Technologies. From September 2022 to February 2024 he was a Frontend Developer at GOHASHINCLUDE PVT. LTD.",
  },
  {
    question: "Where can I find Lalit Jakhar online?",
    answer:
      "This portfolio is at https://lalit-jakhar.vercel.app. His LinkedIn is https://www.linkedin.com/in/lalitjakhar/ and his GitHub is https://github.com/lalitjakhar.",
  },
] as const;

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_TITLE,
      template: "%s | Lalit Jakhar",
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: SITE_KEYWORDS,
    authors: [{ name: "Lalit Jakhar", url: SITE_URL }],
    creator: "Lalit Jakhar",
    publisher: "Lalit Jakhar",
    category: "technology",
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "any" }],
      apple: [{ url: "/images/lalit-jakhar-profile-picture.jpeg" }],
    },
    manifest: "/manifest.json",
    verification: {
      google: "j0DAouuE-l2R70HIRTXktA_PeXQSGEq2FrySF4WypL8",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: SITE_URL,
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      creator: "@lalit_jakhar25",
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
    other: {
      "geo.region": "IN-RJ",
      "geo.placename": "Jaipur",
    },
  };
}

const EMPLOYER_URLS: Record<string, string> = {
  Kroolo: "https://www.kroolo.com",
  "Zyneto Global Technologies": "https://www.zyneto.com",
};

function projectWorkId(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${SITE_URL}/#work-${slug}`;
}

export function buildStructuredDataGraph() {
  const { main, resume } = resumeData;

  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const profilePageId = `${SITE_URL}/#profilepage`;
  const portfolioListId = `${SITE_URL}/#portfolio-list`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-IN",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "en-IN",
        dateModified: SITE_UPDATED,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: toAbsoluteImageUrl(profileImages[0].src),
          width: profileImages[0].width,
          height: profileImages[0].height,
          caption: profileImages[0].caption,
        },
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: main.name,
        givenName: "Lalit",
        familyName: "Jakhar",
        jobTitle: main.occupation,
        url: SITE_URL,
        mainEntityOfPage: { "@id": profilePageId },
        email: main.email,
        telephone: main.phone,
        description: main.bio,
        image: profileImages.map((image) => ({
          "@type": "ImageObject",
          url: toAbsoluteImageUrl(image.src),
          name: image.title,
          caption: image.caption,
          description: image.alt,
          width: image.width,
          height: image.height,
        })),
        sameAs: [...SOCIAL_PROFILES],
        contactPoint: {
          "@type": "ContactPoint",
          email: main.email,
          telephone: main.phone,
          contactType: "professional",
          areaServed: "IN",
          availableLanguage: "English",
        },
        workExample: PORTFOLIO_PROJECTS.map((project) => ({
          "@id": projectWorkId(project.title),
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: main.address.city,
          addressRegion: main.address.state,
          addressCountry: "IN",
        },
        worksFor: resume.work
          .filter((job) => /present/i.test(job.years))
          .map((job) => ({
            "@type": "Organization",
            name: job.company,
            ...(EMPLOYER_URLS[job.company] ? { url: EMPLOYER_URLS[job.company] } : {}),
          })),
        alumniOf: resume.education.map((edu) => ({
          "@type": "EducationalOrganization",
          name: edu.school,
        })),
        knowsAbout: resume.skills.map((skill) => skill.name),
        hasOccupation: {
          "@type": "Occupation",
          name: main.occupation,
          occupationLocation: {
            "@type": "City",
            name: `${main.address.city}, ${main.address.state}, India`,
          },
          skills: resume.skills.map((skill) => skill.name),
        },
      },
      {
        "@type": "ItemList",
        "@id": portfolioListId,
        name: "Lalit Jakhar Web Development Portfolio",
        description:
          "Selected frontend projects by Lalit Jakhar, including Zyneto, Kroolo, Cheelgadi in Jaipur, and NDC Oman.",
        numberOfItems: PORTFOLIO_PROJECTS.length,
        itemListElement: PORTFOLIO_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            "@id": projectWorkId(project.title),
            name: project.title,
            description: project.description,
            url: project.url,
            image: toAbsoluteImageUrl(project.image.src),
            keywords: project.stack.join(", "),
            creator: { "@id": personId },
            author: { "@id": personId },
          },
        })),
      },
      {
        "@type": "ItemList",
        name: "Technical Skills",
        description: resume.skillmessage,
        itemListElement: resume.skills.map((skill, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: skill.name,
          description: skill.description,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        url: `${SITE_URL}/#faq`,
        inLanguage: "en-IN",
        isPartOf: { "@id": websiteId },
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
