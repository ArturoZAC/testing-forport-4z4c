'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { MainContainer } from "../responsive/MainContainer";

export const Certifications = () => {
  return (

    <MainContainer className="flex flex-col justify-center items-center gap-y-10 max-md:gap-y-5 px-10">
      <p className="h4-b text-h4-d max-md:text-h4-m">Certifications</p>
      <div className="w-full pb-5 overflow-visible relative">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </MainContainer>
  )
};
