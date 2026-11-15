// Line icon per the brand guide: 1.5px stroke, square caps, mitred joins.
export function Icon({ d, className }: { d: string; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className ?? "h-5 w-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="miter"
      strokeLinecap="square"
    >
      <path d={d} />
    </svg>
  );
}
