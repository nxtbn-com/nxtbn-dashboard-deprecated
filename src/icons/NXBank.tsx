import React from "react";

const NXBank = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: className ? undefined : "black" }}
    >
      <g clipPath="url(#clip0_4287_3038)">
        <path
          d="M12.91 5.50012H1.09C0.530005 5.50012 0.290005 4.89012 0.730005 4.60012L6.64 0.730116C6.74912 0.665928 6.87341 0.63208 7 0.63208C7.1266 0.63208 7.25089 0.665928 7.36 0.730116L13.27 4.60012C13.71 4.89012 13.47 5.50012 12.91 5.50012Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 11H1C0.723858 11 0.5 11.2239 0.5 11.5V13C0.5 13.2761 0.723858 13.5 1 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V11.5C13.5 11.2239 13.2761 11 13 11Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 5.5V11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33331 5.5V11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66669 5.5V11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5.5V11"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4287_3038">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NXBank;
