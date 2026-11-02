import SeoImage from "@/components/SeoImage";
import SocialLinks from "@/components/SocialLinks";
import type { MainData } from "@/data/resumeData";
import { profileImages } from "@/data/siteImages";
import { ArrowRight, Download } from "lucide-react";

interface HeroProps {
  data?: MainData;
}

const stats = [
  {
    label: "Experience",
    value: "Since 2022",
    detail: "Frontend roles on product teams",
  },
  {
    label: "Focus",
    value: "React & Next.js",
    detail: "TypeScript, responsive interfaces",
  },
  {
    label: "Based in",
    value: "Jaipur",
    detail: "Rajasthan, India",
  },
  {
    label: "Standards",
    value: "Fast and clear",
    detail: "Performance, SEO, and accessibility",
  },
];

export default function Hero({ data }: HeroProps) {
  if (!data) return null;

  const portrait = profileImages[0];

  return (
    <section id="home" className="hero-grid">
      <div className="shell relative pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-ink">
              <span className="block font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
                Frontend Developer in Jaipur
              </span>
              <span className="mt-4 block font-display text-[clamp(3.25rem,7vw,5.75rem)] leading-[0.92] tracking-[-0.03em]">
                Lalit
              </span>
              <span className="block font-display text-[clamp(3.25rem,7vw,5.75rem)] leading-[0.92] tracking-[-0.03em]">
                Jakhar
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
              I am a frontend developer in Jaipur. I build responsive web applications
              with React.js, Next.js, and TypeScript — recruiting, ecommerce, and product
              sites that stay fast, accessible, and easy to use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="btn-primary">
                View selected work
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={data.resumedownload}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} aria-hidden="true" />
                Resume
              </a>
            </div>
            <SocialLinks
              social={data.social}
              listClassName="mt-8 flex flex-wrap gap-2"
              linkClassName="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink hover:bg-ink hover:text-white"
            />
          </div>

          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#e7e4dc] shadow-[0_24px_80px_-36px_rgba(16,16,14,0.55)]">
              <SeoImage
                src={portrait.src}
                alt={portrait.alt}
                title={portrait.title}
                width={portrait.width}
                height={portrait.height}
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-snug text-muted">{portrait.caption}</figcaption>
          </figure>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-paper p-5 md:p-6">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                {stat.label}
              </dt>
              <dd className="mt-2 text-xl font-semibold leading-tight tracking-tight text-ink">
                {stat.value}
              </dd>
              <dd className="mt-2 text-sm leading-snug text-muted">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
