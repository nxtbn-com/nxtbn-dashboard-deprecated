import { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Sidebar } from "../components";
import { NXLeftArrow } from "../icons";

function RootLayout({ children }: { children?: ReactNode }) {
  // Make children optional
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSideBar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex w-screen relative h-screen overflow-x-hidden bg-secondary-100">
      {/* sidebar element */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* desktop screen sidebar collapse button */}
      <button
        className={` ${
          !sidebarOpen
            ? "hidden ml:block ml:fixed ml:z-[100] left-[14.5%] top-8"
            : "hidden"
        } text-base-300 font-bold bg-white shadow-sm border border-[#EEEFF2] w-7 aspect-square rounded-full p-1`}
        onClick={toggleSideBar}
      >
        <NXLeftArrow />
      </button>
      {/* body element */}
      <div className="w-full">
        {/* header element */}
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        {/* content element */}
        <>
          {children}
          <Outlet /> {/* This will render the nested routes */}
        </>
        {/* footer element */}
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
