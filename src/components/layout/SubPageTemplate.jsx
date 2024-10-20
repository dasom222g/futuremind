import React from "react";
import Footer from "./Footer";

const SubPageTemplate = ({ pageData }) => {
  // logic

  // view
  return (
    <>
      <section className={`bg-future-gray-700 h-full lg:min-w-450`}>
        {/* START: Hero영역 */}
        <div className="opacity-20">
          <img
            src={`.././images/sub-${pageData.mainPage}.png`}
            alt={`${pageData.mainPage} 이미지`}
            className={`h-[160px] lg:h-[580px] object-cover`}
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
                <div className="h-10">
                  <img
                    src={`.././images/icon/sub-${pageData.page}.png`}
                    alt="아이콘"
                    className="h-full w-auto"
                  />
                </div>
                <h2 className="text-2xl lg:text-4xl font-semibold whitespace-nowrap lg:min-w-64">
                  {pageData.title}
                </h2>
              </div>
              <div className="pt-6 lg:pt-0">
                {/* START: 설명 콘텐츠 */}
                {pageData.infoList.map((info, index) => (
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
                                      text.includes("**") ? "pt-3 lg:pt-6" : ""
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
            <div className="-mx-1/12 lg:-mx-1/5">
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubPageTemplate;
