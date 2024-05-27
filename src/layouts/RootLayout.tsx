import { ReactNode } from "react";
import { Footer, Header, Sidebar } from "../components";
import { useLocation } from "react-router-dom";

function RootLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex min-w-screen">

      {!isLoginPage && <Sidebar />}
      {/* body element */}
      <div className="w-full">

        {!isLoginPage && <Header />}
        {/* content element */}
        <main>{children}</main>
        {/* footer element */}
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
