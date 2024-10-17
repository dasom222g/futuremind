import React, { useEffect, useRef, useState } from "react";
import { partnerList } from "../../data/reponse";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const InfiniteRollingPartners = () => {
  // logic
  const swiperRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // 사용자가 해당 뷰포트에 도달하며 isInView 업데이트
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% 이상 보일 때 감지
    );

    const current = swiperRef.current;

    current && observer.observe(current);

    return () => {
      current && observer.unobserve(current);
    };
  }, []);

  useEffect(() => {
    const isSwiper = swiperRef.current && swiperRef.current.swiper;
    if (isSwiper && isInView) {
      // 뷰포트에 진입한 경우
      console.log("isInView", isInView);
      swiperRef.current.swiper.autoplay.start();
      return;
    }
    // 뷰포트 벗어난경우
    console.log("isInView", isInView);
    // swiperRef.current.swiper.autoplay.stop();
  }, [isInView]);

  // view
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={40}
        slidesPerView={7}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        observer={true}
        observeParents={true}
        modules={[Autoplay, Pagination, Navigation]}
        wrapperClass={`swiper-wrapper flex items-center !ease-linear`}
        className="mySwiper"
      >
        {partnerList.map((partner, index) => (
          <SwiperSlide key={`partner-${partner.id}`}>
            <img
              className="w-auto"
              src={`./images/partners/${partner.id}.png`}
              alt={partner.alt}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default InfiniteRollingPartners;
