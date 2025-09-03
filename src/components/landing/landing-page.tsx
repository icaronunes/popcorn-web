import { Header } from './header';
import { HeroSection } from './hero-section';
import { VisualShowcase } from './visual-showcase';
import { MoviesSection } from './movies-section';
import { SeriesSection } from './series-section';
import { ActorsSection } from './actors-section';
import { ProductionSection } from './production-section';
import { Footer } from './footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <VisualShowcase />
        <MoviesSection />
        <SeriesSection />
        <ActorsSection />
        <ProductionSection />
      </main>
      <Footer />
    </div>
  );
}
