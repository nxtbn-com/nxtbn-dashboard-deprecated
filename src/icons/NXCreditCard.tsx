import React from "react";

const NXCreditCard = ({ className }: { className?: string }) => {
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
      <path
        d="M12.5 2.25H1.5C0.947715 2.25 0.5 2.69772 0.5 3.25V10.75C0.5 11.3023 0.947715 11.75 1.5 11.75H12.5C13.0523 11.75 13.5 11.3023 13.5 10.75V3.25C13.5 2.69772 13.0523 2.25 12.5 2.25Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.5 5.75H13.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.25H11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NXCreditCard;
