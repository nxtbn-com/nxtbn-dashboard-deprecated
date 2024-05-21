function NXMessageActive({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="white" />
      <g clipPath="url(#clip0_4165_108)">
        <path
          d="M33.0714 19.25H18.9286C18.2185 19.25 17.6429 19.8256 17.6429 20.5357V31.4643C17.6429 32.1744 18.2185 32.75 18.9286 32.75H33.0714C33.7815 32.75 34.3571 32.1744 34.3571 31.4643V20.5357C34.3571 19.8256 33.7815 19.25 33.0714 19.25Z"
          stroke="#333F48"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.6429 20.8571L25.1771 25.3883C25.4082 25.5239 25.6993 25.5982 26 25.5982C26.3007 25.5982 26.5918 25.5239 26.8229 25.3883L34.3571 20.8571"
          stroke="#333F48"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <circle
        cx="32"
        cy="18"
        r="4.75"
        fill="#FD6A6A"
        stroke="white"
        strokeWidth="1.5"
      />
      <defs>
        <clipPath id="clip0_4165_108">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(17 17)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NXMessageActive;
