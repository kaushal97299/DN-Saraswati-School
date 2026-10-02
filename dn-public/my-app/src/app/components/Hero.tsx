import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div className="relative min-h-[720px] w-full overflow-hidden sm:min-h-[760px] lg:min-h-[700px]">
        {/* =================================================
            BACKGROUND IMAGE
        ================================================== */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('./school-hero.jpeg')",
          }}
        />

        {/* =================================================
            OVERLAY
        ================================================== */}

        <div className="absolute inset-0 bg-[#173E78]/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#12376D]/95 via-[#173E78]/75 to-[#173E78]/45" />

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto w-full max-w-[1900px] px-5 sm:px-7 md:px-8 lg:px-10 xl:px-12">
          <div className="grid min-h-[720px] items-center gap-12 py-16 sm:min-h-[760px] sm:py-20 md:gap-14 md:py-20 lg:min-h-[700px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-14 xl:gap-16 xl:py-16">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="max-w-[800px]">
              {/* ADMISSION BADGE */}

              <div className="mb-6 inline-flex max-w-full items-center rounded-full border border-[#D4973E]/70 bg-white/[0.08] px-4 py-2 backdrop-blur-md sm:mb-7 sm:px-5 sm:py-2.5">
                <span className="mr-2.5 h-2 w-2 shrink-0 rounded-full bg-[#F0B45A] sm:mr-3 sm:h-2.5 sm:w-2.5" />

                <span className="text-xs font-semibold tracking-wide text-[#F0B45A] sm:text-sm md:text-base">
                  Admissions Open — Session 2025–26
                </span>
              </div>

              {/* HEADING */}

              <h1 className="font-serif text-[42px] font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-[50px] md:text-[58px] lg:text-[64px] xl:text-[76px] 2xl:text-[84px]">
                Shaping Futures,
                <br />
                <span className="text-[#D4973E]">
                  Inspiring Minds
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-6 max-w-[760px] text-sm leading-6 text-white/85 sm:mt-7 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mt-7 lg:text-[18px] xl:text-[19px]">
                DN Saraswati Sr. Sec. School has been a beacon of quality
                education in Samain since 1982. CBSE affiliated, committed
                to academic excellence and holistic student development.
              </p>

              {/* BUTTONS */}

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/admissions"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#D4973E] px-6 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6A54A] sm:h-14 sm:w-auto sm:px-8 sm:text-base lg:text-[17px]"
                >
                  Apply for Admission
                </Link>

                <Link
                  href="/about"
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-white/[0.06] px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14] sm:h-14 sm:w-auto sm:px-8 sm:text-base lg:text-[17px]"
                >
                  Explore School
                  <span className="ml-2 text-lg sm:text-xl">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT STAT CARDS
            ================================================== */}

            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-6">
              <StatCard
                icon="🏛️"
                number="1982"
                label="Established"
              />

              <StatCard
                icon="🧑‍🎓"
                number="2,800+"
                label="Students"
              />

              <StatCard
                icon="🧑‍🏫"
                number="120+"
                label="Faculty Members"
              />

              <StatCard
                icon="📊"
                number="100%"
                label="Board Results"
              />
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM CURVE
        ================================================== */}

        <div className="absolute bottom-[-1px] left-[-3%] z-20 h-[48px] w-[106%] sm:h-[58px] md:h-[65px] lg:h-[75px]">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M0,65 C180,85 340,92 520,88 C720,84 830,60 1010,58 C1190,56 1310,68 1440,78 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   STAT CARD
============================================================= */

function StatCard({
  icon,
  number,
  label,
}: {
  icon: string;
  number: string;
  label: string;
}) {
  return (
    <div className="group relative min-h-[145px] overflow-hidden rounded-[16px] border border-white/20 bg-white/[0.12] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.16] sm:min-h-[165px] sm:rounded-[18px] sm:p-5 md:min-h-[180px] md:p-6 lg:min-h-[175px] lg:p-5 xl:min-h-[190px] xl:p-7">
      {/* TOP LINE */}

      <div className="absolute inset-x-0 top-0 h-px bg-white/30" />

      {/* GLOW */}

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.07] blur-3xl" />

      {/* CONTENT */}

      <div className="relative z-10">
        {/* ICON */}

        <div className="mb-5 text-[28px] leading-none sm:mb-6 sm:text-[31px] md:text-[34px]">
          {icon}
        </div>

        {/* NUMBER */}

        <div className="font-serif text-[27px] font-bold leading-none text-white sm:text-[31px] md:text-[34px] xl:text-[37px]">
          {number}
        </div>

        {/* LABEL */}

        <div className="mt-2.5 text-xs font-medium text-white/70 sm:mt-3 sm:text-sm md:text-[15px] xl:text-[16px]">
          {label}
        </div>
      </div>
    </div>
  );
}