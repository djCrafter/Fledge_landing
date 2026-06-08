export default function Mark({ className }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 72 51 62" />
      <path d="M21 58 65 44" />
      <path d="M21 44 79 25" />
    </svg>
  );
}
