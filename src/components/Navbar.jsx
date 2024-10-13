import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-transparent text-gray-800">
      <div className="text-2xl font-bold">futuremind</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#wework">WE WORK</a>
        </li>
      </ul>
      <div className="hamburger-menu">{/* 햄버거 메뉴 아이콘 구현 */}</div>
    </nav>
  );
};

export default Navbar;
