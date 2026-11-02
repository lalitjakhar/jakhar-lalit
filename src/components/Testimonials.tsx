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
      className="scroll-mt-24 bg-white py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="shell">
        <SectionIntro
          eyebrow="04 - Notes"
          title="Recommendations"
          headingId="testimonials-heading"
          description="Notes from people who have worked with me on frontend projects."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {data.testimonials.map((testimonial, index) => (
            <figure key={testimonial.text.slice(0, 48)} className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 md:p-8">
              <Quote size={18} className="text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1">
                <p className="text-pretty text-base leading-relaxed text-ink">{testimonial.text}</p>
              </blockquote>
              <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
                Recommendation {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
