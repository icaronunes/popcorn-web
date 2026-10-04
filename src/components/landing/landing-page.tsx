import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { VisualShowcase } from "./visual-showcase";
import { Footer } from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { PopCornCinema } from "./popcorn-cinema";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <SpeedInsights />
      <Analytics />
      <Header />
      <main className="flex-grow">
        <VisualShowcase />
        <PopCornCinema />
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
