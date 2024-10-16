import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteRollingCard = ({ cardList }) => {
  const controls = useAnimation();
  const [width, setWidth] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    // 카드 세트의 전체 너비 계산
    setTimeout(() => {
      console.log("🚀 ~ useEffect ~ cardRef:", cardRef);

      if (cardRef.current) {
        setWidth(cardRef.current.offsetWidth);
      }
    }, 500);
  }, [cardRef]);

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ width:", width);
    if (width > 0) {
      controls.start({
        x: -width,
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls, width]);
  return (
    <ul className="flex gap-12">
      {cardList.map((card, index) => (
        <li
          key={`${index}`}
          className="min-w-[910px] p-16 bg-white bg-opacity-5 text-white rounded-2xl font-semibold"
        >
          <span className="block text-4xl">0{card.id}</span>
          <div className="flex pt-9">
            <div className="flex flex-col gap-6 text-3xl">
              <span className="block text-future-blue-400">
                {card.category}
              </span>
              <span className="block">{card.sub}</span>
            </div>
            <p className="ml-auto text-8xl text-future-blue-400">
              {card.title}
            </p>
          </div>
          <img
            src={`./images/card-${card.category}.png`}
            alt={`${card.category} 이미지`}
          />
        </li>
      ))}
    </ul>
    // <div className="overflow-hidden">
    //   <motion.div
    //     className="flex gap-12"
    //     animate={controls}
    //     style={{ width: `${width * 2}px` }}
    //   >
    //     {[0, 1].map((setIndex) => (
    //       <ul ref={cardRef} key={setIndex} className="flex gap-12">
    //         {cardList.map((card, index) => (
    //           <li
    //             key={`${setIndex}-${index}`}
    //             className="min-w-[910px] p-16 bg-white bg-opacity-5 text-white rounded-2xl"
    //           >
    //             <span>0{card.id}</span>
    //             <div className="flex">
    //               <div>
    //                 <span>{card.category}</span>
    //                 <span>{card.sub}</span>
    //               </div>
    //               <p>{card.title}</p>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     ))}
    //   </motion.div>
    // </div>
  );
};

export default InfiniteRollingCard;
