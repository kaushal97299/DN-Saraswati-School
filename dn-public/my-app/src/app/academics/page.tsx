"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type TabKey =
  | "overview"
  | "science"
  | "commerce"
  | "arts"
  | "middle"
  | "primary";

type AcademicData = {
  title: string;
  subtitle: string;
  description: string;
  subjects: string[];
  careers: string[];
};

const tabs: { id: TabKey; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "science", label: "Science" },
  { id: "commerce", label: "Commerce" },
  { id: "arts", label: "Arts" },
  { id: "middle", label: "Middle School" },
  { id: "primary", label: "Primary" },
];

const academicData: Record<TabKey, AcademicData> = {
  overview: {
    title: "Academic Excellence",
    subtitle: "A strong foundation for lifelong learning",
    description:
      "Our academic programme is designed to develop strong subject knowledge, critical thinking, creativity and confidence. Students are encouraged to learn through a balanced combination of classroom teaching, practical experiences and co-curricular activities.",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Education",
    ],
    careers: [
      "Higher Education",
      "Professional Courses",
      "Competitive Examinations",
      "Skill Development",
    ],
  },

  science: {
    title: "Science Stream",
    subtitle: "Explore, experiment and discover",
    description:
      "The Science stream develops analytical thinking and a strong understanding of the natural and physical world. Students receive a balanced academic foundation along with opportunities for practical learning.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "English",
      "Computer Science",
    ],
    careers: [
      "Engineering",
      "Medicine",
      "Research",
      "Technology",
      "Data & Computing",
      "Pure Sciences",
    ],
  },

  commerce: {
    title: "Commerce Stream",
    subtitle: "Building the foundation for business and finance",
    description:
      "Commerce education introduces students to business, economics, accounting and financial concepts while developing numerical ability, decision-making and practical understanding.",
    subjects: [
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics",
      "English",
      "Computer Applications",
    ],
    careers: [
      "Chartered Accountancy",
      "Banking",
      "Finance",
      "Business Management",
      "Economics",
      "Entrepreneurship",
    ],
  },

  arts: {
    title: "Arts & Humanities",
    subtitle: "Understanding people, society and the world",
    description:
      "The Arts and Humanities programme encourages students to understand society, culture, history and human behaviour while developing communication, creativity and analytical skills.",
    subjects: [
      "History",
      "Political Science",
      "Geography",
      "Hindi",
      "English",
      "Economics",
    ],
    careers: [
      "Civil Services",
      "Law",
      "Journalism",
      "Teaching",
      "Social Sciences",
      "Public Administration",
    ],
  },

  middle: {
    title: "Middle School",
    subtitle: "Classes VI to VIII",
    description:
      "The middle school years focus on strengthening fundamental concepts while helping students develop independent learning habits, curiosity and confidence across different areas of knowledge.",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Science",
      "Social Science",
      "Computer Education",
    ],
    careers: [
      "Concept Building",
      "Academic Foundation",
      "Creative Learning",
      "Skill Development",
    ],
  },

  primary: {
    title: "Primary School",
    subtitle: "Classes I to V",
    description:
      "Primary education focuses on building strong foundations in language, mathematics, environmental awareness and essential life skills through engaging and age-appropriate learning experiences.",
    subjects: [
      "English",
      "Hindi",
      "Mathematics",
      "Environmental Studies",
      "Computer Education",
      "General Knowledge",
    ],
    careers: [
      "Strong Foundations",
      "Communication Skills",
      "Numeracy",
      "Creative Development",
    ],
  },
};

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const current = academicData[activeTab];

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
                Academics
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Inspiring curiosity, building knowledge and preparing students
                for a successful future.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  Our Academic Approach
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                  Learning that prepares students for tomorrow
                </h2>

                <div className="mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                <p className="mt-6 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                  We provide a structured academic environment that combines
                  strong fundamentals with opportunities for exploration,
                  practical learning and personal development.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">📚</div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Strong Foundation
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    Clear concepts and strong fundamentals.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">🔬</div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Practical Learning
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    Learning through activities and experiences.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">💡</div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Critical Thinking
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    Encouraging curiosity and independent thinking.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7FB] p-5 sm:p-6">
                  <div className="text-2xl">🌱</div>
                  <h3 className="mt-3 font-serif text-lg font-bold text-[#1B3A6B]">
                    Holistic Growth
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#64748B] sm:text-sm">
                    Academic and personal development together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ACADEMIC TABS
        ====================================================== */}
        <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Programmes
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                Explore Our Academics
              </h2>
            </div>

            {/* TABS */}
            <div className="mt-8 overflow-x-auto pb-2">
              <div className="flex min-w-max justify-center gap-2 sm:gap-3">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:px-5 sm:text-sm ${
                        isActive
                          ? "bg-[#1B3A6B] text-white shadow-md"
                          : "border border-[#DDE5F0] bg-white text-[#64748B] hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-[#DDE5F0] bg-white shadow-sm sm:mt-10">
              <div className="grid md:grid-cols-[1fr_0.85fr]">
                {/* LEFT */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <span className="inline-flex rounded-full bg-[#FFF5E5] px-3 py-1.5 text-xs font-bold text-[#B77A22]">
                    {current.subtitle}
                  </span>

                  <h3 className="mt-4 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                    {current.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#64748B] sm:text-[15px]">
                    {current.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="font-serif text-xl font-bold text-[#1B3A6B]">
                      Key Subjects
                    </h4>

                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {current.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-center gap-3 rounded-xl bg-[#F4F7FB] px-4 py-3"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4973E] text-xs text-white">
                            ✓
                          </span>

                          <span className="text-sm font-medium text-[#334155]">
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="bg-[#1B3A6B] p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A]">
                    Future Pathways
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                    Career Opportunities
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    The programme helps students build knowledge and skills
                    that can support their future academic and professional
                    choices.
                  </p>

                  <div className="mt-7 space-y-3">
                    {current.careers.map((career, index) => (
                      <div
                        key={career}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4973E] text-xs font-bold text-white">
                          {index + 1}
                        </span>

                        <span className="text-sm font-medium text-white/85">
                          {career}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEARNING EXPERIENCE
        ====================================================== */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                Beyond Academics
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl">
                A Complete Learning Experience
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                Education at our school extends beyond textbooks and
                classrooms.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🏆",
                  title: "Sports",
                  text: "Opportunities for physical activity, teamwork and healthy competition.",
                },
                {
                  icon: "🎨",
                  title: "Cultural Activities",
                  text: "Encouraging creativity, expression and appreciation of culture.",
                },
                {
                  icon: "💻",
                  title: "Technology",
                  text: "Developing digital awareness and technology skills for modern learning.",
                },
                {
                  icon: "🧪",
                  title: "Practical Activities",
                  text: "Learning concepts through experiments, activities and real-world experiences.",
                },
                {
                  icon: "📖",
                  title: "Reading",
                  text: "Building strong reading habits and encouraging independent learning.",
                },
                {
                  icon: "🤝",
                  title: "Leadership",
                  text: "Helping students develop communication, teamwork and leadership skills.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#DDE5F0] bg-[#F4F7FB] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-bold text-[#1B3A6B]">
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
            <div className="overflow-hidden rounded-3xl bg-[#1B3A6B] px-5 py-10 text-center shadow-xl sm:px-10 sm:py-14 lg:px-16">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-sm">
                Start Your Journey
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Give Your Child a Strong Academic Foundation
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                Explore our admission process and discover the opportunities
                available at DN Saraswati Sr. Sec. School.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                >
                  Admissions
                </Link>

                <Link
                  href="/facilities"
                  className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Facilities
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