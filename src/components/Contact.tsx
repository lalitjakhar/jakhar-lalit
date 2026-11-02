"use client";

import { useState } from "react";
import SectionIntro from "@/components/SectionIntro";
import SocialLinks from "@/components/SocialLinks";
import { resumeData } from "@/data/resumeData";
import { CircleAlert, CircleCheck, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const { email, phone, address, contactmessage, social } = resumeData.main;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"sending" | "success" | "error" | "">("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mvgbkjjv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }

    window.setTimeout(() => setFormStatus(""), 6000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: email,
      href: `mailto:${email}`,
      note: "Best for project and role inquiries",
    },
    {
      icon: Phone,
      title: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      note: "Jaipur, India",
    },
    {
      icon: MapPin,
      title: "Location",
      value: `${address.city}, ${address.state}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(`${address.city}, ${address.state}, India`)}`,
      note: "Rajasthan, India",
    },
  ];

  const fieldClass =
    "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition placeholder:text-subtle focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contact" className="scroll-mt-24 bg-lavender-deep py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="shell">
        <SectionIntro
          eyebrow="06 / Start a conversation"
          title="Have a good idea? Let’s build it."
          headingId="contact-heading"
          description={contactmessage}
        />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <form
            className="space-y-5 rounded-3xl border border-line bg-paper p-5 md:p-8 lg:col-span-7"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className={fieldClass}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-ink">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                autoComplete="off"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project, role, or question"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                autoComplete="off"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="What are you building, and how can I help?"
                rows={7}
                className={`${fieldClass} resize-y`}
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={formStatus === "sending"} aria-busy={formStatus === "sending"}>
              <Send size={16} aria-hidden="true" />
              {formStatus === "sending" ? "Sending…" : "Send message"}
            </button>
            {formStatus === "success" && (
              <div role="status" aria-live="polite" className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
                <CircleCheck size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p>Message sent. I will get back to you soon.</p>
              </div>
            )}
            {formStatus === "error" && (
              <div role="alert" aria-live="assertive" className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                <CircleAlert size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <p>Something went wrong. Please email {email} directly.</p>
              </div>
            )}
          </form>

          <aside className="rounded-3xl bg-night p-6 text-white md:p-8 lg:sticky lg:top-24 lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
              Say hello
            </p>
            <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
              Let’s start with a conversation.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fog">
              Reach me directly, or find me around the web.
            </p>
            <ul className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const external = method.href.startsWith("http");
                return (
                  <li key={method.title}>
                    <a
                      href={method.href}
                      className="flex gap-4 rounded-xl p-4 transition hover:bg-white/5 md:p-5"
                      aria-label={`${method.title}: ${method.value}`}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-ink">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft">
                          {method.title}
                        </span>
                        <span className="mt-1 block break-words font-medium text-white">{method.value}</span>
                        <span className="mt-1 block text-sm text-fog">{method.note}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <SocialLinks
              social={social}
              listClassName="mt-4 grid grid-cols-3 gap-2"
              linkClassName="flex h-12 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-accent hover:bg-accent hover:text-white"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
