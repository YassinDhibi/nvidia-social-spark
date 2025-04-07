
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import CaseStudies from "@/components/CaseStudies";
import MediaGallery from "@/components/MediaGallery";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Timeline />
        <CaseStudies />
        <MediaGallery />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
