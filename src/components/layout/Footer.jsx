import React from "react";
import { contactList } from "../../data/reponse";

const Footer = () => {
  // logic

  // view
  return (
    <footer className="bg-black bg-opacity-30 text-white py-2 flex pl-[160px] pr-20">
      <h2>
        <img src="./images/logo-footer.png" alt="로고 이미지" />
      </h2>
      <ul className="flex ml-auto">
        {contactList.map((contact) => (
          <li
            key={contact.id}
            className="flex items-center text-base whitespace-nowrap group"
          >
            <i className="block w-px h-3 bg-white mx-2 group-first:hidden"></i>
            {contact.text}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
