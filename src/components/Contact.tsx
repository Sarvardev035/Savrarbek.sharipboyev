"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an API route or service like Formspree / Resend
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-gray-950/50">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Contact
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Have a project in mind or just want to say hello? Drop me a message
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Info cards */}
          <div className="space-y-6">
            {[
              {
                icon: "📧",
                title: "Email",
                value: "sarvarbek@example.com",
                href: "mailto:sarvarbek@example.com",
              },
              {
                icon: "📍",
                title: "Location",
                value: "Tashkent, Uzbekistan",
                href: null,
              },
              {
                icon: "💼",
                title: "LinkedIn",
                value: "linkedin.com/in/sarvarbek",
                href: "https://linkedin.com/in/sarvarbek",
              },
              {
                icon: "🐙",
                title: "GitHub",
                value: "github.com/sarvarbek",
                href: "https://github.com/sarvarbek",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-gray-900/60 p-5"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-colors hover:text-indigo-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
              <div>
                <p className="text-3xl">🎉</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Message Sent!
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  Thanks for reaching out — I&apos;ll reply soon.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/10 bg-gray-900/60 p-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-gray-800/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-gray-800/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-gray-800/60 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
