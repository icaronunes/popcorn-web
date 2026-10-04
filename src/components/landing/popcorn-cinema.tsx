import Image from "next/image";
import Link from "next/link";
import { GooglePlayIcon } from "../icons/google-play-icon";

export function PopCornCinema() {
  return (
    <section className="bg-secondary/30 px-4 py-0 sm:py-20">
      <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-[#171923] text-white shadow-2xl md:grid-cols-[1.2fr_0.8fr]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 right-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
        />

        <div className="relative z-10 flex flex-col items-start justify-center p-8 sm:p-12 lg:p-16">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-primary"
            />
            Para quem vai ao Cinema
          </span>

          <h2 className="max-w-xl font-headline text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Seu próximo filme está no{" "}
            <span className="text-primary">PopCorn Cinema</span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Integramos o <span className="text-primary">PopCorn Cinema</span> em
            nosso <span className="text-blue-500">PopCorn Show</span>
          </p>
          <p className="mt-0 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Para que você possa ver os filmes em cartaz no cinema e ainda ter
            acesso a o nosso conteúdo
          </p>

          <Link
            href="https://play.google.com/store/apps/details?id=br.com.icaro.filme"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar PopCorn Cinema no Google Play"
            className="mt-0 inline-flex rounded-xl transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#171923]"
          >
            <GooglePlayIcon className="h-12 w-auto" />
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=br.com.icaro.filme"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar PopCorn Cinema no Google Play"
            className="mt-0 inline-flex rounded-xl transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#171923]"
          >
            <span className="mt-0 text-xs text-white/50">
              Disponível para Android
            </span>
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="relative flex min-h-56 items-center justify-center overflow-hidden px-8 pb-8 md:min-h-full md:px-4 md:py-10"
        >
          <div className="absolute h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />
          <div className="absolute h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />
          <div className="absolute right-[15%] top-[18%] h-3 w-3 rounded-full bg-accent shadow-[0_0_24px_8px_rgba(52,135,187,0.45)]" />
          <div className="absolute bottom-[18%] left-[18%] h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_8px_rgba(235,76,65,0.45)]" />
          <Image
            src="/ic_popcorn_cinema_small.webp"
            alt=""
            width={100}
            height={100}
            className="relative z-10 w-44 drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)] sm:w-56 md:w-52 lg:w-64"
          />
        </div>
      </div>
    </section>
  );
}
