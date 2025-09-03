import { Header } from './header';
import { HeroSection } from './hero-section';
import { VisualShowcase } from './visual-showcase';
import { Footer } from './footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <VisualShowcase />
      </main>
      <Footer />
    </div>
  );
}
