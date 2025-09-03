import type { SVGProps } from 'react';

export function PopcornIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2" />
      <path d="M6 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
      <path d="m10 8 2 14" />
      <path d="m14 8-2 14" />
      <path d="m10 22 4-10" />
      <path d="M12 8a4.5 4.5 0 0 0 4.5-4.5 2.5 2.5 0 0 0-2-2.3A2.5 2.5 0 0 0 12 3.5a2.5 2.5 0 0 0-2.5-2.3 2.5 2.5 0 0 0-2 2.3A4.5 4.5 0 0 0 12 8Z" />
      <path d="M18 11.5a2.5 2.5 0 0 1 0-5" />
      <path d="M6 11.5a2.5 2.5 0 0 0 0-5" />
    </svg>
  );
}
