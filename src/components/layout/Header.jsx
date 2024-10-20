import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hamburger from "./Hamberger";
import { sectionList } from "../../data/response";
import { useRecoilState } from "recoil";
import { mainSectionNumState } from "../../data/state";

const Header = () => {
  // logic
  const history = useNavigate();
  const location = useLocation();

  const ref = useRef(null);
  const [, setHeight] = useState(0);
  const [mainSectionNum, setMainSectionNum] =
    useRecoilState(mainSectionNumState);

  const handleClick = (index) => {
    history("/");
    setMainSectionNum(index);
  };

  useEffect(() => {
    ref.current && setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    console.log("🚀 ~ Header ~ mainSectionNum:", mainSectionNum);
  }, [mainSectionNum]);

  // view
  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-8 lg:px-20 lg:py-[60px]`}
    >
      <h1 className="z-20">
        <button type="button" className="block" onClick={() => handleClick(0)}>
          <img
            src="/images/logo.png"
            alt="futuremind 로고"
            // style={{ height: 67 }}
            className="max-w-none h-12 lg:h-[67px]"
          />
        </button>
      </h1>
      <ul className="hidden lg:flex w-full justify-around text-2x">
        {sectionList.map((section, index) => (
          <li key={section.id}>
            <button
              type="button"
              className={`relative text-2xl py-3 transition-colors duration-500 ease-out hover:text-future-blue-400 group ${
                location.pathname === "/" && mainSectionNum === index
                  ? "text-future-blue-400"
                  : "text-white"
              }`}
              onClick={() => handleClick(index)}
            >
              {/* <button
              type="button"
              className={`relative text-2xl py-3 transition-colors duration-500 ease-out hover:text-future-blue-400 group`}
              onClick={() => handleClick(index)}
            > */}
              {section.name}
              <i
                className={`opacity-0 bg-future-blue-400 group-hover:opacity-100 transition-opacity ease-out duration-1000 h-1 absolute left-0 right-0 bottom-0`}
              ></i>
            </button>
          </li>
        ))}
      </ul>
      <Hamburger />
    </header>
  );
};

export default Header;
