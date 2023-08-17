import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./index.css";

// import required modules
import { EffectCards } from "swiper/modules";
import tw from "tailwind-styled-components";

const Text = tw.text`
    text-sm leading-6
`;

const images = ["img_1.webp", "img_2.webp", "img_3.webp"];

export default function Story() {
  return (
    <div id="3" className="py-4 space-y-8">
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
            저희는 미국과 한국이라는
            <br /> 지구 반대편에서 태어나고 자라서
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
              <img
                className="object-cover"
                src="./img/img_10.webp"
                alt=""
              ></img>
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
      <div className="text-sm text-center flex flex-col pb-10">
        <Text>
          태국 치앙마이에서 만났고 <br />
          어느덧 5년이 흘렀습니다. <br />
          그리고 이제 인생을 함께 하기로 <br />
          약속했습니다.
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
      modules={[EffectCards]}
      className="w-[240px] h-[300px]"
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
