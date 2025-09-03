import { Header } from './header';
import { HeroSection } from './hero-section';
import { VisualShowcase } from './visual-showcase';
import { ProductionSection } from './production-section';
import { Footer } from './footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <VisualShowcase />
        <ProductionSection />
      </main>
      <Footer />
    </div>
  );
}
