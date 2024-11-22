import React, { useEffect } from "react";
import ReactPageScroller from "react-page-scroller";
import { MdKeyboardArrowDown } from "react-icons/md";
import { mainTitleList, serviceList, solutionCardList } from "../data/response";
import MainSection from "../components/layout/MainSection";
import "aos/dist/aos.css";
import AOS from "aos";
import FadeInTitle from "../components/FadeInTitle";
import InfiniteFadeInTitle from "../components/InfiniteFadeInTitle";
import MainSolutionMobile from "../components/MainSolutionMobile";
import MainCardMobile from "../components/MainCardMobile";

const Home = () => {
  // logic

  useEffect(() => {
    // AOS초기화
    AOS.init({
      once: true, // 여러 번 애니메이션을 적용하고 싶을 때는 false로 설정
      offset: 1000,
    });
    AOS.refresh(); // 페이지 진입 후 강제로 AOS를 다시 초기화하여 딜레이 반영
  }, []);

  // view
  return (
    <>
      <div className="h-full relative">
        {/* Hero */}
        <section className="h-full flex items-center justify-center overflow-hidden absolute z-0 w-full">
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
        <div className="relative z-10 w-full react-page-scroller-wrap">
          <ReactPageScroller
            containerStyle={{
              width: "100%",
              background: "#f5f5f5",
            }}
          >
            <div></div>
            {/* 두번째 메인 영역 */}
            <MainSection>
              <FadeInTitle /> {/* 타이틀 영역 */}
              {/* 무한롤링 영역 (pc버전) */}
              {/* <div className="pt-16 -ml-40 -mr-20 hidden lg:block">
                  <InfiniteRollingCard cardList={solutionCardList} />
                </div> */}
              {/* // 무한롤링 영역 (pc버전) */}
              {/* 무한롤링 영역 (모바일버전) */}
              <div>
                <MainSolutionMobile cardList={solutionCardList} />
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
                    <ul>
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
        </div>
      </div>
    </>
  );
};

export default Home;
