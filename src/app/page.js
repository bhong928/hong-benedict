import AboutSection from "@/components/AboutSection/page";
import Experience from "@/components/Experience/page";
import HeroSection from "@/components/HeroSection/page";
import Education from "@/components/Education/page";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <Experience/>
      <Education/>
    </main>
  )
}