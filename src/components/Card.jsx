import React from "react";

const Card = ({ data }) => {
  // logic
  const delay = 700;
  const duration = 1000;
  const { title, titleColor, icon, itemList } = data;
  // view
  return (
    <li className="w-full rounded-3xl px-12 pt-16 pb-11 max-h-[605px] overflow-y-auto shadow-[inset_2px_2px_3px_rgba(255,255,255,0.1),inset_-2px_-2px_3px_rgba(255,255,255,0.1)] bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0.5)_100%)] hover-top">
      <h2
        className={`text-44 font-semibold whitespace-pre-wrap text-${titleColor}`}
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration={duration}
      >
        {title}
      </h2>
      <div
        className="absolute top-7 right-7"
        data-aos="fade-up"
        data-aos-delay={delay}
        data-aos-duration={duration}
      >
        <img
          src={`./images/icon/${icon}.png`}
          alt="아이콘 이미지"
          className="w-[46px] h-auto"
        />
      </div>
      <ul className="pt-12 flex flex-col gap-9">
        {itemList.map((item, index) => (
          <li
            key={`item-${index}`}
            data-aos="fade-up"
            data-aos-delay={delay + duration}
            data-aos-duration={duration}
          >
            <h3 className="text-2xl font-semibold">{item.subtitle}</h3>
            <p className="text-xl text-future-gray-200 pt-3 break-keep">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Card;
