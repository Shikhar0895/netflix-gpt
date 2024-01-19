import React from "react";
import Logo from "../assets/logo";

const Header = () => {
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full h-[90px] flex items-center ">
      <Logo />
    </div>
  );
};

export default Header;
