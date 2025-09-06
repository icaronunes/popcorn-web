import Image from 'next/image';
export function PopcornIcon({ className }: { className?: string }) {
  console.log('process.env.PUBLIC_URL :>> ', process.env.PUBLIC_URL);
  return (
    <div>
      <Image src={`${process.env.PUBLIC_URL}/icon_visto.png`} alt="Popcorn Icon" width={50} height={50} className={className} />
    </div>
  );
}
