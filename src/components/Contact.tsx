"use client";

import { useRef, useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Motion";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      const formData = new FormData(formRef.current);
      const res = await fetch("https://formsubmit.co/ajax/sarvarsharipov333@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("user_name"),
          email: formData.get("user_email"),
          _subject: formData.get("subject") || "New contact from Ceo.ooou.uz",
          message: formData.get("message"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sending failed");
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-blue/60 focus:bg-white/[0.05]";

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="aurora -bottom-40 left-1/4 h-[480px] w-[480px] bg-blue/30" />
      <div className="section-container relative grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">06 · Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Let&apos;s build <br />
              <span className="text-gradient">something real.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-slate-400">
              Partnerships, Bahola for your venue, speaking at events, or engineering work. I reply fastest on Telegram.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3">
              {[
                ["Telegram", "@go0fy", profile.links.telegram],
                ["Email", profile.email, `mailto:${profile.email}`],
                ["LinkedIn", "sarvar-sharipov", profile.links.linkedin],
                ["Company", "ooou.uz", profile.links.company],
              ].map(([k, v, href]) => (
                <a
                  key={k}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 py-4 transition-colors hover:border-white/40"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500">{k}</span>
                  <span className="flex items-center gap-2 text-white">
                    {v}
                    <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form ref={formRef} onSubmit={handleSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="user_name" required placeholder="Your name" className={input} />
              <input name="user_email" type="email" required placeholder="Email" className={input} />
            </div>
            <input name="subject" placeholder="Subject" className={input} />
            <textarea name="message" required rows={6} placeholder="Tell me about it…" className={`${input} resize-none`} />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-2xl bg-blue py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_10px_40px_-10px_#2f6bff] disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && <p className="text-center text-sm text-mint">Thanks! I&apos;ll get back to you soon.</p>}
            {status === "error" && (
              <p className="text-center text-sm text-orange">
                Something went wrong. Write to me on{" "}
                <a href={profile.links.telegram} className="underline">
                  Telegram
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
