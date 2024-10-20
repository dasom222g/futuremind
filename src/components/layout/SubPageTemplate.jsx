import React, { Fragment, useEffect, useState } from "react";
import Footer from "./Footer";
import { subPageDataList } from "../../data/response";

const SubPageTemplate = () => {
  // logic
  // TODO: prop으로 수정예정
  const [smartSolutionData, setSmartSolutionData] = useState(null);

  useEffect(() => {
    setSmartSolutionData(
      // subPageDataList.find((sub) => sub.page === "ourim-makers")
      subPageDataList.find((sub) => sub.page === "smart-solution")
    );
  }, []);

  // view
  return (
    <>
      {smartSolutionData && (
        <section className={`bg-future-gray-700 h-full lg:min-w-450`}>
          {/* START: Hero영역 */}
          <div className="opacity-20">
            <img
              src={`./images/sub-${smartSolutionData.mainPage}.png`}
              alt={`${smartSolutionData.mainPage} 이미지`}
              className={`h-[160px] lg:h-[580px] object-cover`}
            />
          </div>
          <i className="block w-full h-1 bg-gradient-bar bg-no-repeat bg-cover"></i>
          {/* END: Hero영역 */}
          <div className="h-full">
            <div className="px-1/12 lg:px-1/5">
              {/* START: Content영역 */}
              <div
                className={`py-12 lg:py-40 lg:flex lg:gap-32 text-future-${smartSolutionData.page}`}
              >
                <div className="flex flex-col gap-4 lg:gap-8">
                  <div className="h-10">
                    <img
                      src={`./images/icon/sub-${smartSolutionData.page}.png`}
                      alt="아이콘"
                      className="h-full w-auto"
                    />
                  </div>
                  <h2 className="text-2xl lg:text-4xl font-semibold whitespace-nowrap lg:min-w-64">
                    {smartSolutionData.title}
                  </h2>
                </div>
                <div className="pt-6 lg:pt-0">
                  {/* START: 설명 콘텐츠 */}
                  {smartSolutionData.infoList.map((info, index) => (
                    <div key={`info-${index}`} className="future-sub-item">
                      {/* START: 메인 설명 */}
                      {info.mainTitle && (
                        <div>
                          <h3 className="text-lg lg:text-2xl font-bold">
                            {info.mainTitle}
                          </h3>
                          <p className="text-base lg:text-xl pt-6 lg:pt-12 font-light text-future-gray-200">
                            {info.mainDescription}
                          </p>
                        </div>
                      )}
                      {/* END: 메인 설명 */}
                      {info.subList && (
                        <ul className="text-base lg:text-xl flex flex-col gap-6 lg:gap-12">
                          {/* START: 서브 한 블록 */}
                          {info.subList.map((sub, index) => (
                            <li key={`sub-${index}`}>
                              <p className="block font-medium">{sub.title}</p>
                              {/* <span className="block pt-3 lg:pt-6 font-light text-future-gray-200 whitespace-pre-wrap">
                                {sub.description}
                              </span> */}
                              {sub.description.split("\n").length === 1 ? (
                                <span className="block pt-3 lg:pt-6 font-light text-future-gray-200 whitespace-pre-wrap">
                                  {sub.description}
                                </span>
                              ) : (
                                sub.description
                                  .split("\n")
                                  .filter((text) => text.trim())
                                  .map((text, textIndex) => (
                                    <div
                                      key={`text-${textIndex}`}
                                      className={`dasom ${
                                        text.includes("**")
                                          ? "pt-3 lg:pt-6"
                                          : ""
                                      }`}
                                    >
                                      <span
                                        className={`block text-future-gray-200 whitespace-pre-wrap ${
                                          text.includes("**")
                                            ? "font-extrabold"
                                            : "font-light"
                                        } `}
                                      >
                                        {text.replaceAll("**", "")}
                                      </span>
                                    </div>
                                  ))
                              )}
                            </li>
                          ))}

                          {/* END: 서브 한 블록 */}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* END: 설명 콘텐츠 */}
                </div>
              </div>
              {/* END: Content영역 */}
              {/* START: 서브 설명 */}
              <ul className="hidden">
                {/* START: 한 블록 */}
                <li className="pt-6 lg:pt-16 mt-6 lg:mt-16 border-t border-white border-opacity-20">
                  <h4 className="text-base lg:text-xl text-future-green-500">
                    드론 체험
                  </h4>{" "}
                  {/* 타이틀 */}
                  <ul className="text-base lg:text-xl pt-3 lg:pt-6 flex flex-col gap-5 lg:gap-10">
                    {/* START: 서브 한 블록 */}
                    <li>
                      <p className="block font-extrabold">
                        드론 농장 체험 (스마트팜)
                      </p>
                      <span className="font-light">
                        스마트팜 기술을 활용한 드론 농장 체험을 통해 농업의
                        미래를 직접 경험해보세요. 드론을 조종하며 첨단 농업
                        기술을 익히고, 환경 친화적 농업을 체험할 수 있습니다.
                      </span>
                    </li>
                    {/* END: 서브 한 블록 */}
                    {/* START: 서브 한 블록 */}
                    <li>
                      <p className="block font-extrabold">
                        드론 경주장 (스마트 물류)
                      </p>
                      <span className="font-light">
                        드론 경주를 통해 물류 혁신의 첨단 기술을 즐겁게 배울 수
                        있는 기회! 드론 경주장에서 빠르고 정확하게 목표 지점을
                        통과하는 스마트 물류의 세계를 체험하세요.
                      </span>
                    </li>
                    {/* END: 서브 한 블록 */}
                  </ul>
                </li>
                {/* END: 한 블록 */}
                {/* START: 한 블록 */}
                <li className="pt-6 lg:pt-16 mt-6 lg:mt-16 border-t border-white border-opacity-20">
                  <h4 className="text-base lg:text-xl text-future-green-500">
                    드론 체험
                  </h4>{" "}
                  {/* 타이틀 */}
                  <ul className="text-base lg:text-xl pt-3 lg:pt-6 flex flex-col gap-5 lg:gap-10">
                    {/* START: 서브 한 블록 */}
                    <li>
                      <p className="block font-extrabold">
                        드론 농장 체험 (스마트팜)
                      </p>
                      <span className="font-light">
                        스마트팜 기술을 활용한 드론 농장 체험을 통해 농업의
                        미래를 직접 경험해보세요. 드론을 조종하며 첨단 농업
                        기술을 익히고, 환경 친화적 농업을 체험할 수 있습니다.
                      </span>
                    </li>
                    {/* END: 서브 한 블록 */}
                    {/* START: 서브 한 블록 */}
                    <li>
                      <p className="block font-extrabold">
                        드론 경주장 (스마트 물류)
                      </p>
                      <span className="font-light">
                        드론 경주를 통해 물류 혁신의 첨단 기술을 즐겁게 배울 수
                        있는 기회! 드론 경주장에서 빠르고 정확하게 목표 지점을
                        통과하는 스마트 물류의 세계를 체험하세요.
                      </span>
                    </li>
                    {/* END: 서브 한 블록 */}
                  </ul>
                </li>
                {/* END: 한 블록 */}
              </ul>
              {/* END: 서브 설명 */}
              <div className="-mx-1/12 lg:-mx-1/5">
                <Footer />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SubPageTemplate;
