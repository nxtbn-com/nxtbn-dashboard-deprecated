function NXChart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.14286 9.00143V14.7182"
        stroke="#A1A1A1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0317 6.26595V14.7182"
        stroke="#A1A1A1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8571 12.0224V14.7182"
        stroke="#A1A1A1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9048 2.16667H6.09523C3.37301 2.16667 1.66666 4.09341 1.66666 6.82097V14.179C1.66666 16.9066 3.36507 18.8333 6.09523 18.8333H13.9048C16.6349 18.8333 18.3333 16.9066 18.3333 14.179V6.82097C18.3333 4.09341 16.6349 2.16667 13.9048 2.16667Z"
        stroke="#A1A1A1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NXChart;
