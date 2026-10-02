import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const facilities = [
  {
    title: "Smart Classrooms",
    icon: "🖥️",
    image: "/facilities/smart-classroom.jpg",
    description:
      "Modern and technology-enabled classrooms designed to make learning interactive, engaging and effective.",
    features: [
      "Digital learning environment",
      "Interactive teaching",
      "Comfortable classroom setup",
      "Technology-supported lessons",
    ],
  },
  {
    title: "Central Library",
    icon: "📚",
    image: "/facilities/library.jpg",
    description:
      "A learning space where students can explore books, reference materials and resources beyond their classroom studies.",
    features: [
      "Wide collection of books",
      "Reference resources",
      "Reading space",
      "Independent learning",
    ],
  },
  {
    title: "Science Laboratories",
    icon: "🔬",
    image: "/facilities/science-lab.jpg",
    description:
      "Practical learning spaces where students can understand scientific concepts through experiments and activities.",
    features: [
      "Practical experiments",
      "Science activities",
      "Hands-on learning",
      "Subject-based resources",
    ],
  },
  {
    title: "Sports & Playground",
    icon: "🏆",
    image: "/facilities/sports.jpg",
    description:
      "Facilities that encourage physical fitness, teamwork, discipline and participation in sports and outdoor activities.",
    features: [
      "Outdoor activities",
      "Sports practice",
      "Teamwork",
      "Physical fitness",
    ],
  },
  {
    title: "Computer Lab",
    icon: "💻",
    image: "/facilities/computer-lab.jpg",
    description:
      "A dedicated environment for developing computer literacy, digital skills and technology awareness.",
    features: [
      "Computer-based learning",
      "Digital literacy",
      "Technology education",
      "Practical sessions",
    ],
  },
  {
    title: "Auditorium",
    icon: "🎭",
    image: "/facilities/auditorium.jpg",
    description:
      "A dedicated space for school events, cultural programmes, presentations and activities.",
    features: [
      "Cultural programmes",
      "School events",
      "Presentations",
      "Student activities",
    ],
  },
];

export default function FacilitiesPage() {
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
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-xs">
                DN Saraswati Sr. Sec. School, Samain
              </p>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Facilities
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Creating an environment where students can learn, explore,
                participate and grow.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Our Campus
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                Spaces Designed for Learning & Growth
              </h2>

              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

              <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                Our facilities support different aspects of student life,
                from classroom learning and practical education to sports,
                technology, reading and cultural activities.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FACILITY GRID
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {facilities.map((facility, index) => (
                <article
                  key={facility.title}
                  className="group overflow-hidden rounded-3xl border border-[#DDE5F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF0FA]">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 767px) 92vw, (max-width: 1023px) 45vw, 380px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2447]/75 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-xl shadow-lg">
                      {facility.icon}
                    </div>

                    <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4973E] text-xs font-bold text-white">
                      0{index + 1}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#1B3A6B]">
                      {facility.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748B]">
                      {facility.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {facility.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-[#475569]"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF5E5] text-[10px] font-bold text-[#D4973E]">
                            ✓
                          </span>

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            HIGHLIGHT SECTION
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="overflow-hidden rounded-3xl bg-[#1B3A6B] shadow-xl">
              <div className="grid lg:grid-cols-2">
                {/* IMAGE */}
                <div className="relative min-h-[280px] sm:min-h-[360px]">
                  <Image
                    src="/school-hero.jpeg"
                    alt="DN Saraswati Sr. Sec. School campus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-[#0F2447]/30" />
                </div>

                {/* CONTENT */}
                <div className="flex items-center p-7 sm:p-10 lg:p-14">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-sm">
                      Learning Environment
                    </p>

                    <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                      More Than Just Classrooms
                    </h2>

                    <div className="mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                    <p className="mt-6 text-sm leading-7 text-white/70 sm:text-[15px]">
                      A school environment should give students opportunities
                      to learn through different experiences. Our campus
                      facilities support academics, creativity, physical
                      activity, technology and community life.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="font-serif text-2xl font-bold text-white">
                          6+
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          Key Facilities
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="font-serif text-2xl font-bold text-white">
                          1
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          Learning Community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FACILITY VALUES
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1150px] px-5 sm:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[#DDE5F0] bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                  🎓
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                  Academic Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Facilities designed to complement classroom teaching and
                  academic learning.
                </p>
              </div>

              <div className="rounded-2xl border border-[#DDE5F0] bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                  🏃
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                  Physical Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Spaces that encourage physical activity, sports and healthy
                  habits.
                </p>
              </div>

              <div className="rounded-2xl border border-[#DDE5F0] bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                  💡
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                  Exploration
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Opportunities for students to explore technology, science,
                  reading and creativity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#1B3A6B] px-5 py-10 text-center shadow-xl sm:px-10 sm:py-14 lg:px-16">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4973E]/10" />
              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/5" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-sm">
                  Discover Our Campus
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  See What Makes Our School Special
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Explore our gallery and discover more about life at DN
                  Saraswati Sr. Sec. School.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/gallery"
                    className="rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                  >
                    View Gallery
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Contact Us
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