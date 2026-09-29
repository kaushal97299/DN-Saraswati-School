import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import SchoolStats from "./components/SchoolStats";
import HomeState from "./components/HomeStats";
import NoticeBoard from "./components/NoticeBoard";
import EventSection from "./components/EventsSection";
import NewsSection from "./components/NewsSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import AdmissionCTA from "./components/AdmissionCTA";
import PrincipalMessage from "./components/PrincipalMessage";
import AcademicsSection from "./components/AcademicsSection";
import FacilitiesSection from "./components/FacilitiesSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        {/* <SchoolStats /> */}
        <NoticeBoard />
        <HomeState />
        <PrincipalMessage />
        <AcademicsSection />
        <FacilitiesSection />
        <EventSection />
        <NewsSection />
        <GallerySection />
        <TestimonialsSection />
        <AdmissionCTA />
      </main>

      <Footer />
    </>
  );
}