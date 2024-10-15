import React from "react";
import { minWidth } from "../../styles/style";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      className={`min-w-[${minWidth}px] h-full overflow-auto bg-future-gray-800 text-white`}
    >
      <Header />
      <main className={`h-full`}>{children}</main>
    </div>
  );
};

export default Layout;
