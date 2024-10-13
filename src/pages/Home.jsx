import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="py-20 bg-black text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="service-card">
            <h2 className="text-xl font-bold">AI 솔루션</h2>
            <p>기관과 기업을 위한 AI 솔루션</p>
          </div>
          <div className="service-card">
            <h2 className="text-xl font-bold">AI 컨설팅</h2>
            <p>예비/초기 창업자를 위한 컨설팅</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
