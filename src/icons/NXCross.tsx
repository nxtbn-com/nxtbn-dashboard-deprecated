
const NXCross = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <g clipPath="url(#clip0_4284_2628)">
        <path
          d="M23 1L1 23"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1L23 23"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4284_2628">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NXCross;