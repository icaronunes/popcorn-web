import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PopcornIcon } from '@/components/icons/popcorn-icon';
import { GooglePlayIcon } from '@/components/icons/google-play-icon';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="#" className="flex items-center gap-2 font-bold font-headline">
          <PopcornIcon className="h-7 w-7 text-primary" />
          <span className="text-xl">PopCorn Show</span>
        </Link>
        <nav className="ml-10 hidden md:flex items-center space-x-6 text-sm font-medium">
          
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <Button asChild>
            <a href="#">
              <GooglePlayIcon className="w-5 h-5 mr-2" />
              Download
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
