import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const resultStats = [
  {
    value: "100%",
    title: "Class 12 Result",
    session: "2023-24",
  },
  {
    value: "98%",
    title: "Class 10 Result",
    session: "2023-24",
  },
  {
    value: "Topper",
    title: "District Rank Holder",
    session: "Class 12",
  },
];

const achievements = [
  "Overall Championship – Inter School Sports Meet 2024",
  "1st Position – District Science Exhibition 2024",
  "Best School Award – Education Excellence 2023",
  "Students qualified for National level competitions",
  "Consistent 100% Board Results",
];

const performanceAreas = [
  {
    number: "01",
    title: "Academic Excellence",
    text: "Strong academic performance with a focus on consistent board results.",
  },
  {
    number: "02",
    title: "Competitive Achievements",
    text: "Students participate and perform in district and national-level competitions.",
  },
  {
    number: "03",
    title: "Sports Excellence",
    text: "Active participation in inter-school sports and championship events.",
  },
];

export default function ResultsPage() {
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
                Results & Achievements
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Celebrating success, academic excellence and the achievements
                of our students.
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
                Excellence in Education
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                Celebrating Success & Excellence
              </h2>

              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

              <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                Our results reflect the dedication of students, teachers and
                parents towards academic growth and overall development.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESULT STATS
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {resultStats.map((stat) => (
                <div
                  key={stat.title}
                  className="group rounded-2xl border border-[#DDE5F0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="font-serif text-4xl font-bold text-[#1B3A6B] sm:text-5xl">
                    {stat.value}
                  </div>

                  <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#D4973E]" />

                  <h3 className="mt-4 font-serif text-lg font-bold text-[#1B3A6B] sm:text-xl">
                    {stat.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                    {stat.session}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN RESULTS + TROPHY
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              {/* IMAGE */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl bg-[#EAF0FA] shadow-xl">
                  <Image
                    src="/results/trophy.jpg"
                    alt="Results and achievements"
                    width={900}
                    height={700}
                    className="h-[300px] w-full object-cover sm:h-[400px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2447]/60 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                    <span className="rounded-full bg-[#D4973E] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Our Achievements
                    </span>
                  </div>
                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  Achievements
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl">
                  Our Achievements
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                <p className="mt-5 text-sm leading-7 text-[#64748B]">
                  Along with academic performance, our students continue to
                  participate in sports, science exhibitions and various
                  competitions.
                </p>

                <div className="mt-7 space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4F7FB] text-xs font-bold text-[#D4973E]">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-[#475569]">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PERFORMANCE AREAS
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Beyond Results
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                A Culture of Achievement
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#64748B]">
                We encourage students to grow academically, creatively and
                through participation beyond the classroom.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {performanceAreas.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-[#DDE5F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D4973E]">
                      {item.number}
                    </span>

                    <span className="h-px w-14 bg-[#DDE5F0]" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-bold text-[#1B3A6B]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            RESULT HIGHLIGHT
        ====================================================== */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="overflow-hidden rounded-3xl bg-[#1B3A6B] shadow-xl">
              <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-10 lg:p-14">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A]">
                    2023-24
                  </p>

                  <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Strong Board Performance
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
                    The school recorded strong board examination results in
                    the 2023-24 session, with 100% Class 12 results and 98%
                    Class 10 results.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="font-serif text-3xl font-bold text-[#F0B45A]">
                        100%
                      </div>

                      <p className="mt-1 text-xs text-white/60">
                        Class 12 Result
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="font-serif text-3xl font-bold text-[#F0B45A]">
                        98%
                      </div>

                      <p className="mt-1 text-xs text-white/60">
                        Class 10 Result
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative hidden min-h-[350px] lg:block">
                  <Image
                    src="/results/result-highlight.jpg"
                    alt="Students celebrating academic achievement"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B] via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-[#1B3A6B] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-14 lg:px-16">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4973E]/10" />

              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/5" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-sm">
                  Join Our Community
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Be Part of Our Journey
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Discover an environment focused on learning, achievement and
                  the overall development of every student.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/admissions"
                    className="rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                  >
                    Admissions
                  </Link>

                  <Link
                    href="/academics"
                    className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Explore Academics
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