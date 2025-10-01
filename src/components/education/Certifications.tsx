"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { MainContainer } from "../responsive/MainContainer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { certificationsData } from "@/data/certificationsData";

export const Certifications = () => {
  const t = useTranslations("Education");

  return (
    <MainContainer className="flex flex-col justify-center items-center gap-y-10 max-md:gap-y-5 px-4">
      <p className="h4-b text-h4-d max-md:text-h4-m">{t("certifications")}</p>
      <div className="w-full relative">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          pagination={{ clickable: true }}
          modules={[EffectCreative, Pagination]}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
              rotate: [0, 0, -10],
            },
            next: {
              translate: [0, 0, -400],
              rotate: [0, 0, 10],
            },
          }}
        >
          {certificationsData.map(({ url }) => (
            <SwiperSlide key={url}>
              <Image
                fill
                alt="imageCetification"
                src={url}
                className="rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </MainContainer>
  );
};
