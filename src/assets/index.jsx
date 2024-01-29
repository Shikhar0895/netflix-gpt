import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import accountLogo from "./accountLogo.png";
const SearchIcon = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "2em" }}>
      <IoSearchOutline />
    </IconContext.Provider>
  );
};

export { SearchIcon, accountLogo };
