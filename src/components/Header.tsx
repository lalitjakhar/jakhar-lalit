"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "portfolio", label: "Work", href: "#portfolio" },
  { id: "resume", label: "Experience", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const sections = ["home", "about", "portfolio", "resume", "testimonials", "faq", "contact"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8);
        const marker = window.scrollY + 120;
        let current = "home";

        for (const id of sections) {
          const element = document.getElementById(id);
          if (element && element.offsetTop <= marker) current = id;
        }

        setActiveSection(current);
      });
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line/80 backdrop-blur-md transition-colors ${
        isScrolled || isMobileMenuOpen ? "bg-hero/95" : "bg-hero/85"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 text-white" aria-label="Lalit Jakhar, home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-[11px] font-bold tracking-[0.14em] text-white">
            LJ
          </span>
          <span className="font-display text-lg leading-none tracking-tight">Lalit Jakhar</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={active ? "location" : undefined}
                    className={`text-sm transition ${
                      active
                        ? "font-medium text-white underline decoration-accent-soft decoration-2 underline-offset-[10px]"
                        : "text-fog-dim hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden h-10 px-4 md:inline-flex">
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile" className="border-t border-white/10 bg-hero md:hidden">
          <ul className="shell max-h-[calc(100svh-4rem)] space-y-1 overflow-y-auto py-4">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={active ? "location" : undefined}
                    className={`block rounded-xl px-3 py-3 text-lg ${
                      active ? "bg-white/10 font-medium text-white" : "text-fog-dim"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
