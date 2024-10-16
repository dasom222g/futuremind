import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamberger";
import { navList } from "../../data/reponse";

const Header = () => {
  // logic
  const ref = useRef(null);
  const [, setHeight] = useState(0);

  useEffect(() => {
    ref.current && setHeight(ref.current.offsetHeight);
  }, []);
  // view
  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-20 py-[60px]`}
    >
      <h1 className="z-20">
        <Link to={"/"}>
          <img
            src="./images/logo.png"
            alt="futuremind 로고"
            style={{ height: 67 }}
            className="max-w-none"
          />
        </Link>
      </h1>
      <nav className="hidden md:flex w-full justify-around text-2x">
        {navList.map((nav) => (
          <Link
            key={nav.id}
            to={nav.path}
            className="relative text-2xl py-3 text-white transition-colors duration-1000 ease-out hover:text-future-blue-400 group"
          >
            {nav.name}
            <i className="opacity-0 bg-future-blue-400 group-hover:opacity-100 transition-opacity ease-out duration-1000 h-1 absolute left-0 right-0 bottom-0 "></i>
          </Link>
        ))}
      </nav>
      <Hamburger />
    </header>
  );
};

export default Header;
