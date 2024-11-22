import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MainSolutionMobile = ({ cardList }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // 애니메이션 기본 설정
  const interval = 0.3;
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
    <div ref={containerRef}>
      {cardList.map((card, index) => (
        <motion.div
          key={card.id}
          className="py-3"
          initial={initialAnimate}
          animate={makeOption(calculateDelay(interval))}
        >
          <motion.p
            className="text-lg pb-4"
            initial={initialAnimate}
            animate={makeOption(calculateDelay(interval))}
          >
            <span
              initial={initialAnimate}
              animate={makeOption(calculateDelay(interval))}
            >
              0{card.id} {card.sub}
            </span>
            <span
              className="text-future-blue-400"
              initial={initialAnimate}
              animate={makeOption(calculateDelay(interval))}
            >
              {" "}
              {card.title}
            </span>
          </motion.p>
          <motion.img
            src={`/images/card-${card.category}.png`}
            alt={`${card.category} 이미지`}
            className="rounded-xl"
            initial={initialAnimate}
            animate={makeOption(calculateDelay(interval))}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MainSolutionMobile;
