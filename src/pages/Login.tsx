import React from "react";
import LoginLeft from "../components/login/LoginLeft";
import LoginRight from "../components/login/LoginRight";

function Login() {
  return (
    <div className="px-10 mx-auto grid grid-cols-12 w-9/12 gap-4">
      <div className="2xl:col-span-5 xl:col-span-5 lg:col-span-12 md:col-span-12 col-span-12">
        <LoginLeft />
      </div>
      <div className="2xl:col-span-7 xl:col-span-7  lg:col-span-12 md:col-span-12 col-span-12">
        <LoginRight />
      </div>
    </div>
  );
}

export default Login;
