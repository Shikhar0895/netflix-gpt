import React, { useEffect, useState } from "react";
import { SearchIcon, accountLogo, NetflixLogo } from "../assets/index";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

import HomeNav from "./HomeNav";
import useGetNowPlaying from "../hooks/getNowPlaying";
import useGetPopularmovies from "../hooks/useGetPopularmovies";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useGetNowPlaying();
  // useGetPopularmovies();

  const headerNavLinks = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My list",
    "Browse by Languages",
  ];

  const handleAccClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        console.error(`error code : ${err.code} , message : ${err.message}`);
      });
  };

  const state = useSelector((state) => state.user.signedInUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);

        dispatch(
          addUser({
            uid: user.uid,
            userName: user.displayName,
            email: user.email,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {!isSignedIn ? (
        <div className="absolute z-30 bg-gradient-to-b from-black w-full h-[90px] flex items-center ">
          <span className="w-[167px] h-[45px] ml-[46px]">
            <NetflixLogo />
          </span>
        </div>
      ) : (
        <HomeNav />
      )}
    </>
  );
};

export default Header;
