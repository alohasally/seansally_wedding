import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

// import required modules
import { EffectCreative, Navigation } from "swiper/modules";

export default function SlidePhotos() {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div id="5" className="py-4 space-y-4">
      <img className="h-12 mx-auto" src="./img/text_5.svg"></img>
      <div className="mx-auto w-[348px] rounded-md overflow-hidden">
        <Swiper
          // onSwiper={setThumbsSwiper}
          loop={true}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-size": "16px",
          }}
          grabCursor={true}
          effect={"creative"}
          navigation={true}
          // thumbs={{ swiper: thumbsSwiper }}
          creativeEffect={{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
          modules={[EffectCreative, Navigation]}
          className="mySwiper6"
        >
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/03.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/04.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/05.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/06.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/07.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/08.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/09.webp"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
