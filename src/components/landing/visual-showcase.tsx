import Image from 'next/image';
import { ScrollReveal } from './scroll-reveal';

const PhoneMockup = ({ src, alt, hint }: { src: string; alt: string; hint: string }) => (
    <div className="relative w-full max-w-xs">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[540px] w-[270px] shadow-xl">
            <div className="w-[125px] h-[15px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[40px] w-[3px] bg-gray-800 absolute -start-[13px] top-[100px] rounded-s-lg"></div>
            <div className="h-[40px] w-[3px] bg-gray-800 absolute -start-[13px] top-[158px] rounded-s-lg"></div>
            <div className="h-[55px] w-[3px] bg-gray-800 absolute -end-[13px] top-[120px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[250px] h-[520px] bg-white dark:bg-gray-800">
                <Image
                    src={src}
                    className="object-cover w-full h-full"
                    width={250}
                    height={520}
                    alt={alt}
                    data-ai-hint={hint}
                />
            </div>
        </div>
    </div>
);

export function VisualShowcase() {
  return (
    <ScrollReveal>
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              A Glimpse Inside
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Experience a clean, intuitive, and beautifully designed interface that makes tracking your favorite entertainment a breeze.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <PhoneMockup src="https://picsum.photos/300/600?random=4" alt="App screenshot 1" hint="app screen" />
            <PhoneMockup src="https://picsum.photos/300/600?random=5" alt="App screenshot 2" hint="app screen" />
            <PhoneMockup src="https://picsum.photos/300/600?random=6" alt="App screenshot 3" hint="app screen" />
            <PhoneMockup src="https://picsum.photos/300/600?random=7" alt="App screenshot 4" hint="app screen" />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
