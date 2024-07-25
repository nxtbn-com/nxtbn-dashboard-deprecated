import React, { ReactNode } from "react";

interface PageBodyWrapperProps {
  children: ReactNode;
  bgClass?: string;
}

const PageBodyWrapper: React.FC<PageBodyWrapperProps> = ({ children, bgClass = "bg-white" }) => {
  return (
    <div className="w-full flex flex-col p-[5%] md:p-10">
      <div className={`${bgClass} rounded-lg`}>
        {children}
      </div>
    </div>
  );
};

export default PageBodyWrapper;
