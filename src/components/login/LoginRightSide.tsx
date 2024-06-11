import React, { useState, useEffect } from "react";
import illustration from "../../assets/Illustration.png";
import product from "../../assets/Product 1.png";



const LoginRightSide = () => {
  const slides = [
    {
      title: "Single-Click Payment Gateway Installation – seriously!",
      description:
        "Instantly install thousand+ major payment gateways such as Stripe, 2Checkout, Square, PayPal, and Adyen, along with thousand others, with our single-click solution. Simplify your checkout process for smoother transactions, or customize your own payment gateway to fit your needs.",
    },
    {
      title: "Extendable with Pluggable Architecture",
      description:
        "Nxtbn supports a pluggable architecture, allowing you to seamlessly extend and customize functionality with ease. Integrate new modules and services effortlessly to meet your evolving business needs.",
    },
    {
      title: "Multi-Currency Support for Global Transactions",
      description:
        "Expand your business globally with our multi-currency support. Accept payments in various currencies, provide localized pricing, and simplify the checkout experience for international customers.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-[#277200] h-screen relative grid gap-5">
      <img
        src={illustration}
        alt=""
        className="absolute h-[45%] top-[9%] right-[50%] translate-x-[50%] w-[400px] lg:w-[450px] xl:w-[500px] md:w-[400px] object-contain "
      />
      <img
        src={product}
        alt=""
        className="absolute h-[30%] top-[21%] xl:w-[340px] lg:right-[25%] lg:translate-x-[25%] lg:w-[300px] md:right-[20%] md:translate-x-[20%] md:w-[280px] w-[280px] right-[18%] translate-x-[18%] object-contain"
      />
      <div className="w-full h-full overflow-hidden relative flex items-center justify-center">
        <div className="absolute bottom-[6%] right-1/2 w-full translate-x-1/2">
          <div
            className="flex mt-[60%] transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center"
              >
                <div className="text-center">
                  <h2 className="text-[30px] font-nunito-h3 mb-6 md:text-[30px] short:text-[24px] text-secondary-50 w-[360px]">
                    {slide.title}
                  </h2>
                  <p className="text-[14px] md:text-12px text-primary-100 w-[360px]">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[2%] left-0 right-0 flex justify-center mb-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                currentIndex === index ? "bg-base-100" : "bg-base-200"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginRightSide;
