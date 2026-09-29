import Link from "next/link";

const facilities = [
  {
    name: "Smart Classrooms",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format",
    desc: "Interactive digital boards in every classroom.",
  },
  {
    name: "Library",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&auto=format",
    desc: "Over 15,000 books, digital resources and reading zones.",
  },
  {
    name: "Science Labs",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&auto=format",
    desc: "Separate Physics, Chemistry and Biology laboratories.",
  },
  {
    name: "Sports Ground",
    img: "https://images.unsplash.com/photo-1634608874538-443b84f7b06b?w=600&h=400&fit=crop&auto=format",
    desc: "Full-size cricket ground, basketball and volleyball courts.",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <div
            className="text-xs font-semibold uppercase tracking-widest font-sans mb-3"
            style={{ color: "#D4973E" }}
          >
            Infrastructure
          </div>

          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "#1B3A6B" }}
          >
            World-Class Facilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="rounded-xl overflow-hidden border border-[#DDE5F0] group hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={facility.img}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="font-serif font-bold text-base mb-1"
                  style={{ color: "#1B3A6B" }}
                >
                  {facility.name}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed font-sans">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/facilities"
            className="inline-block px-8 py-3 font-semibold rounded-lg hover:bg-[#1B3A6B] hover:text-white transition-colors font-sans text-sm"
            style={{
              color: "#1B3A6B",
              border: "2px solid #1B3A6B",
            }}
          >
            Explore All Facilities
          </Link>
        </div>

      </div>
    </section>
  );
}