import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { useSetRecoilState } from "recoil";
import { scrollYState } from "../../data/state";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  // logic
  const location = useLocation();
  const scrollAreaRef = useRef(null);
  const setScrollY = useSetRecoilState(scrollYState);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const current = scrollAreaRef?.current;
    const handleScroll = () => {
      setScrollY(current.scrollTop);
    };

    current && current.addEventListener("scroll", handleScroll);

    return () => {
      current && current.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollY]);

  useEffect(() => {
    // 페이지 이동 or 현재페이지 재진입시 새로고침 효과
    scrollAreaRef?.current &&
      scrollAreaRef?.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.key]);

  // view
  return (
    <div
      ref={scrollAreaRef}
      className={`h-full overflow-auto bg-future-gray-800 text-white`}
    >
      <Header />
      <main className={`h-full`}>{children}</main>
    </div>
  );
};

export default Layout;
