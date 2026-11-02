import SectionIntro from "@/components/SectionIntro";
import type { ResumeData } from "@/data/resumeData";

interface ResumeProps {
  data?: ResumeData;
}

export default function Resume({ data }: ResumeProps) {
  if (!data) return null;

  const { skillmessage, education, work, skills } = data;
  const coreSkills = skills.slice(0, 4);
  const supportingSkills = skills.slice(4);

  return (
    <section id="resume" className="scroll-mt-24 bg-paper py-20 md:py-28" aria-labelledby="resume-heading">
      <div className="shell">
        <SectionIntro
          eyebrow="03 / The work behind the work"
          title="Built through experience"
          headingId="resume-heading"
          description="Four years of frontend practice across product teams, agency work, and client websites—grounded in thoughtful implementation and collaboration."
        />

        <div className="rounded-[2rem] border border-line bg-surface p-6 md:p-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#805d35]">
                Core toolkit
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-tight text-ink md:text-3xl">
                The tools I reach for
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:text-right md:text-base">
              {skillmessage}
            </p>
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coreSkills.map((skill, index) => (
              <li
                key={skill.name}
                className="rounded-2xl border border-line bg-[#fffefa] p-5 transition hover:-translate-y-1 hover:border-accent/60"
              >
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17241c] font-display text-lg font-semibold text-[#d6bd91]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-4 text-base font-semibold text-ink">{skill.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-line pt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Also in my toolkit
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {supportingSkills.map((skill) => (
                <li
                  key={skill.name}
                  title={skill.description}
                  className="rounded-full border border-line bg-[#fffefa]/70 px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex flex-col justify-between gap-3 border-b border-line pb-5 sm:flex-row sm:items-end">
            <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">Experience</h3>
            <p className="text-sm text-muted">From first frontend role to product teams</p>
          </div>
          <div className="mt-5 space-y-3">
            {work.map((job) => (
              <article
                key={`${job.company}-${job.years}`}
                className="grid gap-4 rounded-2xl border border-line bg-elevated p-5 md:grid-cols-12 md:items-start md:gap-8 md:p-6"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#805d35]">
                    {job.years}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                    {job.company}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-[#805d35]">{job.title}</p>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted md:col-span-8 md:text-base">
                  {job.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="border-b border-line pb-5 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Education
          </h3>
          <div className="mt-5">
            {education.map((edu) => (
              <article
                key={edu.school}
                className="grid gap-4 rounded-2xl border border-line bg-elevated p-5 md:grid-cols-12 md:items-start md:gap-8 md:p-6"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#805d35]">
                    {edu.graduated}
                  </p>
                  <h4 className="mt-2 text-xl font-semibold tracking-tight text-ink">{edu.school}</h4>
                  <p className="mt-1 text-sm font-medium text-[#805d35]">{edu.degree}</p>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted md:col-span-8 md:text-base">
                  {edu.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
