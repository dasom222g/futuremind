import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInTitle = () => {
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
    <>
      <h3 ref={containerRef} className="text-3xl font-semibold leading-tight">
        <motion.p
          initial={initialAnimate}
          animate={makeOption(calculateDelay(interval))}
        >
          우리는 <span className="text-future-blue-400">비지니스</span>의
        </motion.p>
        <motion.p
          initial={initialAnimate}
          animate={makeOption(calculateDelay(interval))}
        >
          <span className="text-future-blue-400">모든 분야</span>를 아우릅니다.
        </motion.p>
      </h3>
      <motion.i
        className="block bg-white w-full h-[2px] mt-8 mb-5"
        initial={initialAnimate}
        animate={makeOption(calculateDelay(interval))}
      />
    </>
  );
};

export default FadeInTitle;
