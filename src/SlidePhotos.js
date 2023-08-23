import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FullscreenModal from "./FullscreenModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

export default function SlidePhotos() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const openFullscreenModal = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreenModal = () => {
    setFullscreenImage(null);
  };

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
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          // thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
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
        >
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/03.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/03.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/04.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/04.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/05.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/05.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/09.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/09.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/06.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/06.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/07.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/07.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/08.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/08.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/family_1.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/family_1.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/family_2.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/family_2.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="py-1"></div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/03.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/04.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/05.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/09.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/06.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/07.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div className="rounded-md w-full h-full">
              <img
                className="rounded-md object-cover"
                src="./img/08.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/family_1.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/family_1.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <div
              className="rounded-md w-full h-full"
              onClick={() => openFullscreenModal("./img/family_2.jpg")}
            >
              <img
                className="rounded-md object-cover"
                src="./img/family_2.jpg"
                alt=""
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {fullscreenImage && (
        <FullscreenModal
          imageSrc={fullscreenImage}
          onClose={closeFullscreenModal}
        />
      )}
    </div>
  );
}
