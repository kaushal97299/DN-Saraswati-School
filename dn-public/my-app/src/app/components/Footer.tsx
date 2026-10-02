import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    label: "About School",
    href: "/about",
  },
  {
    label: "Principal's Message",
    href: "/principal",
  },
  {
    label: "Academics",
    href: "/academics",
  },
  {
    label: "Admissions",
    href: "/admissions",
  },
  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "Results",
    href: "/results",
  },
];

const exploreLinks = [
  {
    label: "Facilities",
    href: "/facilities",
  },
  {
    label: "Events & News",
    href: "/events",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Downloads",
    href: "/downloads",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "#0F2447" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-1">

            {/* Logo + School Name */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shrink-0"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(212,151,62,0.4)",
                }}
              >
                <Image
                  src="/DN-logo.png"
                  alt="DN Saraswati Sr. Sec. School Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="font-serif font-bold text-base text-white leading-tight">
                  DN Saraswati
                </div>

                <div className="text-xs text-white/60 leading-tight">
                  Sr. Sec. School, Samain
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Nurturing excellence in education since 1982. Affiliated to
              HBSE, dedicated to holistic development of every student.
            </p>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="flex items-center gap-3">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4973E] hover:text-white transition-all duration-200"
              >
                <span className="text-sm font-bold">
                  f
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4973E] hover:text-white transition-all duration-200"
              >
                <span className="text-sm font-bold">
                  ◎
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4973E] hover:text-white transition-all duration-200"
              >
                <span className="text-xs font-bold">
                  ▶
                </span>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4973E] hover:text-white transition-all duration-200"
              >
                <span className="text-sm font-bold">
                  𝕏
                </span>
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#D4973E] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      />
                    </svg>

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-4">
              Explore
            </h4>

            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#D4973E] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l-4 4a1 1 0 010 1.414l-4 4a1 1 0 010-1.414 1 1 0 010-1.414z"
                      />
                    </svg>

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-4">
              Contact Us
            </h4>

            <ul className="space-y-4">

              {/* Address */}
              <li className="flex gap-3">
                <svg
                  className="w-4 h-4 text-[#D4973E] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="text-white/60 text-sm leading-relaxed">
                  Village Samain, Tehsil Narnaul, District Mahendragarh,
                  Haryana – 123001
                </span>
              </li>

              {/* Phone */}
              <li className="flex gap-3">
                <svg
                  className="w-4 h-4 text-[#D4973E] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a2 2 0 01.949.684V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="text-white/60 text-sm">
                  +91-98765-43210
                  <br />
                  +91-01282-246001
                </span>
              </li>

              {/* Email */}
              <li className="flex gap-3">
                <svg
                  className="w-4 h-4 text-[#D4973E] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="text-white/60 text-sm break-all">
                  info@dnsaraswati.edu.in
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
        className="py-5 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40 text-center sm:text-left">

          <span>
            © 2025 DN Saraswati Sr. Sec. School, Samain. All rights reserved.
          </span>

          <span>
            HBSE Affiliated | School No. 530481 | Est. 1982
          </span>

        </div>
      </div>
    </footer>
  );
}