import BackToTop from "@/components/BackToTop";
import SocialLinks from "@/components/SocialLinks";
import type { MainData } from "@/data/resumeData";
import { Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  data?: MainData;
}

const pageLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Work" },
  { id: "resume", label: "Experience" },
  { id: "testimonials", label: "Recommendations" },
  { id: "faq", label: "Questions" },
  { id: "contact", label: "Contact" },
];

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Material-UI",
  "HTML",
  "CSS",
];

export default function Footer({ data }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#101a14] text-white" role="contentinfo">
      <div className="shell pb-24 pt-16 md:pt-20">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#d6bd91]">Next</p>
            <p className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-white md:text-5xl">
              Have a product to build?
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#c49b65]">
            Start a conversation
          </a>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-tight">Lalit Jakhar</p>
            <p className="mt-4 text-sm leading-relaxed text-fog">
              Frontend engineer in Jaipur, India. I build considered, responsive digital experiences with React, Next.js, and TypeScript.
            </p>
            {data?.social ? (
              <SocialLinks
                social={data.social}
                listClassName="mt-6 flex flex-wrap gap-2"
                linkClassName="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-accent hover:bg-accent hover:text-ink"
              />
            ) : null}
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-medium text-white">On this page</p>
            <ul className="mt-4 space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-fog transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              {data?.resumedownload ? (
                <li>
                  <a
                    href={data.resumedownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fog transition hover:text-white"
                  >
                    Resume PDF
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-medium text-white">Contact</p>
            <address className="mt-4 space-y-3 not-italic">
              {data?.email ? (
                <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-sm text-fog transition hover:text-white">
                  <Mail size={16} aria-hidden="true" />
                  {data.email}
                </a>
              ) : null}
              {data?.phone ? (
                <a
                  href={`tel:${data.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-fog transition hover:text-white"
                >
                  <Phone size={16} aria-hidden="true" />
                  {data.phone}
                </a>
              ) : null}
              {data?.address ? (
                <p className="flex items-center gap-3 text-sm text-fog">
                  <MapPin size={16} aria-hidden="true" />
                  {data.address.city}, {data.address.state}
                </p>
              ) : null}
            </address>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Stack</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {technologies.map((tech) => (
                <li key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-fog">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-sm text-fog-dim">&copy; {year} Lalit Jakhar. All rights reserved.</p>
          <p className="mt-2 text-sm text-fog-dim">Built with Next.js, React, and Tailwind CSS.</p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
