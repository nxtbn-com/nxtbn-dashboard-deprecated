import React from "react";

const NXCash = ({ className }: { className?: string }) => {
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
      <g clipPath="url(#clip0_4287_3017)">
        <path
          d="M9.5 8.5C11.7091 8.5 13.5 6.70914 13.5 4.5C13.5 2.29086 11.7091 0.5 9.5 0.5C7.29086 0.5 5.5 2.29086 5.5 4.5C5.5 6.70914 7.29086 8.5 9.5 8.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 5.5V3.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5 11L2.94373 13.0364C3.30316 13.336 3.75623 13.5 4.2241 13.5H10.6667C11.1269 13.5 11.5 13.1269 11.5 12.6667C11.5 11.7462 10.7538 11 9.83333 11H5.35429"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 10L4.25 10.75C4.66421 11.1642 5.33579 11.1642 5.75 10.75C6.16421 10.3358 6.16421 9.66421 5.75 9.25L4.58579 8.08579C4.21071 7.71071 3.70201 7.5 3.17157 7.5H0.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4287_3017">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NXCash;
