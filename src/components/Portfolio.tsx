import SectionIntro from "@/components/SectionIntro";
import SeoImage from "@/components/SeoImage";
import { PORTFOLIO_PROJECTS } from "@/data/seo";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-night py-20 text-white md:py-28"
      aria-labelledby="portfolio-heading"
    >
      <div className="shell">
        <SectionIntro
          eyebrow="02 / Selected work"
          title="Selected work"
          headingId="portfolio-heading"
          tone="dark"
          description="A selection of product, corporate, and hospitality experiences—designed to communicate clearly and built to work beautifully across screens."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
          {PORTFOLIO_PROJECTS.map((project, index) => {
            const host = new URL(project.url).host.replace(/^www\./, "");

            return (
              <article
                key={project.title}
                className={`rounded-3xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-accent-soft/50 md:p-5 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div
                    className={
                      index === 0
                        ? "grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-center"
                        : ""
                    }
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-hero">
                      <SeoImage
                        src={project.image.src}
                        alt={project.image.alt}
                        title={project.image.title}
                        width={project.image.width}
                        height={project.image.height}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`aspect-[16/10] w-full transition duration-500 group-hover:scale-[1.03] ${
                          project.imageFit === "center"
                            ? "object-cover object-center"
                            : "object-cover object-top"
                        }`}
                      />
                    </div>
                    <div
                      className={`mt-5 flex items-start justify-between gap-4 ${
                        index === 0 ? "md:mt-0" : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog-dim">
                          {String(index + 1).padStart(2, "0")} / {host}
                        </p>
                        <h3 className="mt-2 font-display text-2xl tracking-tight text-white transition group-hover:text-accent-soft md:text-[1.7rem]">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-fog-dim">
                          {project.role} · {project.period}
                        </p>
                        <p className="mt-2 text-pretty text-sm leading-relaxed text-fog md:text-base">
                          {project.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                          {project.stack.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-fog"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="mt-1 inline-flex shrink-0 items-center gap-1 text-sm text-fog-dim transition group-hover:text-white">
                        <span className="sr-only">View live project (opens in a new tab)</span>
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
