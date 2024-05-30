import illustration from "../../assets/Illustration .png";
import product from "../../assets/Product 1 .png";
import Slider from "./Slides";

function LoginRightSide() {
  const slides = [
    {
      content: (
        <div>
          <div className="mt-[460px] lg:mt-[460px] xl:mt-[470px] ">
            <div className="text-secondary-50 w-[360px] text-center">
              <h2 className="text-[30px] font-nunito-h3 mb-6 md:text-[30px]">
                Single-Click Payment Gateway Installation – No Jokes!
              </h2>
            </div>
            <div className="text-primary-100 text-center w-[360px]">
              <p className="text-[14px] md:text-12px ">
                Description: Instantly install thousand+ major payment gateways
                such as Stripe, 2Checkout, Square, PayPal, and Adyen, along with
                thousand others, with our single-click solution. Simplify your
                checkout process for smoother transactions, or customize your
                own payment gateway to fit your needs
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: <div>Slide 2</div>,
    },
    {
      content: <div>Slide 3</div>,
    },
  ];
  return (
    <div className="bg-[#277200] h-[100vh] relative right-[50%] translate-x-[50%] flex flex-col gap-5">
      <div>
        <img
          src={illustration}
          alt=""
          className="absolute top-[82px] right-[50%] translate-x-[50%] w-[400px] lg:w-[450px] xl:w-[500px] md:w-[400px] object-contain "
        />

        <img
          src={product}
          alt=""
          className="absolute xl:w-[340px] lg:right-[25%] lg:translate-x-[25%] lg:w-[300px] lg:top-[200px] md:right-[20%] md:translate-x-[20%] md:top[200px] md:w-[280px] top-[180px] w-[280px] right-[18%] translate-x-[18%] object-contain"
        />
      </div>
      <Slider slides={slides} interval={10000} />
    </div>
  );
}

export default LoginRightSide;
