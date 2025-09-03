import Image from 'next/image';
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollReveal } from './scroll-reveal';

const actors = [
  {
    name: 'Chris Hemsworth',
    role: 'Thor',
    image: 'https://picsum.photos/300/400?random=1',
    hint: 'actor portrait',
  },
  {
    name: 'Scarlett Johansson',
    role: 'Black Widow',
    image: 'https://picsum.photos/300/400?random=2',
    hint: 'actor portrait',
  },
  {
    name: 'Robert Downey Jr.',
    role: 'Iron Man',
    image: 'https://picsum.photos/300/400?random=3',
    hint: 'actor portrait',
  },
  {
    name: 'Zendaya',
    role: 'Chani',
    image: 'https://picsum.photos/300/400?random=4',
    hint: 'actor portrait',
  },
  {
    name: 'Timothée Chalamet',
    role: 'Paul Atreides',
    image: 'https://picsum.photos/300/400?random=5',
    hint: 'actor portrait',
  },
  {
    name: 'Margot Robbie',
    role: 'Barbie',
    image: 'https://picsum.photos/300/400?random=6',
    hint: 'actor portrait',
  },
];

export function ActorsSection() {
  return (
    <ScrollReveal>
      <section id="actors" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex bg-primary/10 text-primary p-2 rounded-lg mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Talented Actors
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Meet the stars who bring your favorite characters to life. Explore their filmographies and discover new talent.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 mt-12">
            {actors.map((actor) => (
              <div key={actor.name} className="text-center group">
                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={actor.image}
                    alt={actor.name}
                    fill
                    className="object-cover"
                    data-ai-hint={actor.hint}
                  />
                </div>
                <h3 className="font-semibold mt-4">{actor.name}</h3>
                <p className="text-sm text-muted-foreground">{actor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
