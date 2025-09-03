import Image from 'next/image';
import { Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';

const productions = [
  {
    name: 'A24',
    info: 'Known for its distinctive and often unconventional films.',
    image: 'https://picsum.photos/400/300?random=1',
    hint: 'film studio',
  },
  {
    name: 'Legendary Entertainment',
    info: 'A leading film production company that co-produces and co-finances blockbuster films.',
    image: 'https://picsum.photos/400/300?random=2',
    hint: 'film studio',
  },
  {
    name: 'Studio Ghibli',
    info: 'A Japanese animation film studio renowned for its highly acclaimed animated feature films.',
    image: 'https://picsum.photos/400/300?random=3',
    hint: 'film studio',
  },
];

export function ProductionSection() {
  return (
    <ScrollReveal>
      <section id="production" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex bg-primary/10 text-primary p-2 rounded-lg mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Top Production Houses
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Follow the studios behind the magic. Get insights into their upcoming projects and iconic filmographies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {productions.map((studio) => (
              <Card key={studio.name} className="overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={studio.image}
                      alt={studio.name}
                      fill
                      className="object-cover"
                      data-ai-hint={studio.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2">{studio.name}</CardTitle>
                  <CardDescription>{studio.info}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
