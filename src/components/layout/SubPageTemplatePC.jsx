import React, { Fragment } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const SubPageTemplate = ({ pageData }) => {
  // logic
  const interval = 0.2;
  const initialAnimate = { opacity: 0, y: 40 }; // 공통 initial 모션값

  // 애니메이션 옵션 생성
  const makeOption = (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay,
    },
  });

  let baseDelay = 0.5; // 기본 지연 시간 설정
  const calculateDelay = (multiplier = 0) => {
    const delay = baseDelay;
    baseDelay += multiplier; // multiplier를 사용하여 지연 시간 누적 계산
    return delay;
  };

  // view
  return (
    <>
      <section className={`bg-future-gray-700 h-full lg:min-w-450`}>
        {/* START: Hero영역 */}
        <div className="opacity-20">
          <img
            src={`.././images/sub-${pageData.mainPage}.png`}
            alt={`${pageData.mainPage} 이미지`}
            className={`h-[160px] lg:h-[580px] w-full object-cover`}
          />
        </div>
        <i className="block w-full h-1 bg-gradient-bar bg-no-repeat bg-cover"></i>
        {/* END: Hero영역 */}
        <div className="h-full">
          <div className="px-1/12 lg:px-1/5">
            {/* START: Content영역 */}
            <div
              className={`py-12 lg:py-40 lg:flex lg:gap-32 text-future-${pageData.page}`}
            >
              <div className="flex flex-col gap-4 lg:gap-8">
                <motion.div
                  key={`icon-${pageData.id}-${new Date().getTime()}`}
                  className="h-10"
                  initial={initialAnimate}
                  animate={makeOption(calculateDelay(interval))}
                >
                  <img
                    src={`.././images/icon/sub-${pageData.page}.png`}
                    alt="아이콘"
                    className="h-full w-auto"
                  />
                </motion.div>
                <motion.h2
                  key={`title-${pageData.id}-${new Date().getTime()}`}
                  className="text-2xl lg:text-4xl font-semibold whitespace-nowrap lg:min-w-64"
                  initial={initialAnimate}
                  animate={makeOption(calculateDelay(interval))} // 타이틀 애니메이션 0.5초 후에
                >
                  {pageData.title}
                </motion.h2>
              </div>
              <div className="pt-6 lg:pt-0">
                {/* START: 설명 콘텐츠 */}
                {pageData.infoList.map((info, infoIndex) => (
                  <div key={`info-${pageData.id}-${infoIndex}`}>
                    {/* START: 구분선 */}
                    {infoIndex ? (
                      <motion.i
                        key={`divider-${
                          pageData.id
                        }-${infoIndex}-${new Date().getTime()}`}
                        className="w-full h-px block bg-white bg-opacity-20 my-6 lg:my-16"
                        initial={initialAnimate}
                        animate={makeOption(calculateDelay(interval))}
                      ></motion.i>
                    ) : null}
                    {/* END: 구분선 */}
                    <div className="flex flex-col gap-4 lg:gap-8">
                      {/* START: 메인 설명 */}
                      {info.mainTitle && (
                        <div>
                          <motion.div
                            key={`mainTitle-${
                              pageData.id
                            }-${infoIndex}-${new Date().getTime()}`}
                            initial={initialAnimate}
                            animate={makeOption(calculateDelay(interval))}
                          >
                            <h3 className="text-lg lg:text-2xl font-bold">
                              {info.mainTitle}
                            </h3>
                          </motion.div>
                          <div className="text-base lg:text-xl pt-6 lg:pt-12 font-light text-future-gray-200">
                            {info.mainDescription.split("\n").length === 1 ? (
                              <motion.p
                                key={`mainDescription-${
                                  pageData.id
                                }-${infoIndex}-${new Date().getTime()}`}
                                initial={initialAnimate}
                                animate={makeOption(calculateDelay(interval))}
                              >
                                {info.mainDescription}
                              </motion.p>
                            ) : (
                              info.mainDescription
                                .split("\n")
                                .filter((text) => text.trim())
                                .map((text, textIndex) => (
                                  <Fragment
                                    key={`text-${pageData.id}-${infoIndex}-${textIndex}`}
                                  >
                                    <motion.div
                                      key={`textFragment-${
                                        pageData.id
                                      }-${infoIndex}-${textIndex}-${new Date().getTime()}`}
                                      className={`dasom ${
                                        text.includes("**")
                                          ? "pt-3 lg:pt-6"
                                          : ""
                                      }`}
                                      initial={initialAnimate}
                                      animate={makeOption(
                                        calculateDelay(interval)
                                      )}
                                    >
                                      <span
                                        className={`block text-future-gray-200 ${
                                          text.includes("**")
                                            ? "font-extrabold"
                                            : "font-light"
                                        } `}
                                      >
                                        {text.replaceAll("**", "")}
                                      </span>
                                    </motion.div>
                                  </Fragment>
                                ))
                            )}
                          </div>
                        </div>
                      )}
                      {/* END: 메인 설명 */}
                      {info.subList && (
                        <ul className="text-base lg:text-xl flex flex-col gap-6 lg:gap-12">
                          {/* START: 서브 한 블록 */}
                          {info.subList.map((sub, subIndex) => (
                            <li
                              key={`sub-${pageData.id}-${infoIndex}-${subIndex}`}
                            >
                              <motion.p
                                key={`subTitle-${
                                  pageData.id
                                }-${infoIndex}-${subIndex}-${new Date().getTime()}`}
                                className="block font-medium"
                                initial={initialAnimate}
                                animate={makeOption(calculateDelay(interval))}
                              >
                                {sub.title}
                              </motion.p>
                              {sub.description.split("\n").length === 1 ? (
                                <motion.span
                                  key={`subDescription-${
                                    pageData.id
                                  }-${infoIndex}-${subIndex}-${new Date().getTime()}`}
                                  className="block pt-3 lg:pt-6 font-light text-future-gray-200"
                                  initial={initialAnimate}
                                  animate={makeOption(calculateDelay(interval))}
                                >
                                  {sub.description}
                                </motion.span>
                              ) : (
                                sub.description
                                  .split("\n")
                                  .filter((text) => text.trim())
                                  .map((text, textIndex) => (
                                    <Fragment
                                      key={`text-${pageData.id}-${infoIndex}-${subIndex}-${textIndex}`}
                                    >
                                      <motion.div
                                        key={`textFragment-${
                                          pageData.id
                                        }-${infoIndex}-${subIndex}-${textIndex}-${new Date().getTime()}`}
                                        className={`dasom ${
                                          text.includes("**")
                                            ? "pt-3 lg:pt-6"
                                            : ""
                                        }`}
                                        initial={initialAnimate}
                                        animate={makeOption(
                                          calculateDelay(interval)
                                        )}
                                      >
                                        <span
                                          className={`block text-future-gray-200 ${
                                            text.includes("**")
                                              ? "font-extrabold"
                                              : "font-light"
                                          } `}
                                        >
                                          {text.replaceAll("**", "")}
                                        </span>
                                      </motion.div>
                                    </Fragment>
                                  ))
                              )}
                            </li>
                          ))}

                          {/* END: 서브 한 블록 */}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}

                {/* END: 설명 콘텐츠 */}
              </div>
            </div>
            {/* END: Content영역 */}
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default SubPageTemplate;
