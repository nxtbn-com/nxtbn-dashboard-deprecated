import { Link } from "react-router-dom";

import LoginHeader from "./LoginHeader";
import LoginRightSide from "./LoginRightSide";
import LoginLeftSide from "./LoginLeftSide";

function LoginMain() {
  return (
    <main className="">
      <div className="z-20 absolute top-0 right-[5%]">
        <LoginHeader />
      </div>

      <div className="grid gap-2 md:grid-cols-2 md:justify-center xl">
        <div className="w-full md:w-1/2">
          <LoginLeftSide />
        </div>
        <div className="w-full md:w-1/2 z-10 md:absolute top-0 right-0">
          <LoginRightSide />
        </div>
      </div>
    </main>
  );
}

export default LoginMain;
