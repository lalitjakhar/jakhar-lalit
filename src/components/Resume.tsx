import SectionIntro from "@/components/SectionIntro";
import SeoImage from "@/components/SeoImage";
import type { ResumeData } from "@/data/resumeData";

interface ResumeProps {
  data?: ResumeData;
}

export default function Resume({ data }: ResumeProps) {
  if (!data) return null;

  const { skillmessage, education, work, skills } = data;

  return (
    <section id="resume" className="scroll-mt-24 bg-paper py-20 md:py-28" aria-labelledby="resume-heading">
      <div className="shell">
        <SectionIntro
          eyebrow="02 / The work behind the work"
          title="Built through experience"
          headingId="resume-heading"
          description="Four years of frontend practice across product teams, agency work, and client websites—grounded in thoughtful implementation and collaboration."
        />

        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">The tools I reach for</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{skillmessage}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li key={skill.name} className="rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-elevated">
                  <SeoImage
                    alt=""
                    title={`${skill.name} logo`}
                    src={`/images/tech/${skill.image}`}
                    width={28}
                    height={28}
                    sizes="28px"
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h4 className="mt-4 text-base font-medium text-ink">{skill.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">Experience</h3>
          <div className="mt-6 border-t border-line">
            {work.map((job) => (
              <article
                key={`${job.company}-${job.years}`}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{job.years}</p>
                  <h4 className="mt-2 text-xl font-medium tracking-tight text-ink">{job.company}</h4>
                  <p className="mt-1 text-sm font-medium text-accent">{job.title}</p>
                </div>
                <p className="text-pretty text-base leading-relaxed text-muted md:col-span-8">{job.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">Education</h3>
          <div className="mt-6 border-t border-line">
            {education.map((edu) => (
              <article key={edu.school} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{edu.graduated}</p>
                  <h4 className="mt-2 text-xl font-medium tracking-tight text-ink">{edu.school}</h4>
                  <p className="mt-1 text-sm font-medium text-accent">{edu.degree}</p>
                </div>
                <p className="text-pretty text-base leading-relaxed text-muted md:col-span-8">{edu.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
