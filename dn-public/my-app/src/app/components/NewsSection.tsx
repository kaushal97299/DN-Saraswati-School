import Link from "next/link";

const news = [
  {
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&auto=format",
    date: "Feb 20, 2025",
    title: "DN Saraswati Achieves 100% Pass Rate in CBSE Board Exams",
    desc: "For the sixth consecutive year, our school records a 100% pass rate in Class X and XII Board Examinations.",
  },
  {
    img: "https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?w=600&h=400&fit=crop&auto=format",
    date: "Jan 15, 2025",
    title: "State Science Olympiad: Our Students Bring Home Gold",
    desc: "Team DN Saraswati clinched 3 gold medals at the Haryana State Science Olympiad, Panchkula.",
  },
  {
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format",
    date: "Dec 10, 2024",
    title: "New Smart Classrooms Inaugurated by District Commissioner",
    desc: "30 new digitally equipped classrooms were inaugurated, enhancing the learning experience.",
  },
];

export default function NewsSection() {
  return (
    <section
      style={{ background: "#F4F7FB" }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest font-sans mb-3"
              style={{ color: "#D4973E" }}
            >
              Updates
            </div>

            <h2
              className="font-serif text-3xl md:text-4xl font-bold"
              style={{ color: "#1B3A6B" }}
            >
              Latest News
            </h2>
          </div>

          <Link
            href="/events"
            className="text-sm font-medium font-sans hidden sm:block"
            style={{ color: "#1B3A6B" }}
          >
            All News →
          </Link>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-xl overflow-hidden border border-[#DDE5F0] hover:shadow-md transition-shadow group"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs text-gray-400 font-sans mb-2">
                  {item.date}
                </div>

                <h3
                  className="font-serif font-bold text-base mb-2"
                  style={{ color: "#1B3A6B" }}
                >
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}