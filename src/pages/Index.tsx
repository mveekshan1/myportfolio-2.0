import NetworkBackground from "@/components/NetworkBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Background (must stay behind everything) */}
      <NetworkBackground />

      {/* Foreground content */}
      <div className="relative z-10">
        <Navigation />

        <main className="relative">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
