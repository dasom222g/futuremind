import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-4xl font-bold">"AI" 하나로 모든 것을 연결시킵니다</h1>
      <p className="mt-4 text-lg">Connecting dot</p>
      <div className="mt-10">
        {/* 뇌 이미지 삽입 */}
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Brain"
          className="w-64"
        />
      </div>
    </div>
  );
};

export default HeroSection;
