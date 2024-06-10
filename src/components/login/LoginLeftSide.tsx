import axios from "axios";
import nxtbnlogo from "../../assets/nxtbn_black.png";
import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";



function LoginLeftSide() {


  interface UserState {
    email: string;
    password: string;
  }
  
  const [user, setUser] = useState<UserState>({
    email: '',
    password: ''
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);


  // password and email validation
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(user.email);
  };

  const validatePassword = (password: string): boolean => {
    // Password validation logic (e.g., min length 8)
    return user.password.length >= 4;
  };

  
  useEffect(() => {
    setIsEmailValid(validateEmail(user.email));
  }, [user.email]);

  useEffect(() => {
    setIsPasswordValid(validatePassword(user.password));
  }, [user.password]);

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);


  const updateUser = (updates: Partial<UserState>) => {
    setUser(prevUser => ({
      ...prevUser,
      ...updates
    }));
  };



  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUser({email: e.target.value});
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUser({password: e.target.value});
  };

  
  interface ResponseData {
    user: {
      id: number,
      username: string,
    },
    token: {
      access: string,
      refresh: string
    }
  }


  const [error, setError] = useState('');

  const navigate = useNavigate()

  const API_URL =  'http://127.0.0.1:8000' || 'http://localhost:8000'


  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post<ResponseData>(`${API_URL}/user/dashboard/api/login/`, {'email': user.email, 'password': user.password});


      if (res.status === 200){
        localStorage.setItem('username', res.data.user.username)
        localStorage.setItem('accessToken', res.data.token.access)
        localStorage.setItem('refreshToken', res.data.token.refresh)

        navigate('/dashboard')
        window.location.reload()

      }  
      

    } catch (error:any) {
      console.log(error)
      if (error.response.status === 400){
        setError(error.response.data.detail)
      }
      if (error.response.status === 500){
        setError("Server Error")
      }
    }
  };



  return (
    <div className="flex flex-col md:gap-[70px] gap-[150px] px-3 mt-[35px] md:mt-[80px] md:px-[5%] lg:px-[15%] xl:px-[20%]">
      <div>
        <img src={nxtbnlogo} alt="" className="w-[100px] md:w-[252px]" />
      </div>

      <div className="flex flex-col justify-center mb-[150px] md:justify-start w-[100%] px-3 gap-10">
        <h3 className="text-[32px] font-nunito-h3 text-center md:text-start">Login to your account</h3>
        <div className="flex flex-col gap-10">
          <p className="text-red-500 text-center">{error}</p>
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full bg-secondary-50 outline-none border-none px-5 py-2 rounded-md"
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="w-full bg-secondary-50 outline-none border-none px-5 py-2 rounded-md"
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
              type="submit"
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
