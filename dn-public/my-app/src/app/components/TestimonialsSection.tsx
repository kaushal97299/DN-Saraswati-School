const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent — Class IX",
    text: "The teachers here are remarkably dedicated. My daughter's confidence and academic performance have improved tremendously since joining DN Saraswati.",
    initials: "PS",
  },
  {
    name: "Ravi Kumar",
    role: "Alumni — Batch 2018",
    text: "The values and discipline instilled here shaped my career. I secured admission to IIT Delhi — a dream that became reality with DN Saraswati's guidance.",
    initials: "RK",
  },
  {
    name: "Meena Devi",
    role: "Parent — Class VI",
    text: "The smart classrooms and activity-based learning make education enjoyable. My son looks forward to school every morning!",
    initials: "MD",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      style={{ background: "#F4F7FB" }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div
            className="text-xs font-semibold uppercase tracking-widest font-sans mb-3"
            style={{ color: "#D4973E" }}
          >
            Voices
          </div>

          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "#1B3A6B" }}
          >
            What Families Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-7 border border-[#DDE5F0]"
            >

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4"
                    fill="#D4973E"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 font-sans">
                "{testimonial.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "#1B3A6B" }}
                >
                  {testimonial.initials}
                </div>

                <div>
                  <div className="font-semibold text-sm text-gray-800 font-sans">
                    {testimonial.name}
                  </div>

                  <div className="text-xs text-gray-400 font-sans">
                    {testimonial.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}