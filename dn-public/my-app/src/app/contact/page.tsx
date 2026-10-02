"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#0F2447]">
          <div className="absolute inset-0">
            <Image
              src="/school-hero.jpeg"
              alt="DN Saraswati Sr. Sec. School campus"
              fill
              priority
              className="object-cover opacity-55"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2447]/95 via-[#1B3A6B]/75 to-[#0F2447]/35" />
          </div>

          <div className="relative mx-auto flex min-h-[320px] max-w-[1400px] items-center px-5 py-16 sm:min-h-[350px] sm:px-8 lg:min-h-[380px] lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F0B45A] sm:text-sm">
                DN Saraswati Sr. Sec. School, Samain
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Contact Us
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                We&apos;d love to hear from you. Get in touch with our school
                office for information, enquiries and assistance.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Get In Touch
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                We&apos;d Love to Hear From You
              </h2>

              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

              <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                Whether you have a question about admissions, academics,
                facilities or any other school-related matter, our team is
                here to help.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT INFORMATION + FORM
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
              {/* =================================================
                  SCHOOL OFFICE
              ================================================== */}
              <div className="rounded-3xl bg-[#1B3A6B] p-7 text-white shadow-xl sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A]">
                  School Office
                </p>

                <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
                  Contact Information
                </h2>

                <div className="mt-8 space-y-6">
                  {/* ADDRESS */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F0B45A]">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        Address
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/85">
                        Village Samain,
                        <br />
                        Tehsil Narnaul,
                        <br />
                        District Mahendragarh,
                        <br />
                        Haryana – 123001
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F0B45A]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.96 10.73a16 16 0 0 0 4.31 4.31l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 21 15.94Z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        Phone
                      </p>

                      <div className="mt-1 space-y-1 text-sm text-white/85">
                        <a
                          href="tel:+919876543210"
                          className="block transition hover:text-[#F0B45A]"
                        >
                          +91-98765-43210
                        </a>

                        <a
                          href="tel:+9101282246001"
                          className="block transition hover:text-[#F0B45A]"
                        >
                          +91-01282-246001
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F0B45A]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                        />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        Email
                      </p>

                      <a
                        href="mailto:info@dnsaraswati.edu.in"
                        className="mt-1 block break-all text-sm text-white/85 transition hover:text-[#F0B45A]"
                      >
                        info@dnsaraswati.edu.in
                      </a>
                    </div>
                  </div>

                  {/* OFFICE HOURS */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#F0B45A]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                        School Office
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/85">
                        Monday – Saturday
                        <br />
                        8:00 AM – 3:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* SOCIAL */}
                <div className="mt-9 border-t border-white/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                    Follow Us
                  </p>

                  <div className="mt-4 flex gap-2">
                    {["f", "◎", "▶", "𝕏"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        aria-label="Social media"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white transition hover:bg-[#D4973E]"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================== */}
              <div className="rounded-3xl border border-[#DDE5F0] bg-white p-6 shadow-sm sm:p-9">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                    Enquiry
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-bold text-[#1B3A6B] sm:text-3xl">
                    Send Us a Message
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    Fill in the form and our school office can get back to you.
                  </p>
                </div>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </div>

                    <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                      Message Submitted
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#64748B]">
                      Thank you for contacting DN Saraswati Sr. Sec. School.
                      Your enquiry has been received.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 rounded-xl bg-[#1B3A6B] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#112649]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* NAME */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-bold text-[#334155]"
                        >
                          Your Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                          className="w-full rounded-xl border border-[#DDE5F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1B3A6B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#D4973E] focus:bg-white focus:ring-2 focus:ring-[#D4973E]/10"
                        />
                      </div>

                      {/* EMAIL */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-bold text-[#334155]"
                        >
                          Your Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="w-full rounded-xl border border-[#DDE5F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1B3A6B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#D4973E] focus:bg-white focus:ring-2 focus:ring-[#D4973E]/10"
                        />
                      </div>
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold text-[#334155]"
                      >
                        Your Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-[#DDE5F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1B3A6B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#D4973E] focus:bg-white focus:ring-2 focus:ring-[#D4973E]/10"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-bold text-[#334155]"
                      >
                        Your Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Write your message..."
                        required
                        className="w-full resize-none rounded-xl border border-[#DDE5F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1B3A6B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#D4973E] focus:bg-white focus:ring-2 focus:ring-[#D4973E]/10"
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4973E] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#C58732] sm:w-auto"
                    >
                      Send Message

                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAP
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="mb-7 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                Find Us
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                School Location
              </h2>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-3xl border border-[#DDE5F0] bg-[#EAF0FA] shadow-sm sm:h-[420px]">
              {/* MAP BACKGROUND */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:55px_55px]" />

              <div className="absolute inset-0 bg-[#DCE8D5]/50" />

              {/* ROAD EFFECTS */}
              <div className="absolute left-0 top-[45%] h-12 w-full rotate-3 bg-white/80 shadow-sm" />

              <div className="absolute left-[35%] top-0 h-full w-10 -rotate-12 bg-white/75 shadow-sm" />

              <div className="absolute right-[20%] top-0 h-full w-7 rotate-[25deg] bg-white/70" />

              {/* LOCATION CARD */}
              <div className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 text-center shadow-2xl sm:w-[330px]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D4973E] text-white shadow-lg">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                  DN Saraswati Sr Sec School
                </h3>

                <p className="mt-1 text-sm text-[#64748B]">
                  School Samain
                </p>

                <p className="mt-3 text-xs leading-5 text-[#94A3B8]">
                  Village Samain, Tehsil Narnaul,
                  <br />
                  District Mahendragarh, Haryana
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SCHOOL BRAND CTA
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-[#0F2447] shadow-xl">
              <Image
                src="/school-hero.jpeg"
                alt="DN Saraswati Sr. Sec. School"
                fill
                className="object-cover opacity-25"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0F2447] via-[#0F2447]/90 to-transparent" />

              <div className="relative flex min-h-[260px] items-center px-6 py-10 sm:px-10 lg:px-14">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F0B45A]">
                    DN Saraswati
                  </p>

                  <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                    Sr. Sec. School Samain
                  </h2>

                  <p className="mt-3 text-sm font-medium tracking-wider text-white/60">
                    LEARN • GROW • SUCCEED
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:+919876543210"
                      className="rounded-xl bg-[#D4973E] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#C58732]"
                    >
                      Call School
                    </a>

                    <a
                      href="mailto:info@dnsaraswati.edu.in"
                      className="rounded-xl border border-white/25 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}