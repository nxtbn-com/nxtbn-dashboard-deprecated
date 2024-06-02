import nxtbnlogo from "../../assets/nxtbn_logo_black.svg";
import { useEffect, useState } from "react";

function LoginLeftSide() {
  // password and email validation
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // Password validation logic (e.g., min length 8)
    return password.length >= 8;
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(validatePassword(password));
  }, [password]);

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col md:gap-[70px] gap-[150px] px-3 mt-[35px] md:mt-[80px] md:px-[5%] lg:px-[15%] xl:px-[20%]">
      <div>
        <img src={nxtbnlogo} alt="" className="w-[100px] md:w-[252px]" />
      </div>

      <div className="flex flex-col justify-center mb-[150px] md:justify-start w-[100%] px-3 gap-10">
        <h3 className="text-[32px] font-nunito-h3 text-center md:text-start">Login to your account</h3>
        <div className="flex flex-col gap-10">
          <form className="flex flex-col gap-6">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full bg-secondary-100 outline-none border-none px-5 py-2 rounded-md"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full bg-secondary-100 outline-none border-none px-5 py-2 rounded-md"
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <input
                  className="form-checkbox rounded-full bg-base-100 checked:bg-red-600"
                  type="checkbox"
                  id="remember-me"
                />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
            </div>

            <button
              className={`flex justify-center items-center gap-3 px-7 py-3 rounded-xl text-white font-nunito-button ${
                isFormValid
                  ? "bg-primary-500 active:bg-primary-500"
                  : "bg-[#86D7B0] cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Sign in with email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginLeftSide;
