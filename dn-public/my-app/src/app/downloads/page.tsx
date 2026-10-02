import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const downloadCategories = [
  {
    title: "Admissions",
    description: "Forms and documents related to school admissions.",
    icon: "🎓",
    documents: [
      {
        title: "School Prospectus",
        description: "School prospectus and general information.",
        file: "/downloads/prospectus.pdf",
      },
      {
        title: "Admission Form",
        description: "Application form for school admission.",
        file: "/downloads/admission-form.pdf",
      },
    ],
  },
  {
    title: "Examinations",
    description: "Examination related schedules and resources.",
    icon: "📝",
    documents: [
      {
        title: "Examination Schedule",
        description: "Important examination dates and schedule.",
        file: "/downloads/examination-schedule.pdf",
      },
      {
        title: "Date Sheet",
        description: "Class-wise examination date sheet.",
        file: "/downloads/date-sheet.pdf",
      },
    ],
  },
  {
    title: "Academic Resources",
    description: "Useful resources for students and academics.",
    icon: "📚",
    documents: [
      {
        title: "Academic Calendar",
        description: "Important academic dates and activities.",
        file: "/downloads/academic-calendar.pdf",
      },
      {
        title: "School Time Table",
        description: "Class and school timetable.",
        file: "/downloads/time-table.pdf",
      },
    ],
  },
  {
    title: "Circulars & Notices",
    description: "Latest circulars, announcements and notices.",
    icon: "📢",
    documents: [
      {
        title: "School Circulars",
        description: "Important school circulars and announcements.",
        file: "/downloads/circulars.pdf",
      },
      {
        title: "Important Notices",
        description: "Latest notices issued by the school.",
        file: "/downloads/notices.pdf",
      },
    ],
  },
  {
    title: "School Policies",
    description: "Important school rules and policy documents.",
    icon: "📋",
    documents: [
      {
        title: "School Policies",
        description: "Rules, guidelines and school policies.",
        file: "/downloads/school-policies.pdf",
      },
      {
        title: "Student Guidelines",
        description: "Important guidelines for students.",
        file: "/downloads/student-guidelines.pdf",
      },
    ],
  },
];

const quickDownloads = [
  {
    title: "Prospectus",
    description: "School prospectus",
    file: "/downloads/prospectus.pdf",
  },
  {
    title: "Admission Form",
    description: "Admission form",
    file: "/downloads/admission-form.pdf",
  },
  {
    title: "Holiday Calendar",
    description: "Academic calendar",
    file: "/downloads/holiday-calendar.pdf",
  },
  {
    title: "Fee Structure",
    description: "Fee details",
    file: "/downloads/fee-structure.pdf",
  },
  {
    title: "Time Table",
    description: "School timetable",
    file: "/downloads/time-table.pdf",
  },
  {
    title: "Other Documents",
    description: "Various documents",
    file: "/downloads/other-documents.pdf",
  },
];

export default function DownloadsPage() {
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
                Downloads
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Important documents, forms, resources, circulars and school
                information in one place.
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
                Resources
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                Important Documents & Resources
              </h2>

              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

              <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                Find and download important school documents, admission forms,
                academic resources, circulars and policies.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK DOWNLOADS
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                  Quick Access
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-[#1B3A6B] sm:text-3xl">
                  Popular Downloads
                </h2>
              </div>

              <p className="text-xs text-[#64748B]">
                Download important documents
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
              {quickDownloads.map((item) => (
                <a
                  key={item.title}
                  href={item.file}
                  download
                  className="group rounded-2xl border border-[#DDE5F0] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D4973E] hover:shadow-lg sm:p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FB] text-[#1B3A6B] transition group-hover:bg-[#1B3A6B] group-hover:text-white">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 3v12" />
                      <path d="m7 10 5 5 5-5" />
                      <path d="M5 21h14" />
                    </svg>
                  </div>

                  <h3 className="mt-4 font-serif text-sm font-bold leading-5 text-[#1B3A6B]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-[#64748B]">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CATEGORY CARDS
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {downloadCategories.map((category) => (
                <article
                  key={category.title}
                  className="group rounded-2xl border border-[#DDE5F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                >
                  {/* HEADER */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4F7FB] text-xl transition group-hover:bg-[#1B3A6B]">
                      {category.icon}
                    </div>

                    <div>
                      <h2 className="font-serif text-xl font-bold text-[#1B3A6B]">
                        {category.title}
                      </h2>

                      <p className="mt-1 text-xs leading-5 text-[#64748B]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* DOCUMENTS */}
                  <div className="mt-6 space-y-3">
                    {category.documents.map((document) => (
                      <a
                        key={document.title}
                        href={document.file}
                        download
                        className="flex items-center justify-between gap-3 rounded-xl border border-[#DDE5F0] bg-[#F4F7FB] p-3 transition hover:border-[#D4973E] hover:bg-white"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#D4973E] shadow-sm">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <path d="M14 2v6h6" />
                              <path d="M8 13h8" />
                              <path d="M8 17h6" />
                            </svg>
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate text-xs font-bold text-[#1B3A6B]">
                              {document.title}
                            </h3>

                            <p className="mt-0.5 truncate text-[10px] text-[#64748B]">
                              {document.description}
                            </p>
                          </div>
                        </div>

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B3A6B] text-white transition group-hover:bg-[#D4973E]">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 3v12" />
                            <path d="m7 10 5 5 5-5" />
                            <path d="M5 21h14" />
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DOCUMENT INFORMATION
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-[#1B3A6B] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#F0B45A]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>

                <h2 className="mt-5 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Need Help?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                  If you have any difficulty accessing a document or need
                  additional information, please contact the school office.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-xl bg-[#D4973E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                >
                  Contact School
                </Link>
              </div>

              <div className="rounded-3xl border border-[#DDE5F0] bg-white p-7 shadow-sm sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                  Download Information
                </p>

                <h2 className="mt-3 font-serif text-2xl font-bold text-[#1B3A6B] sm:text-3xl">
                  Important Information
                </h2>

                <ul className="mt-5 space-y-3">
                  <li className="flex gap-3 text-sm leading-6 text-[#64748B]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4973E]" />
                    Documents are provided in PDF format where applicable.
                  </li>

                  <li className="flex gap-3 text-sm leading-6 text-[#64748B]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4973E]" />
                    Keep downloaded documents for future reference.
                  </li>

                  <li className="flex gap-3 text-sm leading-6 text-[#64748B]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4973E]" />
                    Contact the school office for the latest official
                    information.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-[#1B3A6B] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-14 lg:px-16">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4973E]/10" />

              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/5" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-sm">
                  DN Saraswati Sr. Sec. School
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Have More Questions?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Get in touch with the school office for further information
                  and assistance.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}