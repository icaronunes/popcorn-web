import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-secondary/30">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Background image of a movie theater"
        fill
        className="object-cover opacity-50"
        data-ai-hint="movie theater"
      />
      <div className="relative container mx-auto px-4 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline leading-tight tracking-tighter">
            Acompanhe tudo que você ama em um só lugar
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra, acompanhe e curta seus filmes, séries e produções, tudo em
            um só lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
