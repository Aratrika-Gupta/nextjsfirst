import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import OurExhibitions from "@/components/OurExhibitions";
import Testimonials from "@/components/Testimonials";
import Webinars from "@/components/UpcomingWeb";
import Artist from "@/components/Artists";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <Featured />
      <OurExhibitions />
      <Testimonials />
      <Webinars />
      <Artist />
      <Footer />
    </main>
  );
}
