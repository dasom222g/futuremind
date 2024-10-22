import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InfiniteFadeInTitle = ({ textData }) => {
  // 상태를 통해 현재 문구의 인덱스를 추적합니다.
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const fadeOutDuration = 2; // fade-out 지속 시간
  const holdDuration = 5; // 문구가 완전히 보이고 나서의 유지 시간
  const textDutaion = 1;

  // 번갈아가며 문구를 보여주기 위한 타이머 설정
  useEffect(() => {
    const intervalTime =
      (fadeOutDuration +
        holdDuration +
        Object.keys(textData[0]).length * textDutaion) *
      1000; // 텍스트 다 뜬후 5초 동안 문구가 보여지고 2초 동안 fade-out(총 10초)
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) =>
        prev === textData.length - 1 ? 0 : prev + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [textData, textData.length]);

  return (
    <div className="relative z-10 text-center">
      <AnimatePresence mode="wait">
        {textData.map((textItem, index) =>
          currentTextIndex === index ? (
            <motion.div
              key={`text-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: fadeOutDuration }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  duration: textDutaion,
                }}
                className={`text-4xl font-semibold ${textItem.subTitle.color}`}
              >
                {textItem.subTitle.text}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 1.2,
                  duration: textDutaion,
                }}
                className={`text-4xl md:text-86 font-bold pt-9 ${textItem.title1.color}`}
              >
                {textItem.title1.text}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 2.2,
                  duration: textDutaion,
                }}
                className={`text-4xl md:text-86 font-bold text-${textItem.title2.color}`}
              >
                {textItem.title2.text}
              </motion.h2>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default InfiniteFadeInTitle;
