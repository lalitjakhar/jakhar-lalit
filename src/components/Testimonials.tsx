import SectionIntro from "@/components/SectionIntro";
import type { TestimonialsData } from "@/data/resumeData";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  data?: TestimonialsData;
}

export default function Testimonials({ data }: TestimonialsProps) {
  if (!data?.testimonials?.length) return null;

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-blush py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="shell">
        <SectionIntro
          eyebrow="04 / In good company"
          title="What collaborators say"
          headingId="testimonials-heading"
          description="A few words shared by people I’ve worked with across frontend projects and teams."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.text.slice(0, 48)}
              className="group flex h-full flex-col rounded-2xl border border-line bg-elevated p-6 transition hover:-translate-y-1 hover:border-accent/50 md:p-7"
            >
              <div className="flex items-center justify-between">
                <Quote size={19} className="text-accent-deep" aria-hidden="true" />
                <span className="font-mono text-[11px] tracking-[0.14em] text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote className="mt-5 flex-1">
                <p className="text-pretty text-sm leading-relaxed text-ink md:text-base">
                  {testimonial.text}
                </p>
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                Colleague feedback
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
