import Image from 'next/image';
import { Film } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';

const movies = [
  {
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    image: 'https://picsum.photos/400/225?random=1',
    hint: 'movie poster',
  },
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    image: 'https://picsum.photos/400/225?random=2',
    hint: 'movie poster',
  },
  {
    title: 'The Grand Budapest Hotel',
    description: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars.',
    image: 'https://picsum.photos/400/225?random=3',
    hint: 'movie poster',
  },
];

export function MoviesSection() {
  return (
    <ScrollReveal>
      <section id="movies" className="py-16 sm:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
             <div className="inline-flex bg-primary/10 text-primary p-2 rounded-lg mb-4">
                <Film className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Featured Movies
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Explore a vast library of films, from timeless classics to the latest blockbusters. Find your next favorite movie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {movies.map((movie) => (
              <Card key={movie.title} className="overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      data-ai-hint={movie.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2">{movie.title}</CardTitle>
                  <CardDescription>{movie.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
