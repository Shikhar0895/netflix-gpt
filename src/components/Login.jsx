import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
          className="bg-cover w-[100%] h-[100%] overflow-clip"
        />
      </div>

      <div
        id="formWrapper"
        className="absolute z-10 top-0 flex justify-center items-center w-full h-full"
      >
        <form className="px-[68px] pt-[60px] pb-[48px] bg-[rgba(0,0,0,.75)] backdrop-blur-sm flex flex-col gap-3 rounded-md opacity-95">
          <h2 className="text-3xl font-bold text-white">
            {isSignIn ? "Sign In" : "SignUp"}
          </h2>
          {!isSignIn && (
            <div>
              <input
                type="text"
                name="Name"
                id="email"
                placeholder="Name"
                className="pt-4 px-5 rounded"
              />
            </div>
          )}
          <input
            type="text"
            name="Email"
            id="email"
            placeholder="Email or phone Number"
            className="pt-4 px-5 rounded"
          />
          <input
            type="text"
            name="Password"
            id="password"
            placeholder="password"
            className="pt-4 px-5 rounded"
          />
          <button type="submit" className="bg-[#E50914] p-4 rounded">
            {isSignIn ? "Sign In" : "SignUp"}
          </button>
          <div>
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              className="p-2"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <p>
            <span className="text-[#737373]">New to Netflix? &nbsp;</span>
            <Link className="text-[#FFFFFF]" onClick={toggleSignIn}>
              {" "}
              Sign up Now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
