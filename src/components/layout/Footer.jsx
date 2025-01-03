import React from "react";
import { contactList } from "../../data/response";

const Footer = () => {
  // logic

  // view
  return (
    <footer className="bg-black bg-opacity-30 text-white py-2 block ">
      <h2>
        <img
          src="/images/logo-footer.png"
          alt="로고 이미지"
          className="mx-auto"
        />
      </h2>
      <ul className="flex flex-col gap-2 pt-4">
        {contactList.map((contact) => (
          <li
            key={contact.id}
            className="flex items-center justify-center text-base whitespace-nowrap group"
          >
            <i className="hidden lg:block w-px h-3 bg-white mx-2 group-first:hidden"></i>
            {contact.text}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
