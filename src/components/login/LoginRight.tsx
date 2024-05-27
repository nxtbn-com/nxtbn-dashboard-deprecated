
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginRightImg from "../../assets/login-right-img.png";
import loginRightTwo from "../../assets/login-right-two.png";

const LoginRight = () => {

  const [activeSlide, setActiveSlide] = useState(0);


  const handleSlideChange = (index:number) => {
    setActiveSlide(index);
  };


  const slideContent = [
    "Description: Instantly install thousand+ major payment gateways such as Stripe, 2Checkout, Square, PayPal, and Adyen, along with thousand others, with our single-click solution. Simplify your checkout process for smoother transactions, or customize your own payment gateway to fit your needs",

    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",

    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of ",
  ];

  return (
    <div className="bg-primary-500 h-full">
      <div className="grid grid-cols-12 pt-8">
  <div className="col-span-12 2xl:col-span-4 xl:col-span-1 lg:col-span-4 md:col-span-5"></div>

  <div className="col-span-12 ml-10 2xl:col-span-8 2xl:ml-0 xl:col-span-7 lg:col-span-7 md:col-span-8 md:ml-14 xl:ml-28 ">
    <ul className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row gap-5 xxs:flex-col">
      <li>
        <Link to="" className="text-white font-medium 2xl:text-base xl:text-base lg:text-base md:text-base xs:text-xs">
          Products
        </Link>
      </li>
      <li>
        <Link to="" className="text-white font-medium 2xl:text-base xl:text-base lg:text-base md:text-base xs:text-xs">
          Features
        </Link>
      </li>
      <li>
        <Link to="" className="text-white font-medium 2xl:text-base xl:text-base lg:text-base md:text-base xs:text-xs">
          Pricing
        </Link>
      </li>
      <li>
        <Link to="" className="text-white font-medium 2xl:text-base xl:text-base lg:text-base md:text-base xs:text-xs">
          FAQ
        </Link>
      </li>
    </ul>
  </div>
</div>

  
      <div className="relative">
        <img src={loginRightImg} alt="" className="mx-auto mt-14 " />
        <img 
    src={loginRightTwo} 
    alt="" 
    className="mx-auto absolute top-40 2xl:top-40 right-24 2xl:right-20 xl:right-8 xl:top-32 lg:top-36 lg:right-32 md:right-14 md:top-32 
               sm:right-10 sm:top-28 2xl:w-96 xl:w-96 lg:w-96 md:w-96  sm:w-72 xs:w-52 xs:top-24 xs:right-6 xxs:w-36 xxs:top-24 xxs:right-6" 
  />
      </div>

      <h1 className="mx-auto pb-8 text-white text-4xll text-lg 2xl:w-472 xl:w-472 lg:w-472 md:w-472  mt-12 font-lato-bold text-center">Single-Click Payment Gateway Installation – No Jokes!</h1>

      {/* Slider */}
      <div className="relative xs:w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 xxs:w-full  mx-auto h-96 text-center">
        <div className="absolute inset-0 flex">
          {slideContent.map((text, index) => (
            <div key={index} className={`w-full flex-shrink-0  ${index === activeSlide ? '' : 'hidden'}`}>
              <p className="text-white font-medium text-lg	">{text}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-64 2xl:top-64  md:top-80 xl:top-72 xs:top-80 left-1/2 transform -translate-x-1/2 ">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full me-2 ${index === activeSlide ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LoginRight;

