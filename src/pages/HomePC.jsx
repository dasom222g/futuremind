import React, { useEffect } from "react";
import ReactPageScroller from "react-page-scroller";
import { MdKeyboardArrowDown } from "react-icons/md";
import InfiniteRollingCard from "../components/InfiniteRollingCard";
import Card from "../components/Card";
import { mainTitleList, serviceList, solutionCardList } from "../data/response";
import MainSection from "../components/layout/MainSection";
import Footer from "../components/layout/Footer";
import InfiniteRollingPartners from "../components/InfiniteRollingPartners";
import "aos/dist/aos.css";
import AOS from "aos";
import { isMenuOpenState, mainSectionNumState } from "../data/state";
import { useRecoilState, useSetRecoilState } from "recoil";
import FadeInTitle from "../components/FadeInTitle";
import InfiniteFadeInTitle from "../components/InfiniteFadeInTitle";
import MainSolutionItem from "../components/MainSolutionItem";
import MainCardMobile from "../components/MainCardMobile";
import useMediaQuery, { BREAKPOINTS } from "../hooks/useMediaquery";

const Home = () => {
  // logic
  const isMobile = useMediaQuery(BREAKPOINTS.tablet);

  const [mainSectionNum, setMainSectionNum] =
    useRecoilState(mainSectionNumState);

  const setIsMenuOpen = useSetRecoilState(isMenuOpenState);

  const handleAosRefresh = () => {
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((element) => {
      element.classList.add("aos-animate");
    });
  };

  const handlePageScroll = (num, type) => {
    type === "after" && setMainSectionNum(num);
    handleAosRefresh();
  };

  useEffect(() => {
    // AOS초기화
    AOS.init({
      once: true, // 여러 번 애니메이션을 적용하고 싶을 때는 false로 설정
      offset: 1000,
    });
    AOS.refresh(); // 페이지 진입 후 강제로 AOS를 다시 초기화하여 딜레이 반영
  }, []);

  useEffect(() => {
    console.log("isMobile", isMobile);
  }, [isMobile]);
  // view
  return (
    <>
      <div className="h-full">
        {/* Hero */}
        <section className="h-full flex items-center justify-center overflow-hidden absolute left-0 right-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <i className="absolute inset-0 w-full h-full bg-future-gray-900 opacity-80"></i>
          <i className="absolute inset-0 w-full h-full bg-hero-layer bg-cover mix-blend-multiply"></i>
          <InfiniteFadeInTitle textData={mainTitleList} />
          <div className="animate-bounce absolute bottom-12 text-future-gray-100">
            <MdKeyboardArrowDown size={50} />
            {/* <MdOutlineArrowBackIos size={50} /> */}
          </div>
        </section>
        {/* // Hero */}
        <div className="relative z-10">
          {isMobile ? (
            <ReactPageScroller>
              <div></div>
              {/* 두번째 메인 영역 */}
              <MainSection>
                <FadeInTitle /> {/* 타이틀 영역 */}
                {/* 무한롤링 영역 (pc버전) */}
                <div className="pt-16 -ml-40 -mr-20 hidden lg:block">
                  <InfiniteRollingCard cardList={solutionCardList} />
                </div>
                {/* // 무한롤링 영역 (pc버전) */}
                {/* 무한롤링 영역 (모바일버전) */}
                <div className="lg:hidden">
                  <MainSolutionItem cardList={solutionCardList} />
                </div>
                {/* // 무한롤링 영역 (모바일버전) */}
              </MainSection>
              {/* // 두번째 메인 영역 */}
              {/* 세번째 메인 영역 */}
              {/* <div>세번쨰</div>
              <div>네번쨰</div> */}
              {serviceList.map((service) => (
                <MainSection type={"third"}>
                  <div className="h-full flex flex-col">
                    <div>
                      {/* 카드 영역(모바일 버전) */}
                      <ul className="lg:hidden">
                        {/* {serviceList.map((service) => (
                      <MainCardMobile key={service.id} data={service} />
                    ))} */}
                        {/* TODO: */}
                        <MainCardMobile data={service} />
                      </ul>
                      {/* 카드 영역(모바일 버전) */}
                    </div>
                  </div>
                </MainSection>
              ))}

              {/* // 세번째 메인 영역 */}
              {/* 모바일 세번째 메인 영역 */}
            </ReactPageScroller>
          ) : (
            <ReactPageScroller
              customPageNumber={mainSectionNum}
              onBeforePageScroll={(num) => handlePageScroll(num, "before")}
              pageOnChange={(num) => handlePageScroll(num, "after")}
            >
              <div></div>
              {/* 두번째 메인 영역 */}
              <MainSection>
                <FadeInTitle /> {/* 타이틀 영역 */}
                {/* 무한롤링 영역 (pc버전) */}
                <div className="pt-16 -ml-40 -mr-20 hidden lg:block">
                  <InfiniteRollingCard cardList={solutionCardList} />
                </div>
                {/* // 무한롤링 영역 (pc버전) */}
                {/* 무한롤링 영역 (모바일버전) */}
                <div className="lg:hidden">
                  <MainSolutionItem cardList={solutionCardList} />
                </div>
                {/* // 무한롤링 영역 (모바일버전) */}
              </MainSection>
              {/* // 두번째 메인 영역 */}
              {/* 세번째 메인 영역 */}
              <MainSection type={"third"}>
                <div className="h-full flex flex-col">
                  <div>
                    {/* 카드 영역(pc버전) */}
                    <div className="relative z-0 justify-center gap-12 hidden lg:flex">
                      <ul className="flex gap-16">
                        {serviceList.map((service, index) => (
                          <Card
                            key={service.id}
                            data={service}
                            cardIndex={index}
                          />
                        ))}
                      </ul>
                      <div>
                        <button
                          className="text-white pl-10 pr-8 py-9 rounded-2xl h-full flex items-end shadow-[inset_2px_2px_3px_rgba(255,255,255,0.1),inset_-2px_-2px_3px_rgba(0,0,0,0.1)] bg-[linear-gradient(225deg,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0.5)_100%)] hover-top"
                          onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                          <span
                            className="flex gap-4 items-end text-3xl font-extrabold text-nowrap transform rotate-180"
                            style={{ writingMode: "vertical-rl" }}
                          >
                            view more
                            <i className="block w-1 h-11 bg-white ml-2"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                    {/* // 카드 영역(pc버전) */}

                    {/* 카드 영역(모바일 버전) */}
                    <ul className="lg:hidden">
                      {/* {serviceList.map((service) => (
                      <MainCardMobile key={service.id} data={service} />
                    ))} */}
                      {/* TODO: */}
                      <MainCardMobile data={serviceList[0]} />
                    </ul>
                    {/* 카드 영역(모바일 버전) */}

                    {/* partners 영역 */}
                    <div className="pt-14 pb-2 -ml-40 -mr-20 hidden lg:block">
                      <InfiniteRollingPartners />
                    </div>
                    {/* // partners 영역 */}
                  </div>
                  <div className="-ml-[160px] -mr-20 mt-auto hidden lg:block">
                    <Footer />
                  </div>
                </div>
              </MainSection>
              {/* // 세번째 메인 영역 */}
              {/* 모바일 세번째 메인 영역 */}
            </ReactPageScroller>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
