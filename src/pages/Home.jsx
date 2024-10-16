import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ReactPageScroller from "react-page-scroller";
import { headerH } from "../styles/style";
import { MdKeyboardArrowDown } from "react-icons/md";
import InfiniteRollingCard from "../components/InfiniteRollingCard";
import { slideCardList } from "../data/reponse";

const Home = () => {
  return (
    <>
      <div className="h-full">
        {/* Main Content */}
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
              transition={{ type: "spring", delay: 0.7, duration: 0.7 }}
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
        <div className="relative z-10">
          <ReactPageScroller>
            <div></div>
            <section
              className={`h-full px-20 bg-future-gray-800 relative`}
              style={{ paddingTop: headerH }}
            >
              <i className="bg-section-layer absolute inset-0 z-0 opacity-10"></i>
              <div className="relative z-0 pl-20">
                <h3 className="text-6xl font-semibold leading-tight">
                  우리는 <span className="text-future-blue-400">비지니스</span>
                  의
                  <br />
                  <span className="text-future-blue-400">모든 분야</span>를
                  아우릅니다.
                </h3>
                {/* 카드 */}
                <InfiniteRollingCard cardList={slideCardList} />
              </div>
            </section>
            <section
              className={`h-full px-20 bg-purple-700`}
              style={{ paddingTop: headerH + 40 }}
            >
              hh
            </section>
          </ReactPageScroller>
        </div>
      </div>
    </>
  );
};

export default Home;
