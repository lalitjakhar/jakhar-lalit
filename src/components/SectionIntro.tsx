type SectionIntroProps = {
  eyebrow: string;
  title: string;
  headingId: string;
  description?: string;
  tone?: "light" | "dark";
};

export default function SectionIntro({
  eyebrow,
  title,
  headingId,
  description,
  tone = "light",
}: SectionIntroProps) {
  const dark = tone === "dark";

  return (
    <header className="mb-12 max-w-2xl md:mb-16">
      <p
        className={`font-mono text-[11px] uppercase tracking-[0.22em] ${
          dark ? "text-[#d6bd91]" : "text-[#805d35]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className={`mt-3 text-balance font-display text-3xl leading-[1.05] tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed md:text-lg ${
            dark ? "text-fog" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
