import React from "react";
import { motion } from "framer-motion";
import ReactPageScroller from "react-page-scroller";
import { headerH } from "../styles/style";

const Home = () => {
  return (
    <div className="h-full">
      {/* Main Content */}
      <ReactPageScroller containerHeight={`calc(100vh - ${headerH}px)`}>
        <section className="h-full flex items-center justify-center relative overflow-hidden">
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
          <div className="relative z-10 text-center">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-green-400 mb-4"
            >
              Connecting dot
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              "AI" 하나로 모든 것을
              <br />
              연결시킵니다
            </motion.h1>
          </div>
        </section>
        <section className="h-full bg-red-600">hh</section>
        <section className="h-full bg-purple-700">hh</section>
      </ReactPageScroller>
    </div>
  );
};

export default Home;
