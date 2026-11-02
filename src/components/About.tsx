import SectionIntro from "@/components/SectionIntro";
import SeoImage from "@/components/SeoImage";
import type { MainData } from "@/data/resumeData";
import { aboutGalleryImages, profileImages } from "@/data/siteImages";
import { Download } from "lucide-react";

interface AboutProps {
  data?: MainData;
}

export default function About({ data }: AboutProps) {
  if (!data) return null;

  const { name, bio, address, phone, email, resumedownload } = data;
  const portrait = profileImages[1];
  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  const details = [
    { label: "Name", value: name, href: undefined },
    {
      label: "Location",
      value: `${address.city}, ${address.state}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(`${address.city}, ${address.state}, India`)}`,
    },
    { label: "Phone", value: phone, href: phoneHref },
    { label: "Email", value: email, href: `mailto:${email}` },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-surface py-20 md:py-28" aria-labelledby="about-heading">
      <div className="shell">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionIntro
              eyebrow="01 - Profile"
              title="About"
              headingId="about-heading"
              description="I build the layer people see, use, and remember: clear interfaces, thoughtful details, and dependable frontend code."
            />
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>{bio}</p>
              <p>
                My work spans AI productivity, corporate, hospitality, and distribution websites.
                I translate design intent into responsive React interfaces, then refine structure,
                accessibility, and search metadata so the experience works as well as it looks.
                See the{" "}
                <a className="font-medium text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-accent" href="#portfolio">
                  selected work
                </a>{" "}
                or the{" "}
                <a className="font-medium text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-accent" href="#resume">
                  experience
                </a>
                .
              </p>
            </div>
            <div className="mt-8">
                <a
                  href={resumedownload}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Download size={16} aria-hidden="true" />
                Download resume
                </a>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-elevated p-2">
              <SeoImage
                src={portrait.src}
                alt={portrait.alt}
                title={portrait.title}
                width={portrait.width}
                height={portrait.height}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top"
              />
            </div>
          </figure>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">A little beyond the screen</h3>
          <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {aboutGalleryImages.map((image) => (
              <li key={image.src} className="w-[78%] shrink-0 snap-start md:w-auto">
                <figure>
                  <div className="overflow-hidden rounded-2xl border border-line bg-elevated">
                <SeoImage
                      src={image.src}
                      alt={image.alt}
                      title={image.title}
                      width={image.width}
                      height={image.height}
                  loading="lazy"
                      sizes="(max-width: 768px) 78vw, 25vw"
                      className="aspect-square w-full object-cover"
                />
                  </div>
                  <figcaption className="mt-3 text-sm leading-snug text-muted">{image.caption}</figcaption>
              </figure>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="sr-only">Contact details</h3>
        <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item) => (
            <div key={item.label} className="bg-surface p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{item.label}</dt>
              <dd className="mt-2 text-sm font-medium text-ink md:text-base">
                {item.href ? (
                  <a
                    href={item.href}
                    className="break-words underline decoration-ink/15 underline-offset-4 hover:decoration-accent"
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
