import Hero from "./components/home/Hero";
import FeatureCards from "./components/home/FeatureCards";
import ResultsCarousel from "./components/home/ResultsCarousel";

export default function Page() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <ResultsCarousel />
    </main>
  );
}
