import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const toggleSignHandler = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="logo"
        />
      </div>
      <div className="absolute bg-black w-4/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <form>
          <h1 className="font-bold">{isSignInFrom ? "Sign In" : "Sign up"}</h1>
          {!isSignInFrom && (
            <input
              type="text"
              placeholder="Enter Name"
              className="p-1 my-2 w-full bg-gray-700 rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Enter Email"
            className="p-1 my-2 w-full bg-gray-700 rounded-sm"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="p-1 my-2 w-full bg-gray-700 rounded-sm"
          />
          <div className="">
            <button className="p-1 my-2 bg-red-700 w-full rounded-sm">
              {isSignInFrom ? "Sign In" : "Sign up"}
            </button>
          </div>
          <p className="py-4 w-full cursor-pointer" onClick={toggleSignHandler}>
            {isSignInFrom
              ? " New to Netflix ? Sign up now"
              : "Already  registered ? sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
