import SectionIntro from "@/components/SectionIntro";
import { FAQS } from "@/data/seo";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="shell">
        <SectionIntro
          eyebrow="05 - FAQ"
          title="Questions"
          headingId="faq-heading"
          description="Straight answers about the work, the stack, and how to get in touch."
        />
        <div className="max-w-3xl border-t border-line">
          {FAQS.map((item, index) => (
            <details key={item.question} className="group border-b border-line" open={index === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left">
                <h3 className="text-base font-medium text-ink md:text-lg">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-muted transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-4 text-pretty text-base leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
