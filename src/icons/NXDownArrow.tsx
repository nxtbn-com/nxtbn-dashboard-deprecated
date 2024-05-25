function NXDownArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      // width="36"
      // height="36"
      viewBox="0 0 24 24" // Increase the viewBox size to scale the icon
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M6 9L12 15L18 9"
        strokeWidth="2" // Increase the strokeWidth for a thicker icon
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NXDownArrow;
