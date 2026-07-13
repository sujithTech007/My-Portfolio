import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EducationExperience from "@/components/EducationExperience";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <EducationExperience />
      <SelectedWork />
      <Contact />
      <Footer />
    </main>
  );
}
