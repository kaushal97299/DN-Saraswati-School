const notices = [
  "🔔 Admissions Open for Session 2025–26 | Classes Nursery to XI",
  "📢 Annual Sports Day — 15 March 2025 | All Students to Participate",
  "📋 CBSE Board Exam Results: 100% Pass, 18 Students Score Above 90%",
  "📅 Parent-Teacher Meeting Scheduled for 10 September 2025",
  "🏆 School wins State Science Olympiad Trophy — Congratulations!",
  "📖 Half-Yearly Examinations Begin October 1, 2025",
];

export default function NoticeBoard() {
  return (
    <section className="bg-white py-4 border-b border-[#DDE5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4">

        {/* Notice Label */}
        <div
          className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded font-semibold text-xs text-white font-sans"
          style={{ background: "#1B3A6B" }}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>

          NOTICES
        </div>

        {/* Scrolling Notices */}
        <div className="overflow-hidden flex-1">
          <div className="marquee-track whitespace-nowrap">
            {[...notices, ...notices].map((notice, index) => (
              <span
                key={index}
                className="inline-block mr-16 text-sm text-gray-700"
              >
                {notice}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}