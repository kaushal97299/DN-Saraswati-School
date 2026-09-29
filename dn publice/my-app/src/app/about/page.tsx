import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    title: "Our Vision",
    text: "To be a center of excellence in education and overall development.",
    icon: "🎯",
  },
  {
    title: "Our Mission",
    text: "To impart value based education and prepare students for future.",
    icon: "🌱",
  },
  {
    title: "Our Values",
    text: "Discipline, Integrity, Respect and Excellence in all we do.",
    icon: "⭐",
  },
];

const stats = [
  {
    value: "25+",
    label: "Years of Excellence",
  },
  {
    value: "2000+",
    label: "Students",
  },
  {
    value: "100+",
    label: "Qualified Staff",
  },
  {
    value: "20+",
    label: "Sports & Activities",
  },
];

/*
 * Figma-inspired school journey section.
 * Existing About page content is preserved.
 */
const milestones = [
  {
    year: "1982",
    title: "School Established",
    text: "The journey of DN Saraswati Sr. Sec. School, Samain begins.",
  },
  {
    year: "1995",
    title: "Growing with the Community",
    text: "The school continued expanding its educational foundation and student community.",
  },
  {
    year: "2005",
    title: "Academic Development",
    text: "Greater focus on academics, co-curricular activities and student development.",
  },
  {
    year: "2015",
    title: "Modern Learning",
    text: "The school continued moving towards modern learning facilities and broader opportunities.",
  },
  {
    year: "2025",
    title: "43+ Years of Excellence",
    text: "Continuing the legacy of education, character building and holistic development.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar />

      <main>
        {/* =====================================================
            PAGE HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#0F2447]">
          <div className="absolute inset-0">
            <Image
  src="/school-hero.jpeg"
  alt="DN Saraswati Sr. Sec. School campus"
  fill
  priority
  className="object-cover opacity-60"
/>

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2447]/85 via-[#1B3A6B]/60 to-[#0F2447]/25" />
          </div>

          <div className="relative mx-auto flex min-h-[380px] max-w-[1400px] items-center px-5 py-20 sm:px-8 lg:px-12">
            <div className="max-w-3xl animate-about-hero">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D4973E]">
                DN Saraswati Sr. Sec. School, Samain
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                About Our School
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                A legacy of quality education, character building and holistic
                development since 1982.
              </p>

            
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT OUR SCHOOL
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
            {/* IMAGE */}
            <div className="relative animate-about-left">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/school-hero.jpeg"
                  alt="DN Saraswati School campus"
                  width={1000}
                  height={700}
                  className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px]"
                />
              </div>

              <div className="absolute -bottom-6 right-4 rounded-2xl bg-[#1B3A6B] px-6 py-5 text-white shadow-xl sm:right-8">
                <div className="font-serif text-3xl font-bold text-[#F0B45A]">
                  1992
                </div>

                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                  Established
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="animate-about-right">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                About Our School
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl">
                Nurturing Minds,
                <br />
                Building Futures
              </h2>

              <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#64748B]">
                <p>
                  DN Saraswati Sr Sec School Samain is committed to provide
                  quality education in a nurturing and stimulating environment.
                </p>

                <p>
                  We aim at academic excellence along with character building
                  and holistic development of every child.
                </p>
              </div>

              <div className="mt-8 h-px bg-[#DDE5F0]" />

              <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#1B3A6B]">
                    1992
                  </div>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Established
                  </p>
                </div>

                <div>
                  <div className="font-serif text-2xl font-bold text-[#1B3A6B]">
                    2000+
                  </div>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Students
                  </p>
                </div>

                <div>
                  <div className="font-serif text-2xl font-bold text-[#1B3A6B]">
                    60+
                  </div>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Faculty
                  </p>
                </div>

                <div>
                  <div className="font-serif text-2xl font-bold text-[#1B3A6B]">
                    100%
                  </div>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Board Results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SCHOOL JOURNEY / MILESTONES
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                Our Journey
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                A Legacy Since 1982
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                From our beginning in 1982 to the present day, the school has
                continued its journey of education, growth and development.
              </p>
            </div>

            <div className="relative mx-auto mt-14 max-w-5xl">
              {/* CENTER LINE */}
              <div className="absolute left-4 top-0 h-full w-px bg-[#D4973E]/30 sm:left-1/2 sm:-translate-x-1/2" />

              <div className="space-y-10 sm:space-y-14">
                {milestones.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative grid items-center gap-6 sm:grid-cols-2 sm:gap-12 ${
                      index % 2 === 0 ? "" : "sm:[&>div:first-child]:order-2"
                    }`}
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    {/* CONTENT */}
                    <div
                      className={`pl-10 sm:pl-0 ${
                        index % 2 === 0
                          ? "sm:text-right"
                          : "sm:text-left"
                      } animate-about-milestone`}
                    >
                      <div className="inline-block rounded-2xl border border-[#DDE5F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="font-serif text-3xl font-bold text-[#1B3A6B]">
                          {item.year}
                        </div>

                        <h3 className="mt-2 font-serif text-xl font-bold text-[#1B3A6B]">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    {/* CENTER DOT */}
                    <div className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border-4 border-[#F4F7FB] bg-[#D4973E] shadow-md sm:left-1/2 sm:-translate-x-1/2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>

                    {/* EMPTY SIDE */}
                    <div className="hidden sm:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VISION / MISSION / VALUES
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                What We Stand For
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                Our Vision, Mission & Values
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#64748B]">
                Education at DN Saraswati goes beyond academics. We focus on
                developing confident, responsible and compassionate
                individuals.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {values.map((item, index) => (
                <article
                  key={item.title}
                  className="about-value-card group rounded-2xl border border-[#DDE5F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 140}ms`,
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F7FB] text-2xl transition-colors group-hover:bg-[#FFF5E5]">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-bold text-[#1B3A6B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}
        <section className="bg-[#112649] py-12 sm:py-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-white/10 px-5 sm:px-8 md:grid-cols-4 lg:px-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="about-stat px-4 py-3 text-center sm:px-6"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="font-serif text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>

                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/55 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="about-cta overflow-hidden rounded-3xl bg-[#1B3A6B] px-6 py-12 text-center shadow-xl sm:px-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F0B45A]">
                Discover DN Saraswati
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Shaping Futures, Inspiring Minds
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70">
                Explore our academic programmes, facilities, faculty and
                admission opportunities.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  href="/academics"
                  className="rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732] hover:-translate-y-0.5"
                >
                  Explore Academics
                </Link>

                <Link
                  href="/admissions"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 hover:-translate-y-0.5"
                >
                  Admissions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />
    </>
  );
}