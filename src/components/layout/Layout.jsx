import React from "react";
import { headerH, minWidth } from "../../styles/style";
import Hamburger from "./Hamberger";
import { Link } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      className={`min-w-[${minWidth}px] h-full overflow-auto bg-black text-white`}
    >
      <Header />
      <main className={`h-full pt-[${headerH}px]`}>{children}</main>
    </div>
  );
};

export default Layout;
