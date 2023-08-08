import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

// import required modules
import { EffectCreative, Navigation, Thumbs } from "swiper/modules";

export default function SlidePhotos() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="py-4 space-y-4">
      <img className="h-12 mx-auto" src="./img/text_5.svg"></img>
      <div className="mx-auto w-[348px] rounded-md overflow-hidden">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          grabCursor={false}
          effect={"creative"}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
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
          modules={[EffectCreative, Navigation, Thumbs]}
          className="mySwiper6"
        >
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/03.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/04.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/05.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/06.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/07.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/08.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/09.png"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
