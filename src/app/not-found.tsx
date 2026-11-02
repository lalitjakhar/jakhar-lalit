import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you requested could not be found on Lalit Jakhar's portfolio website.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: null,
  },
};

const links = [
  { href: "/#about", label: "About" },
  { href: "/#portfolio", label: "Work" },
  { href: "/#resume", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-paper px-5 py-24">
      <div className="mx-auto w-full max-w-xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-3 font-display text-5xl tracking-tight text-ink md:text-6xl">Page not found</h1>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          That page is not on this site. The portfolio, experience, and contact details are all on the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/#contact" className="btn-secondary">
            Contact
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-2xl border border-line bg-surface px-4 py-4 text-sm font-medium text-ink transition hover:border-accent/50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
