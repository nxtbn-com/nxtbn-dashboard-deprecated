function NXCross({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <g clipPath="url(#clip0_4284_2628)">
        <path
          d="M13.5 0.5L0.5 13.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5 0.5L13.5 13.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4284_2628">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NXCross;
