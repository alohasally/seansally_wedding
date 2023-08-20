import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./index.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import tw from "tailwind-styled-components";

const Text = tw.text`
    text-sm leading-6
`;

const images = ["img_1.webp", "img_2.webp", "img_3.webp"];

export default function Story() {
  const { t } = useTranslation();
  return (
    <div id="3" className="py-4 space-y-6">
      <img className="h-12 mx-auto" src="./img/text_3.svg"></img>
      <div className="flex items-center justify-center">
        <img className="w-[160px]" src="./img/baby_1.webp"></img>
        <img className="w-[160px]" src="./img/baby_2.webp"></img>
      </div>
      <div className="relative">
        <img
          className="absolute right-10 bottom-0 rotate-45 opacity-70"
          src="./img/flower/flower_4.svg"
        ></img>
        <div className="text-sm text-center flex flex-col pb-10">
          <Text>
            {t("story.1")}
            <br /> {t("story.2")}
          </Text>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[240px] h-[300px]"
        >
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_1.webp" alt=""></img>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_2.webp" alt=""></img>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_3.webp" alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_4.webp" alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_5.webp" alt=""></img>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_6.webp" alt=""></img>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_7.webp" alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_8.webp" alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_9.webp" alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_6.webp" alt=""></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full overflow-hidden">
              <img
                className="object-cover"
                src="./img/img_13.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img className="object-cover" src="./img/img_12.webp" alt=""></img>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className="text-center flex flex-col">
        <p className="text-xs text-white/70">{t("story.10")}</p>
      </div>
      <div className="text-sm text-center flex flex-col pb-10">
        <Text>
          {t("story.3")} <br />
          {t("story.4")} <br />
          {t("story.5")} <br />
          {t("story.6")}
          <br />
        </Text>
      </div>
    </div>
  );
}

const Images = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className="w-[240px] h-[300px]"
      initialSlide={3}
      centeredSlides={true}
      autoplay={true}
    >
      {images.map((image, i) => {
        <div key={i} className="rounded-[8px] flex justify-center items-center">
          <SwiperSlide key={i} className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="object-cover"
                key={i}
                src="./img/img_1.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
        </div>;
      })}
    </Swiper>
  );
};
