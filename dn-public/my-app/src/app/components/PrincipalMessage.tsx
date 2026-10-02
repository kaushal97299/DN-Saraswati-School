import Link from "next/link";

export default function PrincipalMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Principal Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?w=600&h=750&fit=crop&auto=format"
                alt="Principal Dr. Sunita Verma"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Principal Name Card */}
            <div className="absolute -bottom-5 -right-2 sm:right-4 bg-white rounded-xl px-5 py-4 shadow-lg border border-[#DDE5F0]">
              <div
                className="font-serif font-bold"
                style={{ color: "#1B3A6B" }}
              >
                Dr. Sunita Verma
              </div>

              <div className="text-xs text-gray-500 font-sans">
                Principal, M.A., B.Ed., Ph.D.
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest font-sans mb-3"
              style={{ color: "#D4973E" }}
            >
              From the Principal's Desk
            </div>

            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#1B3A6B" }}
            >
              Building Character,
              <br />
              Achieving Excellence
            </h2>

            <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 relative font-sans">
              <span
                className="absolute -top-4 -left-2 text-6xl font-serif leading-none"
                style={{
                  color: "#D4973E",
                  opacity: 0.3,
                }}
              >
                "
              </span>

              At DN Saraswati, we believe every child carries within them the
              seed of greatness. Our mission is not merely to educate, but to
              inspire — to kindle curiosity, nurture talent, and build the moral
              foundations that last a lifetime. We are committed to creating an
              environment where learning is a joy and achievement is celebrated.
            </blockquote>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-sans">
              With a dedicated faculty, state-of-the-art facilities, and a
              curriculum that balances academic rigour with co-curricular
              growth, DN Saraswati prepares students not just for examinations,
              but for life.
            </p>

            <Link
              href="/principal"
              style={{
                color: "#1B3A6B",
                border: "2px solid #1B3A6B",
              }}
              className="inline-block px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#1B3A6B] hover:text-white transition-colors font-sans"
            >
              Read Full Message →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}