"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type FacultyMember = {
  id: number;
  name: string;
  designation: string;
  subject: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
};

const departments = [
  "All",
  "Science",
  "Commerce",
  "Arts & Humanities",
  "Primary",
  "Middle School",
];

const faculty: FacultyMember[] = [
  {
    id: 1,
    name: "Faculty Member 01",
    designation: "PGT",
    subject: "Physics",
    department: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "10+ Years",
    image: "/faculty/teacher-01.jpg",
    bio: "Dedicated educator focused on conceptual learning, practical understanding and academic growth.",
  },
  {
    id: 2,
    name: "Faculty Member 02",
    designation: "PGT",
    subject: "Chemistry",
    department: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "8+ Years",
    image: "/faculty/teacher-02.jpg",
    bio: "Encourages students to understand scientific concepts through experiments and practical learning.",
  },
  {
    id: 3,
    name: "Faculty Member 03",
    designation: "PGT",
    subject: "Mathematics",
    department: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "12+ Years",
    image: "/faculty/teacher-03.jpg",
    bio: "Focused on logical reasoning, problem solving and building strong mathematical foundations.",
  },
  {
    id: 4,
    name: "Faculty Member 04",
    designation: "PGT",
    subject: "Biology",
    department: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "9+ Years",
    image: "/faculty/teacher-04.jpg",
    bio: "Promotes scientific curiosity and helps students connect classroom concepts with real-world applications.",
  },
  {
    id: 5,
    name: "Faculty Member 05",
    designation: "TGT",
    subject: "Science",
    department: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "7+ Years",
    image: "/faculty/teacher-05.jpg",
    bio: "Supports students in developing curiosity, observation and scientific thinking.",
  },
  {
    id: 6,
    name: "Faculty Member 06",
    designation: "TGT",
    subject: "Mathematics",
    department: "Science",
    qualification: "M.Sc., B.Ed.",
    experience: "6+ Years",
    image: "/faculty/teacher-06.jpg",
    bio: "Creates an engaging learning environment focused on mathematical concepts and problem solving.",
  },

  {
    id: 7,
    name: "Faculty Member 07",
    designation: "PGT",
    subject: "Accountancy",
    department: "Commerce",
    qualification: "M.Com., B.Ed.",
    experience: "11+ Years",
    image: "/faculty/teacher-07.jpg",
    bio: "Helps students develop a strong understanding of accounting principles and financial concepts.",
  },
  {
    id: 8,
    name: "Faculty Member 08",
    designation: "PGT",
    subject: "Business Studies",
    department: "Commerce",
    qualification: "M.Com., B.Ed.",
    experience: "9+ Years",
    image: "/faculty/teacher-08.jpg",
    bio: "Focuses on practical understanding of business, management and entrepreneurship.",
  },
  {
    id: 9,
    name: "Faculty Member 09",
    designation: "PGT",
    subject: "Economics",
    department: "Commerce",
    qualification: "M.Com., B.Ed.",
    experience: "8+ Years",
    image: "/faculty/teacher-09.jpg",
    bio: "Encourages analytical thinking and understanding of economic concepts and current issues.",
  },
  {
    id: 10,
    name: "Faculty Member 10",
    designation: "TGT",
    subject: "Commerce",
    department: "Commerce",
    qualification: "M.Com., B.Ed.",
    experience: "6+ Years",
    image: "/faculty/teacher-10.jpg",
    bio: "Provides students with a practical foundation in commerce and business-related subjects.",
  },
  {
    id: 11,
    name: "Faculty Member 11",
    designation: "TGT",
    subject: "Economics",
    department: "Commerce",
    qualification: "M.A., B.Ed.",
    experience: "7+ Years",
    image: "/faculty/teacher-11.jpg",
    bio: "Helps students understand economic principles through examples and practical discussion.",
  },
  {
    id: 12,
    name: "Faculty Member 12",
    designation: "PGT",
    subject: "Mathematics",
    department: "Commerce",
    qualification: "M.Sc., B.Ed.",
    experience: "10+ Years",
    image: "/faculty/teacher-12.jpg",
    bio: "Works with students to develop numerical ability, analytical skills and confidence.",
  },

  {
    id: 13,
    name: "Faculty Member 13",
    designation: "PGT",
    subject: "History",
    department: "Arts & Humanities",
    qualification: "M.A., B.Ed.",
    experience: "10+ Years",
    image: "/faculty/teacher-13.jpg",
    bio: "Makes history engaging through discussion, analysis and connections with the present.",
  },
  {
    id: 14,
    name: "Faculty Member 14",
    designation: "PGT",
    subject: "Political Science",
    department: "Arts & Humanities",
    qualification: "M.A., B.Ed.",
    experience: "8+ Years",
    image: "/faculty/teacher-14.jpg",
    bio: "Encourages students to understand society, governance and civic responsibilities.",
  },
  {
    id: 15,
    name: "Faculty Member 15",
    designation: "PGT",
    subject: "Geography",
    department: "Arts & Humanities",
    qualification: "M.A., B.Ed.",
    experience: "9+ Years",
    image: "/faculty/teacher-15.jpg",
    bio: "Uses practical examples to develop students' understanding of geography and the environment.",
  },
  {
    id: 16,
    name: "Faculty Member 16",
    designation: "TGT",
    subject: "English",
    department: "Arts & Humanities",
    qualification: "M.A., B.Ed.",
    experience: "7+ Years",
    image: "/faculty/teacher-16.jpg",
    bio: "Focuses on communication, reading, writing and confidence-building skills.",
  },
  {
    id: 17,
    name: "Faculty Member 17",
    designation: "TGT",
    subject: "Hindi",
    department: "Arts & Humanities",
    qualification: "M.A., B.Ed.",
    experience: "8+ Years",
    image: "/faculty/teacher-17.jpg",
    bio: "Encourages appreciation of language, literature and effective communication.",
  },
  {
    id: 18,
    name: "Faculty Member 18",
    designation: "TGT",
    subject: "Social Science",
    department: "Arts & Humanities",
    qualification: "M.A., B.Ed.",
    experience: "6+ Years",
    image: "/faculty/teacher-18.jpg",
    bio: "Helps students understand society, culture, history and their responsibilities as citizens.",
  },

  {
    id: 19,
    name: "Faculty Member 19",
    designation: "PRT",
    subject: "English",
    department: "Primary",
    qualification: "B.A., B.Ed.",
    experience: "6+ Years",
    image: "/faculty/teacher-19.jpg",
    bio: "Creates an engaging environment where young learners develop strong language foundations.",
  },
  {
    id: 20,
    name: "Faculty Member 20",
    designation: "PRT",
    subject: "Hindi",
    department: "Primary",
    qualification: "B.A., B.Ed.",
    experience: "7+ Years",
    image: "/faculty/teacher-20.jpg",
    bio: "Supports young learners in developing language skills through interactive activities.",
  },
  {
    id: 21,
    name: "Faculty Member 21",
    designation: "PRT",
    subject: "Mathematics",
    department: "Primary",
    qualification: "B.Sc., B.Ed.",
    experience: "5+ Years",
    image: "/faculty/teacher-21.jpg",
    bio: "Builds strong numerical foundations through simple and engaging learning activities.",
  },
  {
    id: 22,
    name: "Faculty Member 22",
    designation: "PRT",
    subject: "EVS",
    department: "Primary",
    qualification: "B.A., B.Ed.",
    experience: "6+ Years",
    image: "/faculty/teacher-22.jpg",
    bio: "Introduces children to their surroundings through activity-based and experiential learning.",
  },
  {
    id: 23,
    name: "Faculty Member 23",
    designation: "PRT",
    subject: "English",
    department: "Primary",
    qualification: "B.A., B.Ed.",
    experience: "5+ Years",
    image: "/faculty/teacher-23.jpg",
    bio: "Encourages reading, communication and creative expression among young learners.",
  },
  {
    id: 24,
    name: "Faculty Member 24",
    designation: "PRT",
    subject: "Mathematics",
    department: "Primary",
    qualification: "B.Sc., B.Ed.",
    experience: "7+ Years",
    image: "/faculty/teacher-24.jpg",
    bio: "Makes mathematics accessible through activities, examples and concept-based learning.",
  },

  {
    id: 25,
    name: "Faculty Member 25",
    designation: "TGT",
    subject: "English",
    department: "Middle School",
    qualification: "M.A., B.Ed.",
    experience: "8+ Years",
    image: "/faculty/teacher-25.jpg",
    bio: "Develops students' communication, comprehension and written expression skills.",
  },
  {
    id: 26,
    name: "Faculty Member 26",
    designation: "TGT",
    subject: "Mathematics",
    department: "Middle School",
    qualification: "M.Sc., B.Ed.",
    experience: "9+ Years",
    image: "/faculty/teacher-26.jpg",
    bio: "Builds mathematical confidence through conceptual teaching and regular practice.",
  },
  {
    id: 27,
    name: "Faculty Member 27",
    designation: "TGT",
    subject: "Science",
    department: "Middle School",
    qualification: "M.Sc., B.Ed.",
    experience: "7+ Years",
    image: "/faculty/teacher-27.jpg",
    bio: "Encourages students to observe, question and explore scientific concepts.",
  },
  {
    id: 28,
    name: "Faculty Member 28",
    designation: "TGT",
    subject: "Social Science",
    department: "Middle School",
    qualification: "M.A., B.Ed.",
    experience: "8+ Years",
    image: "/faculty/teacher-28.jpg",
    bio: "Helps students connect social science concepts with everyday life and society.",
  },
  {
    id: 29,
    name: "Faculty Member 29",
    designation: "TGT",
    subject: "Computer",
    department: "Middle School",
    qualification: "MCA, B.Ed.",
    experience: "6+ Years",
    image: "/faculty/teacher-29.jpg",
    bio: "Introduces students to digital literacy, computing concepts and responsible technology use.",
  },
  {
    id: 30,
    name: "Faculty Member 30",
    designation: "TGT",
    subject: "Hindi",
    department: "Middle School",
    qualification: "M.A., B.Ed.",
    experience: "7+ Years",
    image: "/faculty/teacher-30.jpg",
    bio: "Develops language skills and encourages students to appreciate Hindi literature.",
  },
  {
    id: 31,
    name: "Faculty Member 31",
    designation: "TGT",
    subject: "Physical Education",
    department: "Middle School",
    qualification: "B.P.Ed.",
    experience: "6+ Years",
    image: "/faculty/teacher-31.jpg",
    bio: "Encourages physical fitness, discipline, teamwork and sportsmanship.",
  },
  {
    id: 32,
    name: "Faculty Member 32",
    designation: "TGT",
    subject: "Computer Science",
    department: "Science",
    qualification: "MCA, B.Ed.",
    experience: "5+ Years",
    image: "/faculty/teacher-32.jpg",
    bio: "Supports students in developing digital skills, computational thinking and technology awareness.",
  },
];

export default function FacultyPage() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedTeacher, setSelectedTeacher] =
    useState<FacultyMember | null>(null);

  const filteredFaculty = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faculty.filter((teacher) => {
      const matchesDepartment =
        activeDepartment === "All" ||
        teacher.department === activeDepartment;

      const matchesSearch =
        !query ||
        teacher.name.toLowerCase().includes(query) ||
        teacher.subject.toLowerCase().includes(query) ||
        teacher.designation.toLowerCase().includes(query) ||
        teacher.department.toLowerCase().includes(query);

      return matchesDepartment && matchesSearch;
    });
  }, [activeDepartment, search]);

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
                Our Faculty
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Meet the dedicated educators who guide, inspire and support
                our students throughout their learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO + STATS
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  Our Teachers
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                  Dedicated to Every Student&apos;s Growth
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                  Our faculty members bring subject expertise, experience and
                  a student-focused approach to the classroom. They work
                  together to create an environment that encourages learning,
                  curiosity, discipline and personal growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl bg-[#F4F7FB] p-5 text-center sm:p-6">
                  <p className="font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                    30+
                  </p>
                  <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
                    Faculty Members
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 text-center sm:p-6">
                  <p className="font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                    6
                  </p>
                  <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
                    Departments
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 text-center sm:p-6">
                  <p className="font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                    100%
                  </p>
                  <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
                    Student Focus
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 text-center sm:p-6">
                  <p className="font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                    ⭐
                  </p>
                  <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
                    Learning First
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FACULTY DIRECTORY
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
            {/* HEADER */}
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Faculty Directory
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                Meet Our Teachers
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#64748B]">
                Search for a teacher or browse faculty members by department.
              </p>
            </div>

            {/* SEARCH */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#94A3B8]">
                  🔍
                </span>

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search teacher, subject or department..."
                  className="w-full rounded-2xl border border-[#DDE5F0] bg-white py-4 pl-12 pr-5 text-sm text-[#334155] outline-none transition focus:border-[#1B3A6B] focus:ring-4 focus:ring-[#1B3A6B]/10"
                />
              </div>
            </div>

            {/* FILTERS */}
            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex min-w-max justify-center gap-2 sm:gap-3">
                {departments.map((department) => {
                  const active = activeDepartment === department;

                  return (
                    <button
                      key={department}
                      type="button"
                      onClick={() => setActiveDepartment(department)}
                      className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:px-5 sm:text-sm ${
                        active
                          ? "bg-[#1B3A6B] text-white shadow-md"
                          : "border border-[#DDE5F0] bg-white text-[#64748B] hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
                      }`}
                    >
                      {department}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RESULT COUNT */}
            <div className="mt-7 flex items-center justify-between">
              <p className="text-sm text-[#64748B]">
                Showing{" "}
                <span className="font-bold text-[#1B3A6B]">
                  {filteredFaculty.length}
                </span>{" "}
                faculty members
              </p>

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-xs font-semibold text-[#1B3A6B] hover:text-[#D4973E]"
                >
                  Clear Search
                </button>
              )}
            </div>

            {/* GRID */}
            {filteredFaculty.length > 0 ? (
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                {filteredFaculty.map((teacher) => (
                  <button
                    key={teacher.id}
                    type="button"
                    onClick={() => setSelectedTeacher(teacher)}
                    className="group overflow-hidden rounded-2xl border border-[#DDE5F0] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#1B3A6B]/15"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-[4/4.6] overflow-hidden bg-[#EAF0FA]">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 639px) 45vw, (max-width: 1023px) 45vw, (max-width: 1279px) 30vw, 260px"
                      />

                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F2447]/80 to-transparent" />

                      <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-[#1B3A6B] shadow-sm">
                        View Profile
                      </span>
                    </div>

                    {/* INFO */}
                    <div className="p-3 sm:p-5">
                      <p className="truncate text-[9px] font-bold uppercase tracking-[0.12em] text-[#D4973E] sm:text-[10px] sm:tracking-[0.16em]">
                        {teacher.department}
                      </p>

                      <h3 className="mt-1.5 truncate font-serif text-base font-bold text-[#1B3A6B] sm:mt-2 sm:text-xl">
                        {teacher.name}
                      </h3>

                      <p className="mt-1 truncate text-[11px] text-[#64748B] sm:text-sm">
                        {teacher.designation} · {teacher.subject}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-3xl border border-[#DDE5F0] bg-white px-6 py-14 text-center">
                <div className="text-4xl">🔎</div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-[#1B3A6B]">
                  No Faculty Found
                </h3>

                <p className="mt-2 text-sm text-[#64748B]">
                  Try another teacher name, subject or department.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveDepartment("All");
                  }}
                  className="mt-5 rounded-xl bg-[#1B3A6B] px-5 py-2.5 text-sm font-bold text-white"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            TEACHING APPROACH
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1150px] px-5 sm:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[#DDE5F0] bg-[#F4F7FB] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                  📚
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                  Subject Expertise
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Strong subject knowledge combined with structured classroom
                  learning.
                </p>
              </div>

              <div className="rounded-2xl border border-[#DDE5F0] bg-[#F4F7FB] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                  💡
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                  Student Focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Encouraging questions, curiosity and individual learning
                  needs.
                </p>
              </div>

              <div className="rounded-2xl border border-[#DDE5F0] bg-[#F4F7FB] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5E5] text-xl">
                  🌱
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
                  Holistic Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#64748B]">
                  Supporting academic, personal, social and extracurricular
                  development.
                </p>
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
                  Discover Our School
                </p>

                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Learn, Grow and Excel Together
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Explore our academic programmes and admission opportunities.
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

      {/* =======================================================
          TEACHER DETAIL MODAL
      ======================================================== */}
      {selectedTeacher && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07152D]/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-modal-title"
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedTeacher(null)}
              aria-label="Close teacher profile"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-[#334155] shadow-md transition hover:bg-[#F4F7FB]"
            >
              ×
            </button>

            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              {/* MODAL IMAGE */}
              <div className="relative min-h-[300px] bg-[#EAF0FA] md:min-h-full">
                <Image
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 320px"
                />
              </div>

              {/* MODAL CONTENT */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-xs">
                  {selectedTeacher.department}
                </p>

                <h2
                  id="faculty-modal-title"
                  className="mt-2 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl"
                >
                  {selectedTeacher.name}
                </h2>

                <p className="mt-2 text-sm font-semibold text-[#64748B]">
                  {selectedTeacher.designation} ·{" "}
                  {selectedTeacher.subject}
                </p>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                {/* DETAILS */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#F4F7FB] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Subject
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#334155]">
                      {selectedTeacher.subject}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F4F7FB] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Department
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#334155]">
                      {selectedTeacher.department}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F4F7FB] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Qualification
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#334155]">
                      {selectedTeacher.qualification}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F4F7FB] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8]">
                      Experience
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#334155]">
                      {selectedTeacher.experience}
                    </p>
                  </div>
                </div>

                {/* BIO */}
                <div className="mt-7">
                  <h3 className="font-serif text-xl font-bold text-[#1B3A6B]">
                    About
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {selectedTeacher.bio}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTeacher(null)}
                  className="mt-7 w-full rounded-xl bg-[#1B3A6B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#112649]"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}