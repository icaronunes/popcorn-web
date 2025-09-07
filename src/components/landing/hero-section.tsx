import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-secondary/30">
      <Image
        src="/background-large.webp"
        alt="Background image of a movie theater"
        fill={true}
        loading="lazy"
        className="object-cover opacity-79"
        data-ai-hint="movie theater"
      />
      <div className="relative container mx-auto px-4 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline leading-tight tracking-tighter">
            Acompanhe tudo que você ama em um só lugar
          </h1>
          <p className="mt-10 text-lg md:text-xl text-muted max-w-2xl mx-auto">
            Descubra, acompanhe e se informe sobre filmes, séries e as estrelas</p>
        </div>
      </div>
    </section>
  );
}
