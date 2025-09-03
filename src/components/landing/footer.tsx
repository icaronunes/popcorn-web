import { PopcornIcon } from '@/components/icons/popcorn-icon';
import { Twitter, Github, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-foreground mb-4 md:mb-0">
            <PopcornIcon className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg font-headline">PopCorn Show</span>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PopCorn Show. All rights reserved.
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
