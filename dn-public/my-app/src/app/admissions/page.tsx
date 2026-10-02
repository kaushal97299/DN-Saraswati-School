import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const admissionSteps = [
  {
    number: "01",
    title: "Download Form",
    description:
      "Download the admission form and carefully go through the instructions before filling it.",
    icon: "📄",
  },
  {
    number: "02",
    title: "Fill & Submit",
    description:
      "Complete the admission form with the required information and submit it along with the necessary documents.",
    icon: "✍️",
  },
  {
    number: "03",
    title: "Interaction",
    description:
      "Students and parents may be invited for an interaction with the school as part of the admission process.",
    icon: "🤝",
  },
  {
    number: "04",
    title: "Admission Confirmed",
    description:
      "After successful completion of the admission process, the school will confirm the admission.",
    icon: "🎓",
  },
];

const documents = [
  "Completed Admission Form",
  "Birth Certificate",
  "Previous School Records",
  "Transfer Certificate",
  "Passport Size Photographs",
  "Aadhaar Card / Identity Proof",
];

const feeItems = [
  {
    title: "Registration Fee",
    description: "Payable at the time of registration.",
  },
  {
    title: "Admission Fee",
    description: "Applicable at the time of confirmed admission.",
  },
  {
    title: "Tuition Fee",
    description: "School tuition fee as applicable for the academic session.",
  },
  {
    title: "Other Charges",
    description:
      "Additional applicable charges may include activities, transport or other school services.",
  },
];

export default function AdmissionsPage() {
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

          <div className="relative mx-auto flex min-h-[300px] items-center px-5 py-16 sm:min-h-[340px] sm:px-8 sm:py-20 lg:min-h-[380px] lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-xs sm:tracking-[0.2em]">
                DN Saraswati Sr. Sec. School, Samain
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Admissions
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Begin your child&apos;s journey towards learning, growth and
                excellence.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  Join Our School
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                  Start your journey with DN Saraswati
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                  We welcome students and families who share our commitment to
                  learning, character and overall development. Our admission
                  process is designed to be clear and straightforward.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-[#1B3A6B] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#112649]"
                  >
                    Contact School
                  </Link>

                  <Link
                    href="/downloads"
                    className="rounded-xl border border-[#DDE5F0] bg-white px-6 py-3 text-center text-sm font-bold text-[#1B3A6B] transition hover:border-[#1B3A6B]"
                  >
                    Downloads
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">🏫</div>

                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Quality Education
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    A learning environment focused on academic growth.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">🌱</div>

                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Holistic Growth
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    Supporting academic and personal development.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">🤝</div>

                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Parent Partnership
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    Working together for every student&apos;s success.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">⭐</div>

                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Student Focus
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    Helping every student discover their potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ADMISSION PROCESS
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Admission Process
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                How to Apply
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Follow these simple steps to complete the admission process.
              </p>
            </div>

            <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
              {admissionSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-[#DDE5F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D4973E]/30">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="mt-5 font-serif text-xl font-bold text-[#1B3A6B]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {step.description}
                  </p>

                  {index < admissionSteps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4973E] text-sm font-bold text-white lg:flex">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DOCUMENTS
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  Required Documents
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                  Documents to Keep Ready
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#64748B]">
                  Please keep the required documents ready while completing the
                  admission process.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {documents.map((document) => (
                  <div
                    key={document}
                    className="flex items-center gap-3 rounded-xl border border-[#DDE5F0] bg-[#F4F7FB] px-4 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4973E] text-xs font-bold text-white">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-[#334155]">
                      {document}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEE STRUCTURE
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Fee Structure
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                Admission & School Fees
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Applicable fees and charges are communicated by the school
                during the admission process.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-[#DDE5F0] bg-white shadow-sm">
              {feeItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
                    index !== feeItems.length - 1
                      ? "border-b border-[#DDE5F0]"
                      : ""
                  }`}
                >
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B3A6B]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#64748B]">
                      {item.description}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-[#FFF5E5] px-3 py-1.5 text-xs font-bold text-[#B77A22]">
                    As Applicable
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-[#64748B]">
              For current fee details, please contact the school office.
            </p>
          </div>
        </section>

        {/* =====================================================
            IMPORTANT INFORMATION
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            <div className="rounded-3xl border border-[#DDE5F0] bg-[#F4F7FB] p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1B3A6B] text-2xl">
                  ℹ️
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#1B3A6B] sm:text-3xl">
                    Important Information
                  </h2>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#64748B]">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4973E]" />
                      Admission is subject to availability of seats.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4973E]" />
                      Parents should provide complete and accurate information
                      in the admission form.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4973E]" />
                      Original documents may be required for verification.
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4973E]" />
                      Please contact the school office for current admission
                      dates, fees and other details.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#1B3A6B] px-5 py-10 text-center shadow-xl sm:px-10 sm:py-14 lg:px-16">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4973E]/10" />
              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/5" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-sm">
                  Need Help?
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Have Questions About Admissions?
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Contact the school office for admission-related information
                  and assistance.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/downloads"
                    className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Download Resources
                  </Link>
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