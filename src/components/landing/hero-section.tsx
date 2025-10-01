"use client";
import { useLanguage } from "@/hooks/use-Language";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function HeroSection() {
  const isMobile = useIsMobile();
  const traducao = {
    en: {
      title: "Everything you love in one place",
      description:
        "Discover, track, and stay informed about movies, series, and stars",
    },
    pt: {
      title: "Tudo que você ama em um só lugar",
      description:
        "Descubra, acompanhe e se informe sobre filmes, séries e as estrelas",
    },
  };

  const langague = useLanguage() == "pt" ? traducao["pt"] : traducao["en"];
  const quality = isMobile ? 40 : 100;
  return (
    <section className="relative bg-secondary/30">
      <Image
        src="/background-large.webp"
        alt="Background image of a movie theater"
        fill={true}
        loading="lazy"
        placeholder="blur"
        quality={quality}
        blurDataURL="popcorn.webp"
        className="object-cover opacity-79"
        data-ai-hint="movie theater"
      />
      <div className="relative container mx-auto px-4 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline leading-tight tracking-tighter">
            {langague.title}
          </h1>
          <p className="mt-10 text-lg md:text-xl text-muted max-w-2xl mx-auto">
            {langague.description}
          </p>
        </div>
      </div>
    </section>
  );
}
