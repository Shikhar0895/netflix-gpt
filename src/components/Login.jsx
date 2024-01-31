import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleSubmit = () => {
    if (!isSignIn) {
      const message = validate(
        isSignIn,
        email.current.value,
        password.current.value,
        name.current.value
      );
      setErrorMessage(message);
      if (message) return;
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: null,
          });
          console.log(auth.currentUser);
        })
        .catch((error) => setErrorMessage(`${error.code} : ${error.message}`));
    } else {
      //sign in logic
      const message = validate(
        isSignIn,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((err) => {
          console.error(`${err.code} : ${err.message}`);
        });
    }
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="px-[68px] pt-[60px] pb-[48px] bg-[rgba(0,0,0,.75)] backdrop-blur-sm flex flex-col gap-4 rounded-md opacity-95"
        >
          <h2 className="text-3xl font-bold text-white">
            {isSignIn ? "Sign In" : "SignUp"}
          </h2>
          {!isSignIn && (
            <div>
              <input
                ref={name}
                type="text"
                name="Name"
                id="name"
                placeholder="Name"
                className="p-4 w-full rounded"
              />
            </div>
          )}
          <input
            ref={email}
            type="text"
            name="Email"
            id="email"
            placeholder="Email or phone Number"
            className="p-4 w-full rounded"
          />
          <input
            ref={password}
            type="password"
            name="Password"
            id="password"
            placeholder="password"
            className="p-4 w-full rounded"
          />
          <p className="text-red-700 font-bold text-lg">{errorMessage}</p>
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
            <label htmlFor="rememberMe" className="text-[#B3B3B3] text-[13px]">
              Remember Me
            </label>
          </div>

          <p>
            <span className="text-[#737373]">
              {isSignIn ? "New to Netflix" : "Already a user ?"}{" "}
            </span>
            <Link className="text-[#FFFFFF]" onClick={toggleSignIn}>
              {isSignIn ? "Sign up Now " : "Sign in"}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
