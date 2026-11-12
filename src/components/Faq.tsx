import SectionIntro from "@/components/SectionIntro";
import { FAQS } from "@/data/seo";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="shell">
        <SectionIntro
          eyebrow="05 / Good to know"
          title="A few questions"
          headingId="faq-heading"
          description="A little more about my work, the technologies I use, and getting in touch."
        />
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
          <div className="border-t border-line">
            {FAQS.map((item, index) => (
              <details key={item.question} className="group border-b border-line" open={index === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
                  <h3 className="text-base font-semibold text-ink md:text-lg">{item.question}</h3>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-accent-deep transition group-open:rotate-45 group-open:bg-night group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-4 text-pretty text-base leading-relaxed text-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <aside className="rounded-[2rem] bg-night p-6 text-white md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
              Have a project in mind?
            </p>
            <h3 className="mt-3 font-display text-subsection">
              Let’s talk about what you’re building.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-fog">
              Share a little about the role, product, or challenge. I’ll be glad to hear from you.
            </p>
            <a href="#contact" className="btn-primary mt-6">
              Get in touch
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
