const COMMON = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const ICONS = {
  ecommerce: (
    <svg {...COMMON}>
      <path d="M6.4 8H17.6L18.8 20.5H5.2Z" />
      <path d="M9 8V6.6a3 3 0 0 1 6 0V8" />
    </svg>
  ),
  restaurants: (
    <svg {...COMMON}>
      <path d="M8.7 9V4l1.2-1 1.2 1 1.2-1 1.2 1V9" />
      <path d="M10 5.7H13.3M10 7.3H12.6" />
      <path d="M5 9H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <path d="M7.5 12.4H16.5M7.5 15.6H12.5" />
      <circle cx="16" cy="15.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  beauty: (
    <svg {...COMMON}>
      <circle cx="6" cy="6.2" r="2.7" />
      <circle cx="6" cy="17.8" r="2.7" />
      <path d="M20 4 8.1 15.9" />
      <path d="M14.5 14.5 20 20" />
      <path d="M8.1 8.1 12 12" />
    </svg>
  ),
  events: (
    <svg {...COMMON}>
      <path d="M6 6H10.4a1.6 1.6 0 0 0 3.2 0H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H13.6a1.6 1.6 0 0 0-3.2 0H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      <path d="M15.4 8.4V15.6" strokeDasharray="1.1 1.5" />
      <g fill="currentColor" stroke="none">
        <rect x="7" y="9.8" width="1.7" height="1.7" rx=".3" />
        <rect x="9.4" y="9.8" width="1.7" height="1.7" rx=".3" />
        <rect x="7" y="12.2" width="1.7" height="1.7" rx=".3" />
        <rect x="9.7" y="12.5" width="1" height="1" rx=".2" />
      </g>
    </svg>
  ),
  civic: (
    <svg {...COMMON}>
      <path d="M3.5 9.5 12 4 20.5 9.5" />
      <path d="M5 9.5V18M9.3 9.5V18M14.7 9.5V18M19 9.5V18" />
      <path d="M3 18H21" />
      <path d="M3 21H21" />
    </svg>
  ),
};

export default function DomainIcon({ name, className }) {
  const svg = ICONS[name];
  if (!svg) return null;
  return <span className={className}>{svg}</span>;
}
