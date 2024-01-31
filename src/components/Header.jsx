import React, { useEffect, useState } from "react";
import Logo from "../assets/logo";
import { SearchIcon, accountLogo } from "../assets/index";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { IoChevronDownCircleSharp } from "react-icons/io5";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const headerNavLinks = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My list",
    "Browse by Languages",
  ];

  const handleSearch = () => {
    return null;
  };

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
            <Logo />
          </span>
        </div>
      ) : (
        <>
          <nav
            className="fixed top-0 z-40 left-0 flex px-[60px] h-[68px] w-full justify-between"
            id="menuNav"
          >
            <div className="flex flex-row " id="leftSection">
              <Link to="/browse">
                <span className="w-[92px] h-[68px] flex justify-center items-center ">
                  <Logo />
                </span>
              </Link>
              <ul className="flex justify-center items-center gap">
                {headerNavLinks.map((link) => (
                  <button
                    key={link}
                    className="text-[14px] text-[#ffffff] ml-5"
                  >
                    {link}
                  </button>
                ))}
              </ul>
            </div>
            <div
              id="rightSection"
              className="flex items-center justify-start gap-4"
            >
              <button onClick={handleSearch}>
                <SearchIcon />
              </button>
              <button
                onClick={handleAccClick}
                className="flex items-center gap-2"
              >
                <img
                  src={accountLogo}
                  alt="accountLogo"
                  className="rounded-md"
                />
                <span>{<IoChevronDownCircleSharp />}</span>
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
