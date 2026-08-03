import HeroSection           from "@/components/HeroSection";
import StackMarquee          from "@/components/StackMarquee";
import StatsBar              from "@/components/StatsBar";
import AboutSection          from "@/components/AboutSection";
import ProjectsSection       from "@/components/ProjectsSection";
import SkillsSection         from "@/components/SkillsSection";
import EducationSection      from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ResumeSection         from "@/components/ResumeSection";
import ContactSection        from "@/components/ContactSection";
import Footer                from "@/components/Footer";
import SectionDivider        from "@/components/SectionDivider";
import FloatingIndicator     from "@/components/FloatingIndicator";

export default function Home() {
  return (
    <>
      <FloatingIndicator />
      <HeroSection />
      <StackMarquee />
      <StatsBar />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <CertificationsSection />
      <SectionDivider />
      <ResumeSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </>
  );
}
