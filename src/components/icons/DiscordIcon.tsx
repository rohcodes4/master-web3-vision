import { SVGProps } from 'react';

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8.12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M15.88 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <path d="M9 17c.89.57 2.02.98 3 1 .98-.02 2.11-.43 3-1" />
    <path d="M18.8 17.4c.68-.92 1.2-1.97 1.2-3.4 0-4-3.13-8-7-8-.74 0-1.51.16-2.2.44" />
    <path d="M5.2 17.4c-.68-.92-1.2-1.97-1.2-3.4 0-4 3.13-8 7-8 .74 0 1.51.16 2.2.44" />
    <path d="M7 15s.55 2 1.5 3c1.5 1.5 4.5 1 5.5 0 .95-1 1.5-3 1.5-3" />
    <path d="M17 15s-.55 2-1.5 3c-1.5 1.5-4.5 1-5.5 0-.95-1-1.5-3-1.5-3" />
  </svg>
);

export default DiscordIcon;
