import React from "react";
import { Link } from "react-router-dom";

import {
  SearchIcon,
  accountLogo,
  IoChevronDownCircleSharp,
  NetflixLogo,
} from "../assets/index";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
const HomeNav = () => {
  const handleSearch = () => {
    return null;
  };

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

  return (
    <>
      <nav
        className="fixed top-0 z-40 left-0 flex px-[60px] h-[68px] w-full justify-between"
        id="menuNav"
      >
        <div className="flex flex-row " id="leftSection">
          <Link to="/browse">
            <span className="w-[92px] h-[68px] flex justify-center items-center ">
              <NetflixLogo />
            </span>
          </Link>
          <ul className="flex justify-center items-center gap">
            {headerNavLinks.map((link) => (
              <button key={link} className="text-[14px] text-[#ffffff] ml-5">
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
          <button onClick={handleAccClick} className="flex items-center gap-2">
            <img src={accountLogo} alt="accountLogo" className="rounded-md" />
            <span>
              <IoChevronDownCircleSharp />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
