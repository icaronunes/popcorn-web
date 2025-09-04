"use client";
import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { useEffect, useState } from "react";

type Feature = {
  src: string;
  srcLarge: string;
  alt: string;
  hint: string;
  label: string;
};

const PhoneMockup = ({ feature }: { feature: Feature[] }) => {
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const imagesToLoad = feature.length;

    feature.forEach((f) => {
      const img = new window.Image();
      img.src = f.src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad) {
          setImagesLoaded(true);
        }
      };
    });
  }, [feature]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (imagesLoaded) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % feature.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [imagesLoaded, feature.length]);

  return (
    <div className="relative w-full max-w-xs text-center">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[540px] w-[270px] shadow-xl">
        <div className="w-[125px] h-[15px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[40px] w-[3px] bg-gray-800 absolute -start-[13px] top-[100px] rounded-s-lg"></div>
        <div className="h-[40px] w-[3px] bg-gray-800 absolute -start-[13px] top-[158px] rounded-s-lg"></div>
        <div className="h-[55px] w-[3px] bg-gray-800 absolute -end-[13px] top-[120px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[250px] h-[520px] bg-white dark:bg-gray-800 relative">
          {feature.map((f, index) => (
            <Image
              key={`${f.src}-${index}`}
              src={f.src}
              className={`absolute top-0 left-0 object-cover w-full h-auto animate-scroll-vertical transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              width={250}
              height={800}
              loading="eager"
              quality={100}
              alt={f.alt}
              data-ai-hint={f.hint}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-lg font-medium">{feature[current].label}</p>
    </div>
  );
};


const features: Feature[][] = [
  [
    {
      label: "Acompanhando",
      src: "/segue.webp",
      srcLarge: "/segue-large.webp",
      alt: "App screenshot 1",
      hint: "app screen tracking",
    },
    {
      label: "Acompanhando",
      src: "/segue.webp",
      srcLarge: "/segue-large.webp",
      alt: "App screenshot 2",
      hint: "app screen series",
    },
  ],
  [
    {
      label: "Series",
      src: "/serie.webp",
      srcLarge: "/serie-large.webp",
      alt: "App screenshot 3",
      hint: "app screen series",
    },
    {
      label: "Series",
      src: "/segue.webp",
      srcLarge: "/segue-large.webp",
      alt: "App screenshot 4",
      hint: "app screen tracking",
    },
  ],
  [
    {
      label: "Filmes",
      src: "/movie.webp",
      srcLarge: "/movie-large.webp",
      alt: "App screenshot 5",
      hint: "app screen movie",
    },
    {
      label: "Filmes",
      src: "/movie-large.webp",
      srcLarge: "/movie-large.webp",
      alt: "App screenshot 6",
      hint: "app screen series",
    },
  ],
  [
    {
      label: "Pessoas",
      src: "/person.webp",
      srcLarge: "/movie-large.png",
      alt: "App screenshot 7",
      hint: "app screen person",
    },
    {
      label: "Pessoas",
      src: "/person-large.webp",
      srcLarge: "/movie-large.png",
      alt: "App screenshot 8",
      hint: "app screen series",
    },
  ],
];

export function VisualShowcase() {
  return (
    <ScrollReveal>
      <section
        id="features"
        className="relative py-16 sm:py-10 bg-secondary/30"
      >
        <Image
          src="/background-oscar.webp"
          alt="background image oscar"
          fill
          className="object-cover opacity-40"
          data-ai-hint="app showcase"
        />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Aplicativo PopCorn Show
            </h2>
            <p className="text-black-700 md:text-lg">
              Explore as funcionalidades do nosso aplicativo
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {features.map((feature, index) => (
              <PhoneMockup key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
