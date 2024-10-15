import React from "react";
import { Link } from "react-router-dom";
import { headerH } from "../../styles/style";
import Hamburger from "./Hamberger";

const Header = () => {
  return (
    <header
      className={`h-[${headerH}px] fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4`}
    >
      <div className="flex items-center">
        <span className="text-xl font-bold">futuremind</span>
      </div>
      <nav className="hidden md:flex w-full justify-around text-2x">
        <Link to="/" className="hover:text-blue-400">
          마음을 보는 마음
        </Link>
        <Link to="/" className="hover:text-blue-400">
          ABOUT
        </Link>
        <Link to="/" className="hover:text-blue-400">
          WE WORK
        </Link>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Header;
