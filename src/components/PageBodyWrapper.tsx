import React, { ReactNode } from "react";

interface PageBodyWrapperProps {
  children: ReactNode;
}

const PageBodyWrapper: React.FC<PageBodyWrapperProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col p-[5%] md:p-10">
      <div className="bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default PageBodyWrapper;
