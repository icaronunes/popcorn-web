import { Button } from '@/components/ui/button';
import { GooglePlayIcon } from '@/components/icons/google-play-icon';

export function HeroSection() {
  return (
    <section className="relative bg-secondary/30">
        <div className="container mx-auto px-4 py-24 sm:py-32 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline leading-tight tracking-tighter">
                    Your Ultimate Movie and Series Companion
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover, track, and enjoy your favorite movies, series, actors, and production houses all in one place.
                </p>
                <div className="mt-10">
                    <Button size="lg" asChild className="shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <a href="#" >
                            <GooglePlayIcon className="h-6 w-6 mr-3" />
                            Get on Google Play
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
