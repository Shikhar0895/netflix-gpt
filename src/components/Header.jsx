import React from "react";
import Logo from "../assets/logo";

const Header = () => {
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full h-[90px] flex items-center ">
      <span className="w-[167px] h-[45px] ml-[46px]">
        <Logo />
      </span>
    </div>
  );
};

export default Header;
