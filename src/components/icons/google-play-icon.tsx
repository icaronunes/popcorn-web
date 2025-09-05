import Image from 'next/image';

export function GooglePlayIcon({ className }: { className?: string }) {
  return (
      <Image src={`${process.env.NODE_ENV === 'production' ? `popcorn-web/google_play.webp` : '/google_play.webp'}`} alt="Google Play Icon" className={className} height={50} width={200} />
  );
}
