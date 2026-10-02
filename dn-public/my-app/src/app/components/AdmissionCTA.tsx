import Link from "next/link";

export default function AdmissionCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "#1B3A6B" }}
    >
      {/* Decorative Circles */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: "#D4973E",
            transform: "translate(40%, -40%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
          style={{
            background: "#D4973E",
            transform: "translate(-40%, 40%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <div className="text-4xl mb-4">
          🎓
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          Admissions Open for 2025–26
        </h2>

        <p className="text-white/70 text-lg font-sans mb-8">
          Secure your child's future at DN Saraswati. Limited seats available
          for Classes Nursery to XI. Apply before 31 March 2025.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/admissions"
            style={{ background: "#D4973E" }}
            className="inline-block px-8 py-3.5 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity font-sans"
          >
            Apply for Admission
          </Link>

          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 text-white font-semibold rounded-lg font-sans border border-white/30 hover:bg-white/10 transition-colors"
          >
            Contact Admissions Office
          </Link>
        </div>
      </div>
    </section>
  );
}