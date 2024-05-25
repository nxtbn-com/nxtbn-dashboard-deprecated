function NXDownload({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M21.4286 21.4286C21.4286 21.8832 21.2479 22.3193 20.9264 22.6408C20.605 22.9622 20.1689 23.1429 19.7143 23.1429H4.2857C3.83103 23.1429 3.39501 22.9622 3.07351 22.6408C2.75203 22.3193 2.57141 21.8832 2.57141 21.4286V2.57146C2.57141 2.1168 2.75203 1.68077 3.07351 1.35928C3.39501 1.03779 3.83103 0.857178 4.2857 0.857178H15.4286L21.4286 6.85718V21.4286Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4286 13.7144L12 17.1429L8.57141 13.7144"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.1429V7.71436"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NXDownload;
