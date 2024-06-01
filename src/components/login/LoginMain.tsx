import LoginHeader from "./LoginHeader";
import LoginRightSide from "./LoginRightSide";
import LoginLeftSide from "./LoginLeftSide";

function LoginMain() {
  return (
    <main className="h-vh">
      <div className="z-20 relative ">
        <LoginHeader />
      </div>

      <div className="grid gap-2 md:grid-cols-2 md:justify-items-center md:gap-4 h">
        <div className="w-full md:col-span-1">
          <LoginLeftSide />
        </div>
        <div className="w-full md:col-span-1 z-10 ">
          <LoginRightSide />
        </div>
      </div>
    </main>
  );
}

export default LoginMain;
