import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hamburger from "./Hamberger";
import { sectionList } from "../../data/response";
import { useRecoilState, useRecoilValue } from "recoil";
import { mainSectionNumState, scrollYState } from "../../data/state";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  // logic
  const history = useNavigate();
  const location = useLocation();

  const ref = useRef(null);
  const [mainSectionNum, setMainSectionNum] =
    useRecoilState(mainSectionNumState);

  // scroll애니메이션
  const controls = useAnimation();
  const scrollY = useRecoilValue(scrollYState);

  const handleClick = (index) => {
    history("/");
    setMainSectionNum(index);
  };

  useEffect(() => {
    console.log("🚀 ~ Header ~ mainSectionNum:", mainSectionNum);
  }, [mainSectionNum]);

  // 스크롤에 따라 배경색 애니메이션 적용
  useEffect(() => {
    controls.start({
      backgroundColor:
        scrollY > 0 ? "rgba(0, 12, 19, 1)" : "rgba(0, 12, 19, 0)",
      transition: { duration: 0.3, delay: "", ease: "easeInOut" }, // 부드러운 전환
    });
  }, [scrollY, controls]);

  // view
  return (
    <>
      <motion.header
        ref={ref}
        animate={controls}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-8 lg:px-20 lg:py-[60px]`}
      >
        <h1>
          <button
            type="button"
            className="block"
            onClick={() => handleClick(0)}
          >
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
      </motion.header>
    </>
  );
};

export default Header;
