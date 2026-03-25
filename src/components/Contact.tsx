"use client";

import { useRef, useState } from "react";
import anime from "animejs";
import { useAnimeOnScroll } from "@/hooks/useAnime";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const sectionRef = useAnimeOnScroll<HTMLElement>((el) => {
    anime({
      targets: el.querySelector(".contact-heading"),
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelectorAll(".contact-card"),
      translateX: [-60, 0],
      opacity: [0, 1],
      duration: 1100,
      delay: anime.stagger(180, { start: 400 }),
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelector(".contact-form"),
      translateX: [60, 0],
      opacity: [0, 1],
      duration: 1300,
      delay: 500,
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelectorAll(".form-field"),
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(120, { start: 900 }),
      easing: "easeOutExpo",
    });

    anime({
      targets: el.querySelector(".contact-glow"),
      scale: [0.5, 1],
      opacity: [0, 0.5],
      duration: 2500,
      easing: "easeOutExpo",
    });
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    anime({ targets: ".form-submit", scale: [1, 0.96, 1], duration: 400, easing: "easeInOutQuad" });
    try {
      const formData = new FormData(formRef.current);
      const res = await fetch("https://formsubmit.co/ajax/sarvarsharipov333@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("user_name"),
          email: formData.get("user_email"),
          _subject: formData.get("subject") || "New Portfolio Contact",
          message: formData.get("message"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sending failed");
      setStatus("success");
      formRef.current.reset();
      anime({ targets: ".success-msg", scale: [0.85, 1], opacity: [0, 1], duration: 600, easing: "easeOutBack" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-950/50" ref={sectionRef}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="contact-glow pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" style={{ opacity: 0 }} />

      <div className="section-container relative z-10">
        <div className="contact-heading mb-16 text-center" style={{ opacity: 0 }}>
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Contact</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-md text-gray-400">Have a project in mind? Let&apos;s work together to build something amazing.</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 md:col-span-2">
            {[
              { icon: "📧", label: "Email", value: "sarvarsharipov1035@gmail.com", href: "mailto:sarvarsharipov1035@gmail.com" },
              { icon: "📍", label: "Location", value: "Uzbekistan", href: "#" },
              { icon: "💻", label: "GitHub", value: "Sarvardev035", href: "https://github.com/Sarvardev035" },
              { icon: "🎓", label: "University", value: "Amity University Tashkent", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-card flex items-center gap-4 rounded-xl border border-white/10 bg-gray-900/60 p-4 transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10"
                style={{ opacity: 0 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}
            <div className="contact-card flex gap-3 pt-2" style={{ opacity: 0 }}>
              <a href="https://github.com/Sarvardev035" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-indigo-500/30 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/sarvar-sharipov-4bb187332/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-blue-500/30 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="mailto:sarvarsharipov1035@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-all hover:border-red-500/30 hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            className="contact-form space-y-5 md:col-span-3"
            style={{ opacity: 0 }}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="form-field" style={{ opacity: 0 }}>
                <label htmlFor="user_name" className="mb-1.5 block text-sm text-gray-400">Name</label>
                <input id="user_name" name="user_name" type="text" placeholder="Your name" required className="w-full rounded-lg border border-white/10 bg-gray-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-indigo-500/50 focus:shadow-lg focus:shadow-indigo-500/10" />
              </div>
              <div className="form-field" style={{ opacity: 0 }}>
                <label htmlFor="user_email" className="mb-1.5 block text-sm text-gray-400">Email</label>
                <input id="user_email" name="user_email" type="email" placeholder="you@example.com" required className="w-full rounded-lg border border-white/10 bg-gray-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-indigo-500/50 focus:shadow-lg focus:shadow-indigo-500/10" />
              </div>
            </div>
            <div className="form-field" style={{ opacity: 0 }}>
              <label htmlFor="subject" className="mb-1.5 block text-sm text-gray-400">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project inquiry" className="w-full rounded-lg border border-white/10 bg-gray-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-indigo-500/50 focus:shadow-lg focus:shadow-indigo-500/10" />
            </div>
            <div className="form-field" style={{ opacity: 0 }}>
              <label htmlFor="message" className="mb-1.5 block text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required className="w-full resize-none rounded-lg border border-white/10 bg-gray-900/60 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-indigo-500/50 focus:shadow-lg focus:shadow-indigo-500/10" />
            </div>
            {status === "success" && (
              <div className="success-msg flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400" style={{ opacity: 0 }}>
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Message sent! I&apos;ll reply within 24 hours.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                Something went wrong. Please email me directly at sarvarsharipov1035@gmail.com
              </div>
            )}
            <button type="submit" disabled={status === "sending"}
              className="form-submit form-field w-full rounded-lg bg-indigo-500 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ opacity: 0 }}>
              {status === "sending" ? (
                <><svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>
              ) : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
