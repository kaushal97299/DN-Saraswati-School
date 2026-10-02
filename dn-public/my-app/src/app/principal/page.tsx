import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrincipalPage() {
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

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2447]/95 via-[#1B3A6B]/75 to-[#0F2447]/45" />
          </div>

          <div className="relative mx-auto flex min-h-[300px] items-center px-5 py-16 sm:min-h-[340px] sm:px-8 sm:py-20 lg:min-h-[380px] lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-xs sm:tracking-[0.2em]">
                DN Saraswati Sr. Sec. School, Samain
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Principal&apos;s Message
              </h1>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRINCIPAL MESSAGE
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:gap-16">
              {/* PRINCIPAL IMAGE */}
              <div className="mx-auto w-full max-w-[460px] md:max-w-[420px]">
                <div className="relative">
                  <div className="absolute -left-3 -top-3 h-20 w-20 rounded-2xl bg-[#D4973E]/15 sm:-left-5 sm:-top-5 sm:h-24 sm:w-24" />

                  <div className="relative overflow-hidden rounded-3xl border border-[#DDE5F0] bg-[#F4F7FB] p-2 shadow-xl sm:p-3">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#EAF0FA]">
                      <Image
                             src="/principal.jpg"
                              alt="Principal of DN Saraswati Sr. Sec. School"
                               fill
                                priority
                                className="object-cover object-center"
                                sizes="(max-width: 767px) 80vw, (max-width: 1023px) 38vw, 420px"
                              />
                    </div>
                  </div>

                  <div className="absolute -bottom-4 left-4 right-4 rounded-2xl bg-[#1B3A6B] px-5 py-4 text-white shadow-xl sm:left-8 sm:right-auto sm:min-w-[230px]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                      School Leadership
                    </p>

                    <p className="mt-1 font-serif text-lg font-bold">
                      Principal
                    </p>
                  </div>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="pt-5 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  From The Principal&apos;s Desk
                </p>

                <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#1B3A6B] sm:text-3xl md:text-4xl lg:text-5xl">
                  Education is the foundation of a better future
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#D4973E] sm:mt-7 sm:w-16" />

                <div className="mt-5 space-y-3 text-xs leading-6 text-[#64748B] sm:text-sm md:mt-6 md:space-y-4 md:text-[15px] md:leading-7">
                  <p>
                    Welcome to DN Saraswati Sr. Sec. School, Samain. Our
                    institution is committed to creating a supportive learning
                    environment where education, discipline and character
                    development go hand in hand.
                  </p>

                  <p>
                    We believe that every student has unique potential. Our
                    responsibility is to provide the right guidance,
                    opportunities and values that help students become
                    confident and responsible individuals.
                  </p>

                  <p>
                    Along with academic learning, students are encouraged to
                    participate in sports, cultural activities and
                    co-curricular experiences for their overall development.
                  </p>

                  <p>
                    With the support of teachers, parents and the entire school
                    community, we continue to work towards a learning
                    environment based on respect, integrity and excellence.
                  </p>
                </div>

                <div className="mt-7 border-t border-[#DDE5F0] pt-5 sm:mt-8 sm:pt-6">
                  <p className="font-serif text-xl font-bold text-[#1B3A6B] sm:text-2xl">
                    Principal
                  </p>

                  <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
                    DN Saraswati Sr. Sec. School, Samain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SCHOOL LEADERSHIP
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
            {/* SECTION HEADING */}
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Our Leadership
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1B3A6B] sm:mt-3 sm:text-4xl lg:text-5xl">
                School Management
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B] sm:mt-4 sm:text-[15px]">
                Our school is guided by a dedicated leadership team committed
                to the growth and development of the institution and its
                students.
              </p>
            </div>

            {/* LEADERS */}
            <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8">
              {/* =================================================
                  DIRECTOR
              ================================================== */}
              <div className="group overflow-hidden rounded-3xl border border-[#DDE5F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[380px] overflow-hidden bg-[#EAF0FA] sm:aspect-[4/3]">
                  <Image
                    src="/director.jpg"
                    alt="Director"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 45vw"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F2447]/80 to-transparent" />
                </div>

                <div className="p-5 text-center sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-xs">
                    School Management
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-[#1B3A6B]">
                    Director
                  </h3>

                  <div className="mx-auto mt-3 h-px w-12 bg-[#D4973E]" />

                  <p className="mt-4 text-sm leading-6 text-[#64748B]">
                    Providing leadership and guidance towards the continued
                    development of the school and its educational vision.
                  </p>
                </div>
              </div>

              {/* =================================================
                  SECOND MANAGEMENT MEMBER
              ================================================== */}
              <div className="group overflow-hidden rounded-3xl border border-[#DDE5F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-[380px] overflow-hidden bg-[#EAF0FA] sm:aspect-[4/3]">
                  <Image
                    src="/partner.jpg"
                    alt="School Management"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 45vw"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F2447]/80 to-transparent" />
                </div>

                <div className="p-5 text-center sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-xs">
                    School Management
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-[#1B3A6B]">
                    Management Partner
                  </h3>

                  <div className="mx-auto mt-3 h-px w-12 bg-[#D4973E]" />

                  <p className="mt-4 text-sm leading-6 text-[#64748B]">
                    Supporting the school&apos;s vision and contributing to an
                    environment focused on quality education and student
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEADERSHIP VALUES
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🎓",
                  title: "Academic Excellence",
                  text: "Encouraging curiosity, knowledge and lifelong learning.",
                },
                {
                  icon: "🌱",
                  title: "Character Building",
                  text: "Developing discipline, integrity, respect and responsibility.",
                },
                {
                  icon: "⭐",
                  title: "Holistic Growth",
                  text: "Supporting academic, physical, cultural and social development.",
                },
                {
                  icon: "🤝",
                  title: "Community",
                  text: "Building strong relationships between students, parents and teachers.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#DDE5F0] bg-[#F4F7FB] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-bold text-[#1B3A6B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#64748B]">
                    {item.text}
                  </p>
                </div>
              ))}
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
                  Explore Our School
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Discover the DN Saraswati Experience
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Explore our academics, facilities and admission opportunities.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/academics"
                    className="rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                  >
                    Explore Academics
                  </Link>

                  <Link
                    href="/admissions"
                    className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Admissions
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