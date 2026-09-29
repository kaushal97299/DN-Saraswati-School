import Link from "next/link";

const gallery = [
  "https://images.unsplash.com/photo-1786013522160-00ac876da3ab?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1634608874538-443b84f7b06b?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format",
];

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div
            className="text-xs font-semibold uppercase tracking-widest font-sans mb-3"
            style={{ color: "#D4973E" }}
          >
            Visual Tour
          </div>

          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "#1B3A6B" }}
          >
            School Gallery
          </h2>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden bg-gray-100 ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{
                  aspectRatio: index === 0 ? "16/9" : "4/3",
                }}
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            style={{ background: "#1B3A6B" }}
            className="inline-block px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity font-sans text-sm"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}