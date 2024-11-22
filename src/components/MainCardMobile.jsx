import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MainCardMobile = ({ data }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // 애니메이션 기본 설정
  const interval = 0.2;
  const initialAnimate = { opacity: 0, y: 40 };

  // 애니메이션 옵션 생성 함수
  const makeOption = (delay) => ({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 40,
    transition: {
      type: "spring",
      duration: 2,
      delay,
    },
  });

  // 지연 시간 계산을 위한 기준값
  let baseDelay = 0.5;
  const calculateDelay = (multiplier = 0) => {
    const delay = baseDelay;
    baseDelay += multiplier;
    return delay;
  };

  return (
    <motion.li ref={containerRef}>
      <motion.img
        src={`/images/icon/${data.icon}.png`}
        alt="아이콘 이미지"
        className="w-[46px] h-auto"
        initial={initialAnimate}
        animate={makeOption(calculateDelay(interval))}
      />
      <motion.p
        className={`text-3xl font-bold text-${data.titleColor} pt-4 pb-3 leading-10 mt-1 whitespace-pre-wrap`}
        initial={initialAnimate}
        animate={makeOption(calculateDelay(interval))}
      >
        {data.title}
      </motion.p>
      <motion.i
        className="block bg-white w-full h-[2px] my-5"
        initial={initialAnimate}
        animate={makeOption(calculateDelay(interval))}
      />
      <motion.ul
        initial={initialAnimate}
        animate={makeOption(calculateDelay(interval))}
      >
        {data.itemList.map((item, index) => (
          <motion.li
            key={index}
            className="py-3"
            initial={initialAnimate}
            animate={makeOption(calculateDelay(interval))}
          >
            <motion.p
              className="text-2xl"
              initial={initialAnimate}
              animate={makeOption(calculateDelay(interval))}
            >
              {item.subtitle}
            </motion.p>
            <motion.span
              className={`block text-base text-gray-200 font-thin mt-4`}
              initial={initialAnimate}
              animate={makeOption(calculateDelay(interval))}
            >
              {item.description}
            </motion.span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.li>
  );
};

export default MainCardMobile;
