import React, { useEffect, useRef } from "react";
import Header from "./Header";
import { useSetRecoilState } from "recoil";
import { scrollYState } from "../../data/state";

const Layout = ({ children }) => {
  const scrollAreaRef = useRef(null);
  const setScrollY = useSetRecoilState(scrollYState);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const current = scrollAreaRef.current;
    const handleScroll = () => {
      setScrollY(current.scrollTop);
    };

    current && current.addEventListener("scroll", handleScroll);

    return () => {
      current && current.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
