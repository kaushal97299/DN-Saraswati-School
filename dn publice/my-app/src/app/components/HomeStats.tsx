const stats = [
  {
    value: "1982",
    label: "Established",
    icon: "🏛️",
  },
  {
    value: "2,800+",
    label: "Students",
    icon: "👨‍🎓",
  },
  {
    value: "120+",
    label: "Faculty Members",
    icon: "👩‍🏫",
  },
  {
    value: "100%",
    label: "Board Results",
    icon: "📊",
  },
  {
    value: "43+",
    label: "Years of Excellence",
    icon: "⭐",
  },
  {
    value: "CBSE",
    label: "Affiliated",
    icon: "🎓",
  },
];

export default function HomeStats() {
  return (
    <section
      style={{ background: "#F4F7FB" }}
      className="py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-2xl mb-1">
                {stat.icon}
              </div>

              <div
                className="font-serif font-bold text-2xl"
                style={{ color: "#1B3A6B" }}
              >
                {stat.value}
              </div>

              <div className="text-gray-500 text-xs font-sans mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}