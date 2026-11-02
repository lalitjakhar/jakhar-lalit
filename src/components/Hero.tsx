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
          <div className="min-w-0 lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Jaipur-based frontend developer
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-ink">
              <span className="block font-display text-[clamp(2.75rem,7.3vw,6.6rem)] leading-[0.92] tracking-[-0.055em]">
                I build
              </span>
              <span className="block font-display text-[clamp(2.75rem,7.3vw,6.6rem)] leading-[0.92] tracking-[-0.055em] text-accent">
                thoughtful
              </span>
              <span className="block font-display text-[clamp(2.75rem,7.3vw,6.6rem)] leading-[0.92] tracking-[-0.055em]">
                web experiences.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
              I am Lalit Jakhar, a frontend developer shaping clear, fast digital products
              with React.js, Next.js, and TypeScript. From the first pixel to the final
              page load, I care about how every detail works.
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
              linkClassName="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-ink transition hover:border-accent hover:bg-accent hover:text-[#0b100e]"
            />
          </div>

          <figure className="min-w-0 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-2 shadow-[0_24px_90px_-40px_rgba(0,0,0,0.9)]">
              <SeoImage
                src={portrait.src}
                alt={portrait.alt}
                title={portrait.title}
                width={portrait.width}
                height={portrait.height}
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
              />
              <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#101310]/90 px-4 py-3 backdrop-blur-md">
                <span>
                  <span className="block text-sm font-semibold text-ink">Lalit Jakhar</span>
                  <span className="mt-0.5 block text-xs text-muted">Frontend developer · Jaipur, India</span>
                </span>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_16px_rgba(223,195,132,0.65)]" />
              </div>
            </div>
            <figcaption className="sr-only">{portrait.caption}</figcaption>
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
