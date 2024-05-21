import { ReactNode } from "react";
import { Footer, Header, Sidebar } from "../components";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-w-screen">
      {/* sidebar element */}
      <Sidebar />
      {/* body element */}
      <div className="w-full">
        {/* header element */}
        <Header />
        {/* content element */}
        <main>{children}</main>
        {/* footer element */}
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
