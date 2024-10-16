import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InfiniteRollingCard = ({ cardList }) => {
  // logic
  const controls = useAnimation();
  const [width, setWidth] = useState(0);
  const cardRef = useRef(null);

  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const option = useMemo(
    () => ({
      x: -width,
      transition: {
        duration: 40,
        delay: 1,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    }),
    [width]
  );

  useEffect(() => {
    // 사용자가 해당 뷰포트에 도달하며 isInView 업데이트
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry", entry);
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% of the element is visible
      }
    );
    const current = containerRef.current;

    current && observer.observe(current);

    return () => {
      current && observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    // 카드 세트의 전체 너비 계산
    setTimeout(() => {
      if (cardRef.current) {
        setWidth(cardRef.current.offsetWidth);
      }
    }, 500);
  }, []);

  useEffect(() => {
    // 카드영역 너비가 0보다 크고, 사용자가 해당 뷰포트에 도달했을때 애니메이션 시작
    width > 0 && isInView ? controls.start(option) : controls.stop();
  }, [controls, isInView, option, width]);

  // view
  return (
    <div className="overflow-hidden" ref={containerRef}>
      <motion.div
        className="flex gap-12"
        animate={controls}
        style={{ width: `${width * 2}px` }}
      >
        {[0, 1].map((setIndex) => (
          <ul ref={cardRef} key={setIndex} className="flex gap-12">
            {cardList.map((card, index) => (
              <li
                key={`${index}`}
                className="min-w-[910px] p-16 bg-white bg-opacity-5 text-white rounded-3xl font-semibold"
              >
                <span className="block text-4xl">0{card.id}</span>
                <div className="flex pt-9">
                  <div className="flex flex-col gap-5 text-3xl">
                    <span className="block text-future-blue-400 uppercase">
                      {card.category}
                    </span>
                    <span className="block">{card.sub}</span>
                  </div>
                  <p className="ml-auto text-8xl text-future-blue-400">
                    {card.title}
                  </p>
                </div>
                <div className="mt-[70px]">
                  <img
                    src={`./images/card-${card.category}.png`}
                    alt={`${card.category} 이미지`}
                  />
                </div>
              </li>
            ))}
          </ul>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteRollingCard;
