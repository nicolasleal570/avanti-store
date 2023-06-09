interface GemIconProps {
  className: string;
}

export function GemIcon({ className }: GemIconProps) {
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
      className={className}
    >
      <polygon points="6 3 18 3 22 9 12 22 2 9"></polygon>
      <path d="m12 22 4-13-3-6"></path>
      <path d="M12 22 8 9l3-6"></path>
      <path d="M2 9h20"></path>
    </svg>
  );
}
