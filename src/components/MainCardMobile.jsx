import React from "react";

const MainCardMobile = ({ data }) => {
  return (
    <li>
      <img
        src={`/images/icon/${data.icon}.png`}
        alt="아이콘 이미지"
        className="w-[46px] h-auto"
      />
      <p
        className={`text-3xl font-bold text-${data.titleColor} pt-4 pb-3 leading-10 mt-1 whitespace-pre-wrap`}
      >
        {data.title}
      </p>
      <i className="block bg-white w-full h-[2px] my-5"></i>
      <ul>
        {data.itemList.map((item, index) => (
          <li key={index} className="py-3">
            <p className="text-2xl">{item.subtitle}</p>
            <span className={`block text-base text-gray-200 font-thin mt-4`}>
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MainCardMobile;
