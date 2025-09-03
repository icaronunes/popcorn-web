import Image from 'next/image';
import { Tv } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';

const series = [
  {
    title: 'Game of Thrones',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    image: 'https://picsum.photos/400/225?random=4',
    hint: 'tv series',
  },
  {
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    image: 'https://picsum.photos/400/225?random=5',
    hint: 'tv series',
  },
  {
    title: 'The Office',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
    image: 'https://picsum.photos/400/225?random=6',
    hint: 'tv series',
  },
];

export function SeriesSection() {
  return (
    <ScrollReveal>
      <section id="series" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex bg-primary/10 text-primary p-2 rounded-lg mb-4">
              <Tv className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Binge-Worthy Series
            </h2>
            <p className="text-muted-foreground md:text-lg">
              From gripping dramas to laugh-out-loud comedies, dive into series that will have you hooked from the first episode.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {series.map((show) => (
              <Card key={show.title} className="overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={show.image}
                      alt={show.title}
                      fill
                      className="object-cover"
                      data-ai-hint={show.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2">{show.title}</CardTitle>
                  <CardDescription>{show.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
