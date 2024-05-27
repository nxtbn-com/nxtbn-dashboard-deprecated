import React from "react";
import logo from "../../assets/login-logo.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import { Link } from "react-router-dom";

const LoginLeft = () => {
  return (
    <div>
      <img src={logo} alt="" className="w-60 mt-103 ms-8" />

      <form>
        <h3 className="ms-11 mt-16 font-bold text-3xl">
          Login to your account
        </h3>
        <div className="mt-6 ms-11 w-10/12">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mt-6 ms-11 w-10/12">
          <input
            type="password"
            id="password"
            name="email"
            placeholder="Password"
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mt-8 ms-11 flex 2xl:flex-row xl:flex-row lg:flex:row md:flex-row  sm:flex-row xs:flex-col xxs:flex-col justify-between items-center w-10/12">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-black-600"
              name="radio"
              value="remember-me"
              required
            />
            <span className="ml-2 text-black-700">Remember me</span>
          </label>
          <Link to="#" className="text-primary-500">
            Forgot password?
          </Link>
        </div>
        <div className="mt-8 ms-11 w-10/12">
          <button className="btn bg-base-600  w-full text-white py-3 rounded-xl font-bold">
            Sign in with email
          </button>
        </div>

        <div className="mt-8 w-10/12 ms-11">
          <p className="mx-auto text-center text-base w-max text-muted-100">
            Or login with
          </p>

          <div className="flex justify-between items-center mt-6">
  <Link to="">
    <img src={google} alt="" className="w-64 h-16"/>
  </Link>

  <Link to="">
    <img src={apple} alt="" className="w-64 h-16" />
  </Link>
</div>

        </div>
      </form>
    </div>
  );
};

export default LoginLeft;
