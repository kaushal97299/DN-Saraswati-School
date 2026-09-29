import Link from "next/link";

const academics = [
  {
    stream: "Science",
    desc: "Physics, Chemistry, Biology/Mathematics with Computer Science and Physical Education.",
    icon: "🔬",
    color: "#1B3A6B",
  },
  {
    stream: "Commerce",
    desc: "Accountancy, Business Studies, Economics with Mathematics and Physical Education.",
    icon: "📈",
    color: "#2651A3",
  },
  {
    stream: "Arts",
    desc: "History, Political Science, Geography, Hindi, Sanskrit with Computer Science.",
    icon: "🎨",
    color: "#D4973E",
  },
  {
    stream: "Primary (I–V)",
    desc: "Activity-based learning with English, Hindi, Mathematics, EVS and Co-curriculars.",
    icon: "📚",
    color: "#27AE60",
  },
  {
    stream: "Middle (VI–VIII)",
    desc: "Comprehensive foundation in Science, Mathematics, Social Studies and Languages.",
    icon: "🖊️",
    color: "#8E44AD",
  },
  {
    stream: "Secondary (IX–X)",
    desc: "CBSE-aligned curriculum with option of Mathematics Standard or Basic.",
    icon: "📐",
    color: "#C0392B",
  },
];

export default function AcademicsSection() {
  return (
    <section className="py-20" style={{ background: "#F4F7FB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div
            className="text-xs font-semibold uppercase tracking-widest font-sans mb-3"
            style={{ color: "#D4973E" }}
          >
            Curriculum
          </div>

          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "#1B3A6B" }}
          >
            Academic Programmes
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto font-sans">
            Comprehensive CBSE-aligned programmes from Nursery to Class XII
            with three streams at Senior Secondary level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {academics.map((item) => (
            <div
              key={item.stream}
              className="bg-white rounded-xl p-6 border border-[#DDE5F0] hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">
                {item.icon}
              </div>

              <h3
                className="font-serif font-bold text-lg mb-2"
                style={{ color: item.color }}
              >
                {item.stream}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/academics"
            className="inline-block px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity font-sans text-sm"
            style={{ background: "#1B3A6B" }}
          >
            View Full Curriculum
          </Link>
        </div>

      </div>
    </section>
  );
}