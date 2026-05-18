import HeroWork from "../components/all/HeroWork";
import Projects from "../components/all/Projects";
import LetsTalk from "../components/all/LetsTalk";
import Footer from "../components/all/Footer";

export default function OurWorkPage() {
  return (
    <div className="w-full relative">
      <HeroWork />
      <Projects />
      <LetsTalk />
      <Footer />
    </div>
  );
}
