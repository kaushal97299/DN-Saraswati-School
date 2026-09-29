import Link from "next/link";

const events = [
  {
    date: "15",
    month: "Mar",
    title: "Annual Sports Day 2025",
    desc: "A full-day celebration of athletics, team sports and cultural performances.",
    tag: "Sports",
  },
  {
    date: "22",
    month: "Mar",
    title: "Science Exhibition",
    desc: "Students showcase innovative projects in Physics, Chemistry and Biology.",
    tag: "Academic",
  },
  {
    date: "5",
    month: "Apr",
    title: "Annual Prize Distribution",
    desc: "Honouring academic toppers, sportspersons and cultural achievers.",
    tag: "Ceremony",
  },
];

export default function EventsSection() {
  return (
    <section
      style={{ background: "#1B3A6B" }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <div
            className="text-xs font-semibold uppercase tracking-widest font-sans mb-3"
            style={{ color: "#D4973E" }}
          >
            What's On
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Upcoming Events
          </h2>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="flex items-start gap-4">

                {/* Date */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center"
                  style={{ background: "#D4973E" }}
                >
                  <span className="font-bold text-xl text-white leading-none">
                    {event.date}
                  </span>

                  <span className="text-white/80 text-xs uppercase">
                    {event.month}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded font-sans font-medium mb-2"
                    style={{
                      background: "rgba(212,151,62,0.2)",
                      color: "#F0B45A",
                    }}
                  >
                    {event.tag}
                  </span>

                  <h3 className="font-serif font-bold text-white text-base mb-1">
                    {event.title}
                  </h3>

                  <p className="text-white/60 text-sm font-sans leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <Link
            href="/events"
            className="inline-block px-8 py-3 font-semibold rounded-lg font-sans text-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            View All Events &amp; News
          </Link>
        </div>

      </div>
    </section>
  );
}