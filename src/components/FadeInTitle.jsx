import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const FadeInTitle = () => {
  // logic
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const controls1 = useAnimation(); // 첫 번째 <p> 컨트롤러
  const controls2 = useAnimation(); // 두 번째 <p> 컨트롤러

  // 공통 initial 모션값
  const initialAnimate = { opacity: 0, y: 40 };

  const makeOption = (delay) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 2,
        delay,
      },
    };
  };

  useEffect(() => {
    // 사용자가 해당 뷰포트에 도달하며 isInView 업데이트
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% 이상 보일 때 감지
    );

    const current = ref.current;

    current && observer.observe(current);

    return () => {
      current && observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    // console.log("isInView", isInView);
    if (isInView) {
      // 뷰포트에 진입한 경우
      controls1.start(makeOption(0.5));
      controls2.start(makeOption(1.2));
      return;
    }
    // 뷰포트 벗어난경우
    // controls1.start(initialAnimate);
    // controls2.start(initialAnimate);
  }, [controls1, controls2, isInView]);

  // view
  return (
    <>
      <h3
        ref={ref}
        className="text-3xl lg:text-6xl font-semibold leading-tight"
      >
        <motion.p animate={controls1} initial={initialAnimate}>
          우리는 <span className="text-future-blue-400">비지니스</span>의
        </motion.p>
        <motion.p animate={controls2} initial={initialAnimate}>
          <span className="text-future-blue-400">모든 분야</span>를 아우릅니다.
        </motion.p>
      </h3>
      <i className="block bg-white w-full h-[2px] lg:hidden mt-8 mb-5"></i>
    </>
  );
};

export default FadeInTitle;
