export default function SchoolStats() {
  const stats = [
    {
      number: "1990",
      label: "Established",
    },
    {
      number: "2,000+",
      label: "Students",
    },
    {
      number: "60+",
      label: "Faculty Members",
    },
    {
      number: "100%",
      label: "Board Results",
    },
    {
      number: "20+",
      label: "Years of Excellence",
    },
    {
      number: "HBSE",
      label: "Affiliated",
    },
  ];

  return (
    <section className="relative bg-white py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10">
        {/* =====================================================
            STATS CONTAINER
        ====================================================== */}

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#DDE5F0] bg-[#F4F7FB] shadow-sm md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group
                flex min-h-[125px] flex-col items-center justify-center
                px-3 py-6 text-center
                transition-all duration-300
                hover:bg-white
                sm:min-h-[135px]
                sm:px-4
                sm:py-7
                md:min-h-[145px]
                md:px-5
                md:py-8
                lg:min-h-[155px]
                lg:px-4
                lg:py-8
                xl:min-h-[165px]
                xl:px-5

                ${index !== 0 ? "border-l border-[#DDE5F0]" : ""}

                max-md:[&:nth-child(3)]:border-l-0
                max-md:[&:nth-child(5)]:border-l-0

                md:max-lg:[&:nth-child(4)]:border-l-0
                md:max-lg:[&:nth-child(6)]:border-l-0
              `}
            >
              {/* NUMBER */}

              <div
                className={`
                  font-serif
                  text-[26px]
                  font-bold
                  leading-none
                  text-[#1B3A6B]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  sm:text-[29px]
                  md:text-[31px]
                  lg:text-[29px]
                  xl:text-[32px]
                `}
              >
                {stat.number}
              </div>

              {/* LABEL */}

              <div className="mt-2 max-w-[150px] text-[11px] font-medium leading-5 text-gray-500 sm:text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}