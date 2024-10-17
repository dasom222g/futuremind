import React from "react";
import { motion } from "framer-motion";
import ReactPageScroller from "react-page-scroller";
import { MdKeyboardArrowDown } from "react-icons/md";
import InfiniteRollingCard from "../components/InfiniteRollingCard";
import { serviceList, solutionCardList } from "../data/reponse";
import Card from "../components/layout/Card";
import MainSection from "../components/layout/MainSection";
import Footer from "../components/Footer";
import InfiniteRollingPartners from "../components/layout/InfiniteRollingPartners";

const Home = () => {
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
            <source src="./images/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <i className="absolute inset-0 w-full h-full bg-future-gray-900 opacity-80"></i>
          <i className="absolute inset-0 w-full h-full bg-hero-layer mix-blend-multiply"></i>
          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="text-4xl font-semibold text-future-green-400"
            >
              Connecting dot
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.7 }}
              className="text-4xl md:text-86 font-bold pt-9"
            >
              "AI" 하나로 모든 것을
              <br />
              연결시킵니다
            </motion.h2>
          </div>
          <div className="animate-bounce absolute bottom-12 text-future-gray-100">
            <MdKeyboardArrowDown size={50} />
            {/* <MdOutlineArrowBackIos size={50} /> */}
          </div>
        </section>
        {/* // Hero */}
        <div className="relative z-10">
          <ReactPageScroller>
            <div></div>
            {/* 두번째 메인 영역 */}
            <MainSection>
              <h3 className="text-6xl font-semibold leading-tight">
                우리는 <span className="text-future-blue-400">비지니스</span>
                의
                <br />
                <span className="text-future-blue-400">모든 분야</span>를
                아우릅니다.
              </h3>
              {/* 무한롤링 영역 */}
              <div className="pt-16 -mr-20">
                <InfiniteRollingCard cardList={solutionCardList} />
              </div>
              {/* // 무한롤링 영역 */}
            </MainSection>
            {/* // 두번째 메인 영역 */}
            {/* 세번째 메인 영역 */}
            <MainSection type={"third"}>
              <div className="h-full flex flex-col">
                <div>
                  {/* 카드 영역 */}
                  <div className="relative z-0 flex gap-12">
                    <ul className="flex gap-16">
                      {serviceList.map((service) => (
                        <Card key={service.id} data={service} />
                      ))}
                    </ul>
                    <div>
                      <button className="text-white pl-10 pr-8 py-9 rounded-2xl h-full flex items-end shadow-[inset_2px_2px_3px_rgba(255,255,255,0.1),inset_-2px_-2px_3px_rgba(0,0,0,0.1)] bg-[linear-gradient(225deg,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0.5)_100%)] hover-top">
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
                  {/* // 카드 영역 */}
                  {/* partners 영역 */}
                  <div className="pt-14 pb-2 -mr-20">
                    <InfiniteRollingPartners />
                  </div>
                  {/* // partners 영역 */}
                </div>
                <div className="-ml-[160px] -mr-20 mt-auto">
                  <Footer />
                </div>
              </div>
            </MainSection>
            {/* // 세번째 메인 영역 */}
          </ReactPageScroller>
        </div>
      </div>
    </>
  );
};

export default Home;
