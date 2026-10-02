"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
};

type GalleryVideo = {
  id: number;
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
};

const categories = [
  "All",
  "Campus",
  "Academics",
  "Events",
  "Sports",
  "Activities",
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/gallery-01.jpg",
    title: "School Campus",
    category: "Campus",
    description:
      "A glimpse of the DN Saraswati Sr. Sec. School campus and its learning environment.",
  },
  {
    id: 2,
    src: "/gallery/gallery-02.jpg",
    title: "School Building",
    category: "Campus",
    description:
      "Our school building reflects a welcoming and disciplined environment for students.",
  },
  {
    id: 3,
    src: "/gallery/gallery-03.jpg",
    title: "Classroom Activities",
    category: "Academics",
    description:
      "Students participating in classroom learning and academic activities.",
  },
  {
    id: 4,
    src: "/gallery/gallery-04.jpg",
    title: "Academic Activities",
    category: "Academics",
    description:
      "Academic activities designed to encourage learning, curiosity and participation.",
  },
  {
    id: 5,
    src: "/gallery/gallery-05.jpg",
    title: "School Event",
    category: "Events",
    description:
      "Students and teachers participating together in a memorable school event.",
  },
  {
    id: 6,
    src: "/gallery/gallery-06.jpg",
    title: "Annual Function",
    category: "Events",
    description:
      "A special moment from the school's cultural and annual celebrations.",
  },
  {
    id: 7,
    src: "/gallery/gallery-07.jpg",
    title: "Sports Activities",
    category: "Sports",
    description:
      "Students taking part in sports and physical activities on campus.",
  },
  {
    id: 8,
    src: "/gallery/gallery-08.jpg",
    title: "Sports Day",
    category: "Sports",
    description:
      "Memorable moments from sports day and student participation.",
  },
  {
    id: 9,
    src: "/gallery/gallery-09.jpg",
    title: "Student Activities",
    category: "Activities",
    description:
      "Students engaging in creative and co-curricular activities.",
  },
  {
    id: 10,
    src: "/gallery/gallery-10.jpg",
    title: "Cultural Activity",
    category: "Activities",
    description:
      "Students showcasing creativity through cultural and artistic activities.",
  },
  {
    id: 11,
    src: "/gallery/gallery-11.jpg",
    title: "School Life",
    category: "Campus",
    description:
      "A beautiful glimpse of everyday school life at DN Saraswati.",
  },
  {
    id: 12,
    src: "/gallery/gallery-12.jpg",
    title: "Student Life",
    category: "Activities",
    description:
      "Moments that capture student life, participation and school memories.",
  },
];

const galleryVideos: GalleryVideo[] = [
  {
    id: 1,
    thumbnail: "/gallery/video-01.jpg",
    title: "School Campus Tour",
    category: "Campus",
    description:
      "Take a virtual look around the school campus and its learning spaces.",
    videoUrl: "/gallery/videos/video-01.mp4",
  },
  {
    id: 2,
    thumbnail: "/gallery/video-02.jpg",
    title: "Annual Function",
    category: "Events",
    description:
      "Highlights from a memorable school celebration and student performances.",
    videoUrl: "/gallery/videos/video-02.mp4",
  },
  {
    id: 3,
    thumbnail: "/gallery/video-03.jpg",
    title: "Sports Activities",
    category: "Sports",
    description:
      "Highlights from sports activities and student participation.",
    videoUrl: "/gallery/videos/video-03.mp4",
  },
  {
    id: 4,
    thumbnail: "/gallery/video-04.jpg",
    title: "School Activities",
    category: "Activities",
    description:
      "A collection of moments from student activities and school life.",
    videoUrl: "/gallery/videos/video-04.mp4",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const [selectedVideo, setSelectedVideo] =
    useState<GalleryVideo | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === selectedCategory,
        );

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (selectedImage || selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedVideo]);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* =====================================================
            NAVBAR
        ====================================================== */}
        <Navbar />

        <main>
          {/* =====================================================
              HERO
          ====================================================== */}
          <section className="relative overflow-hidden bg-[#0F2447]">
            <div className="absolute inset-0">
              <Image
                src="/school-hero.jpeg"
                alt="DN Saraswati Sr. Sec. School campus"
                fill
                priority
                className="object-cover opacity-55"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0F2447]/95 via-[#1B3A6B]/75 to-[#0F2447]/35" />
            </div>

            <div className="relative mx-auto flex min-h-[320px] max-w-[1400px] items-center px-5 py-16 sm:min-h-[350px] sm:px-8 lg:min-h-[380px] lg:px-12">
              <div className="max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F0B45A] sm:text-sm">
                  DN Saraswati Sr. Sec. School, Samain
                </p>

                <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  School Gallery
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  Explore memorable moments from our campus, academics,
                  celebrations, sports and student activities.
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================
              IMAGE GALLERY INTRO
          ====================================================== */}
          <section className="bg-white py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  Images
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                  Memories & Moments
                </h2>

                <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-[15px]">
                  Click any image to view it in detail.
                </p>
              </div>

              {/* FILTERS */}
              <div className="mt-9 overflow-x-auto pb-2">
                <div className="flex min-w-max justify-center gap-2">
                  {categories.map((category) => {
                    const active = selectedCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                          active
                            ? "bg-[#1B3A6B] text-white shadow-md"
                            : "border border-[#DDE5F0] bg-white text-[#475569] hover:border-[#1B3A6B] hover:text-[#1B3A6B]"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              IMAGE GALLERY
          ====================================================== */}
          <section className="bg-[#F4F7FB] pb-16 sm:pb-20 lg:pb-24">
            <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {filteredImages.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className="group relative overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                        sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2447]/90 via-transparent to-transparent opacity-70" />

                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <span className="inline-flex rounded-full bg-[#D4973E] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:text-[10px]">
                          {image.category}
                        </span>

                        <h3 className="mt-2 font-serif text-base font-bold text-white sm:text-xl">
                          {image.title}
                        </h3>

                        <p className="mt-1 text-[10px] text-white/75 sm:text-xs">
                          Click to view details
                        </p>
                      </div>

                      <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1B3A6B] opacity-0 shadow-md transition group-hover:opacity-100">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              VIDEO GALLERY
          ====================================================== */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-12">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4973E] sm:text-sm">
                  Videos
                </p>

                <h2 className="mt-3 font-serif text-3xl font-bold text-[#1B3A6B] sm:text-4xl lg:text-5xl">
                  Video Gallery
                </h2>

                <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[#D4973E]" />

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#64748B] sm:text-[15px]">
                  Watch videos and memorable moments from DN Saraswati Sr.
                  Sec. School.
                </p>
              </div>

              {/* VIDEO CARDS */}
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {galleryVideos.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setSelectedVideo(video)}
                    className="group overflow-hidden rounded-2xl border border-[#DDE5F0] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-video overflow-hidden bg-[#0F2447]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      />

                      <div className="absolute inset-0 bg-[#0F2447]/35 transition group-hover:bg-[#0F2447]/50" />

                      {/* PLAY BUTTON */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4973E] text-white shadow-xl transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                          <svg
                            className="ml-1"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4973E]">
                        {video.category}
                      </span>

                      <h3 className="mt-1 font-serif text-lg font-bold text-[#1B3A6B]">
                        {video.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#64748B]">
                        Click to watch video
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
              CTA
          ====================================================== */}
          <section className="bg-[#F4F7FB] py-14 sm:py-18 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
              <div className="relative overflow-hidden rounded-3xl bg-[#1B3A6B] px-6 py-10 text-center shadow-xl sm:px-10 sm:py-14 lg:px-16">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4973E]/10" />

                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/5" />

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F0B45A] sm:text-sm">
                    Explore More
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    Discover Our School
                  </h2>

                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
                    Learn more about our academics, facilities and student
                    opportunities.
                  </p>

                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href="/about"
                      className="rounded-xl bg-[#D4973E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#C58732]"
                    >
                      About School
                    </a>

                    <a
                      href="/facilities"
                      className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >
                      View Facilities
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* =========================================================
          IMAGE POPUP
      ========================================================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* IMAGE */}
            <div className="relative h-[280px] w-full bg-[#0F2447] sm:h-[560px] sm:w-[62%]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 639px) 100vw, 62vw"
              />
            </div>

            {/* DETAILS */}
            <div className="flex w-full flex-col justify-center overflow-y-auto p-6 sm:w-[38%] sm:p-8">
              <span className="w-fit rounded-full bg-[#F4F7FB] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D4973E]">
                {selectedImage.category}
              </span>

              <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-[#1B3A6B] sm:text-3xl">
                {selectedImage.title}
              </h2>

              <div className="mt-4 h-1 w-12 rounded-full bg-[#D4973E]" />

              <p className="mt-5 text-sm leading-7 text-[#64748B]">
                {selectedImage.description}
              </p>

              <div className="mt-7 rounded-2xl bg-[#F4F7FB] p-4">
                <p className="text-xs font-semibold text-[#1B3A6B]">
                  DN Saraswati Sr. Sec. School
                </p>

                <p className="mt-1 text-xs leading-5 text-[#64748B]">
                  Samain, Haryana
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          VIDEO POPUP
      ========================================================== */}
      {/* =========================================================
    VIDEO POPUP
========================================================= */}
{selectedVideo && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
    onClick={() => setSelectedVideo(null)}
  >
    <div
      className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      {/* CLOSE BUTTON */}
      <button
        type="button"
        onClick={() => setSelectedVideo(null)}
        aria-label="Close video"
        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white transition hover:bg-black/85"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {/* VIDEO */}
      <div className="relative aspect-video w-full bg-black">
        <video
          key={selectedVideo.videoUrl}
          src={selectedVideo.videoUrl}
          poster={selectedVideo.thumbnail}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain"
        />
      </div>

      {/* DETAILS */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#F4F7FB] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4973E]">
            {selectedVideo.category}
          </span>

          <span className="text-xs text-[#94A3B8]">
            DN Saraswati Sr. Sec. School
          </span>
        </div>

        <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#1B3A6B]">
          {selectedVideo.title}
        </h2>

        <div className="mt-3 h-1 w-10 rounded-full bg-[#D4973E]" />

        <p className="mt-4 text-sm leading-6 text-[#64748B]">
          {selectedVideo.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[#DDE5F0] pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8]">
              Location
            </p>

            <p className="mt-1 text-xs font-medium text-[#475569]">
              Samain, Haryana
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="rounded-lg bg-[#1B3A6B] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#112649]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
}