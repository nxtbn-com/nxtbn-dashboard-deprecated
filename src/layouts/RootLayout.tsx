import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Sidebar } from "../components";

function RootLayout({ children }: { children?: ReactNode }) { // Make children optional
  return (
    <div className="flex min-w-screen">
      {/* sidebar element */}
      <Sidebar />
      {/* body element */}
      <div className="w-full">
        {/* header element */}
        <Header />
        {/* content element */}
        <main>
          {children}
          <Outlet /> {/* This will render the nested routes */}
        </main>
        {/* footer element */}
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
