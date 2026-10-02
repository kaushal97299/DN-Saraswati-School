"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../logo/DN-LOGO.png";

/* =========================================================
   DESKTOP LINKS
   1024px+
========================================================= */

const desktopLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Facilities", href: "/facilities" },
  { label: "Events & News", href: "#" },
  { label: "Gallery", href: "/gallery" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

/* =========================================================
   TABLET LINKS
   768px - 1023px
========================================================= */

const tabletLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
];

/* =========================================================
   DESKTOP MORE
========================================================= */

const desktopMoreLinks = [
  {
    label: "Principal's Message",
    href: "/principal",
    icon: "👨‍🏫",
  },
  {
    label: "Downloads",
    href: "/downloads",
    icon: "📥",
  },
];

/* =========================================================
   TABLET MORE
========================================================= */

const tabletMoreLinks = [
  {
    label: "Facilities",
    href: "/facilities",
    icon: "🏫",
  },
  {
    label: "Events & News",
    href: "#",
    icon: "📅",
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: "🖼️",
  },
  {
    label: "Results",
    href: "/results",
    icon: "🏆",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "📞",
  },
  {
    label: "Principal's Message",
    href: "/principal",
    icon: "👨‍🏫",
  },
  {
    label: "Downloads",
    href: "/downloads",
    icon: "📥",
  },
];

/* =========================================================
   MOBILE MORE
========================================================= */

const mobileMoreLinks = [
  {
    label: "About School",
    href: "/about",
    icon: "🏫",
  },
  {
    label: "Academics",
    href: "/academics",
    icon: "📚",
  },
  {
    label: "Faculty",
    href: "/faculty",
    icon: "👨‍🏫",
  },
  {
    label: "Facilities",
    href: "/facilities",
    icon: "🏢",
  },
  {
    label: "Events",
    href: "/#",
    icon: "📅",
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: "🖼️",
  },
  {
    label: "Results",
    href: "/results",
    icon: "🏆",
  },
  {
    label: "Downloads",
    href: "/downloads",
    icon: "📥",
  },
  {
    label: "Principal",
    href: "/principal",
    icon: "👨‍💼",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "📞",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const [tabletMoreOpen, setTabletMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  /* =======================================================
     ACTIVE ROUTE
  ======================================================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  /* =======================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ======================================================= */

  useEffect(() => {
    setDesktopMoreOpen(false);
    setTabletMoreOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopMoreOpen(false);
        setTabletMoreOpen(false);
        setMobileMoreOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          DESKTOP HEADER
          1024px+
      ====================================================== */}

      <header className="sticky top-0 z-[100] hidden w-full border-b border-[#DDE5F0] bg-white/95 shadow-sm backdrop-blur-xl lg:block">
        {/* TOP BAR */}

        <div className="bg-[#112649]">
          <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-5 xl:px-6">
            <div className="flex items-center gap-5 text-[11px] text-white/80 xl:gap-6 xl:text-xs">
              <a
                href="tel:+919876543210"
                className="transition-colors hover:text-[#F0B45A]"
              >
                +91-98765-43210
              </a>

              <a
                href="mailto:info@dnsaraswati.edu.in"
                className="hidden sm:block transition-colors hover:text-[#F0B45A]"
              >
                info@dnsaraswati.edu.in
              </a>
            </div>

            <span className="hidden text-xs text-white/60 xl:block">
              Quality Education • Since 1982
            </span>
          </div>
        </div>

        {/* MAIN HEADER */}

        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center gap-3 px-4 xl:px-5">
          {/* LOGO */}
          <Link
            href="/"
            aria-label="DN Saraswati Sr. Sec. School, Samain"
            className="flex shrink-0 items-center gap-2.5 xl:gap-3"
          >
            {/* Logo Image */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center xl:h-11 xl:w-11">
              <Image
                src={logo}
                alt="DN Saraswati Sr. Sec. School Logo"
                width={44}
                height={44}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            {/* School Name */}
            <div>
              <div className="font-serif text-[16px] font-bold leading-tight text-[#1B3A6B] xl:text-[18px]">
                DN Saraswati
              </div>

              <div className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#D4973E] xl:text-[10px] xl:tracking-[0.16em]">
                Sr. Sec. School, Samain
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav
  aria-label="Primary navigation"
  className="ml-auto flex min-w-0 shrink items-center justify-end gap-0 overflow-hidden"
>
            {desktopLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <DesktopLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={active}
                />
              );
            })}

            {/* MORE */}

            <MoreButton
              open={desktopMoreOpen}
              setOpen={setDesktopMoreOpen}
              links={desktopMoreLinks}
              isActive={isActive}
            />

            {/* LOGIN */}

            <LoginButton active={isActive("/login")} />

            {/* APPLY */}

            <ApplyButton />
          </nav>
        </div>
      </header>

      {/* =====================================================
          TABLET HEADER
          768px - 1023px

          IMPORTANT:
          NO BOTTOM NAVBAR HERE
      ====================================================== */}

      <header className="sticky top-0 z-[100] hidden w-full border-b border-[#DDE5F0] bg-white/95 shadow-sm backdrop-blur-xl md:block lg:hidden">
        {/* TOP BAR */}

        <div className="bg-[#112649]">
          <div className="flex h-8 items-center justify-between px-5 text-[10px] text-white/80">
            <div className="flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="hover:text-[#F0B45A]"
              >
                +91-98765-43210
              </a>

              <a
                href="mailto:info@dnsaraswati.edu.in"
                className="hover:text-[#F0B45A]"
              >
                info@dnsaraswati.edu.in
              </a>
            </div>

            <span className="text-white/60">
              Since 1982
            </span>
          </div>
        </div>

        {/* TABLET MAIN NAV */}

        <div className="flex h-[68px] items-center gap-4 px-5">
          {/* LOGO */}

          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B3A6B] text-sm font-bold text-white">
              DN
            </div>

            <div>
              <div className="font-serif text-[15px] font-bold leading-tight text-[#1B3A6B]">
                DN Saraswati
              </div>

              <div className="text-[7px] font-semibold uppercase tracking-[0.1em] text-[#D4973E]">
                Sr. Sec. School, Samain
              </div>
            </div>
          </Link>

          {/* TABLET NAV */}

          <nav
            aria-label="Tablet navigation"
            className="ml-auto flex items-center gap-0.5"
          >
            {tabletLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <DesktopLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={active}
                  compact
                />
              );
            })}

            {/* TABLET MORE */}

            <MoreButton
              open={tabletMoreOpen}
              setOpen={setTabletMoreOpen}
              links={tabletMoreLinks}
              isActive={isActive}
              compact
            />

            {/* LOGIN OUTSIDE MORE */}

            <LoginButton
              active={isActive("/login")}
              compact
            />

            {/* APPLY OUTSIDE MORE */}

            <ApplyButton compact />
          </nav>
        </div>
      </header>

      {/* =====================================================
          MOBILE HEADER
          < 768px
      ====================================================== */}

      <header className="sticky top-0 z-[100] border-b border-[#DDE5F0] bg-white/95 shadow-sm backdrop-blur-xl md:hidden">
        <div className="flex h-[66px] items-center justify-between gap-2.5 px-3.5 sm:px-5">
          {/* LOGO */}

          <Link
            href="/"
            aria-label="DN Saraswati Sr. Sec. School, Samain"
            className="flex min-w-0 items-center gap-2"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1B3A6B] text-xs font-bold text-white shadow-sm sm:h-10 sm:w-10 sm:text-sm">
              DN
            </div>

            <div className="min-w-0">
              <div className="font-serif text-[14px] font-bold leading-tight text-[#1B3A6B] sm:text-[16px]">
                DN Saraswati
              </div>

              <div className="truncate text-[7px] font-semibold uppercase tracking-[0.09em] text-[#D4973E] sm:text-[8px] sm:tracking-[0.11em]">
                Sr. Sec. School, Samain
              </div>
            </div>
          </Link>

          {/* MOBILE ACTIONS */}

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* LOGIN */}

            <Link
              href="/login"
              className={`flex h-8 items-center justify-center rounded-lg border px-2.5 text-[10px] font-bold transition sm:h-9 sm:px-3 sm:text-[11px] ${
                isActive("/login")
                  ? "border-[#1B3A6B] bg-[#1B3A6B] text-white"
                  : "border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white"
              }`}
            >
              Login
            </Link>

            {/* APPLY */}

            <Link
              href="/admissions"
              className="flex h-8 items-center justify-center rounded-lg bg-[#D4973E] px-2.5 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#C58732] sm:h-9 sm:px-3.5 sm:text-[11px]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MORE OVERLAY
          < 768px ONLY
      ====================================================== */}

      {mobileMoreOpen && (
        <>
          {/* OVERLAY */}

          <button
            type="button"
            aria-label="Close More menu"
            onClick={() => setMobileMoreOpen(false)}
            className="fixed inset-0 z-[110] bg-[#112649]/35 backdrop-blur-[2px] md:hidden"
          />

          {/* PANEL */}

          <div className="fixed inset-x-0 bottom-[68px] z-[120] max-h-[calc(100vh-140px)] overflow-y-auto rounded-t-[24px] border-t border-[#DDE5F0] bg-white px-4 pb-5 pt-3 shadow-[0_-15px_45px_rgba(15,36,71,0.18)] md:hidden">
            {/* HANDLE */}

            <div className="mx-auto mb-4 h-1.5 w-11 rounded-full bg-[#CBD5E1]" />

            {/* HEADER */}

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D4973E]">
                  DN Saraswati
                </p>

                <h2 className="font-serif text-xl font-bold text-[#1B3A6B]">
                  School Menu
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setMobileMoreOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F7FB] text-xl text-[#64748B]"
              >
                ×
              </button>
            </div>

            {/* MENU CARDS */}

            <div className="grid grid-cols-2 gap-2.5">
              {mobileMoreLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMoreOpen(false)}
                    className={`group flex min-h-[74px] flex-col items-center justify-center rounded-2xl border p-2.5 text-center transition-all duration-200 ${
                      active
                        ? "border-[#1B3A6B] bg-[#1B3A6B] text-white shadow-md"
                        : "border-[#E2E8F0] bg-[#F8FAFC] text-[#1B3A6B] hover:border-[#D4973E]/40 hover:bg-[#FFF9EF]"
                    }`}
                  >
                    <span
                      className={`mb-1.5 flex h-8 w-8 items-center justify-center rounded-xl text-base ${
                        active
                          ? "bg-white/15"
                          : "bg-white shadow-sm"
                      }`}
                    >
                      {link.icon}
                    </span>

                    <span className="text-[10px] font-semibold leading-tight sm:text-[11px]">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* APPLY CTA */}

            <Link
              href="/admissions"
              onClick={() => setMobileMoreOpen(false)}
              className="mt-3 flex h-11 items-center justify-center rounded-xl bg-[#D4973E] text-sm font-bold text-white shadow-sm"
            >
              Apply for Admission
              <span className="ml-2">→</span>
            </Link>
          </div>
        </>
      )}

      {/* =====================================================
          MOBILE BOTTOM NAVBAR
          
          IMPORTANT:
          md:hidden = ONLY BELOW 768px
          
          768px+ => COMPLETELY HIDDEN
      ====================================================== */}

      <nav
        aria-label="Mobile navigation"
        className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#DDE5F0] bg-white/95 shadow-[0_-8px_25px_rgba(0,0,0,0.10)] backdrop-blur-xl md:hidden"
      >
        <div
          className="mx-auto grid h-[68px] max-w-[520px] grid-cols-5"
          style={{
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          {/* HOME */}

          <MobileNavItem
            href="/"
            label="Home"
            icon="⌂"
            active={isActive("/")}
          />

          {/* ADMISSION */}

          <MobileNavItem
            href="/admissions"
            label="Admission"
            icon="▣"
            active={isActive("/admissions")}
          />

          {/* APPLY */}

          <Link
            href="/admissions"
            className="relative flex flex-col items-center justify-center"
          >
            <span className="absolute -top-[18px] flex h-[48px] w-[48px] items-center justify-center rounded-full border-[4px] border-white bg-[#D4973E] text-xl text-white shadow-[0_5px_18px_rgba(212,151,62,0.35)]">
              ✦
            </span>

            <span className="mt-6 text-[10px] font-bold text-[#D4973E]">
              Apply
            </span>
          </Link>

          {/* EVENTS */}

          <MobileNavItem
            href="/#"
            label="Events"
            icon="◫"
            active={isActive("/#")}
          />

          {/* MORE */}

          <button
            type="button"
            aria-label="Open More menu"
            aria-expanded={mobileMoreOpen}
            onClick={() => setMobileMoreOpen((value) => !value)}
            className={`flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition-colors ${
              mobileMoreOpen
                ? "text-[#1B3A6B]"
                : "text-[#64748B]"
            }`}
          >
            <span
              aria-hidden="true"
              className={`flex h-6 w-6 items-center justify-center text-[19px] leading-none transition-transform duration-200 ${
                mobileMoreOpen ? "rotate-90" : ""
              }`}
            >
              ☰
            </span>

            <span>More</span>
          </button>
        </div>
      </nav>
    </>
  );
}

/* =============================================================
   DESKTOP / TABLET LINK
============================================================= */

function DesktopLink({
  href,
  label,
  active,
  compact = false,
}: {
  href: string;
  label: string;
  active: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`shrink-0 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 ${
  compact
    ? "px-2 py-2 text-[11px]"
    : "px-2 py-2 text-[12px] xl:px-2.5 xl:text-[12px]"
} ${
        active
          ? "bg-[#1B3A6B] text-white shadow-sm"
          : "text-[#334155] hover:bg-[#F4F7FB] hover:text-[#1B3A6B]"
      }`}
    >
      {label}
    </Link>
  );
}

/* =============================================================
   MORE BUTTON
============================================================= */

function MoreButton({
  open,
  setOpen,
  links,
  isActive,
  compact = false,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: {
    label: string;
    href: string;
    icon: string;
  }[];
  isActive: (href: string) => boolean;
  compact?: boolean;
}) {
  return (
    <div className="relative ml-0.5">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1 whitespace-nowrap rounded-lg font-semibold transition-all ${
          compact
            ? "px-2 py-2 text-[11px]"
            : "px-2.5 py-2 text-[12px] xl:px-3 xl:text-[13px]"
        } ${
          open
            ? "bg-[#F4F7FB] text-[#1B3A6B]"
            : "text-[#334155] hover:bg-[#F4F7FB] hover:text-[#1B3A6B]"
        }`}
      >
        More

        <span
          className={`text-[9px] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute right-0 top-full mt-2 overflow-hidden rounded-2xl border border-[#DDE5F0] bg-white p-2 shadow-[0_15px_40px_rgba(15,36,71,0.15)] ${
            compact ? "w-[250px]" : "w-[225px]"
          }`}
        >
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-[#1B3A6B] text-white"
                    : "text-[#334155] hover:bg-[#F4F7FB] hover:text-[#1B3A6B]"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    active
                      ? "bg-white/10"
                      : "bg-[#F4F7FB]"
                  }`}
                >
                  {link.icon}
                </span>

                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* =============================================================
   LOGIN
============================================================= */

function LoginButton({
  active,
  compact = false,
}: {
  active: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/login"
      className={`ml-1 shrink-0 whitespace-nowrap rounded-lg border font-bold transition-all ${
        compact
          ? "px-2.5 py-2 text-[11px]"
          : "px-3 py-2 text-[12px] xl:px-3.5 xl:text-[13px]"
      } ${
        active
          ? "border-[#1B3A6B] bg-[#1B3A6B] text-white"
          : "border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white"
      }`}
    >
      Login
    </Link>
  );
}

/* =============================================================
   APPLY
============================================================= */

function ApplyButton({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <Link
      href="/admissions"
      className={`ml-1 shrink-0 whitespace-nowrap rounded-lg bg-[#D4973E] font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#C58732] hover:shadow-md ${
        compact
          ? "px-3 py-2 text-[11px]"
          : "px-3.5 py-2 text-[12px] xl:px-4 xl:text-[13px]"
      }`}
    >
      Apply Now
    </Link>
  );
}

/* =============================================================
   MOBILE NAV ITEM
============================================================= */

function MobileNavItem({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex flex-col items-center justify-center gap-1 text-[10px] font-semibold transition-colors ${
        active
          ? "text-[#1B3A6B]"
          : "text-[#64748B]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`text-[20px] leading-none transition-transform ${
          active ? "scale-110" : ""
        }`}
      >
        {icon}
      </span>

      <span>{label}</span>
    </Link>
  );
}