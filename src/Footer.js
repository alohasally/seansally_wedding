import React from "react";
import tw from "tailwind-styled-components";

const Text = tw.text`
    text-sm leading-6
`;

export default function Footer() {
  return (
    <div>
      {/*  Location */}
      <div className="py-12 space-y-4">
        <img className="h-12 mx-auto" src="./img/text_6.svg"></img>
        <div className="text-sm text-center flex flex-col pb-10 space-y-2">
          <Text>
            서울시 종로구 북촌로1길 42 30-4 <br />
            핸더스
          </Text>
          <p className="bg-pink-200 w-[80px] mx-auto text-xs text-black py-1 rounded-sm">
            복사안내
          </p>
        </div>
        <div className="w-full h-[208px] bg-slate-200"></div>
        <div className="text-sm text-center flex flex-col pb-10 space-y-2">
          <p className="text-xs">주차안내</p>
          <Text>서울시 종로구 북촌로1길 42 30-4 </Text>
        </div>
        <div className="w-full h-[208px] overflow-hidden flex items-end justify-center">
          <img className="" src="./img/location.svg"></img>
        </div>
      </div>
      {/*  Information */}
      <div className="py-12 space-y-4">
        <img className="h-12 mx-auto" src="./img/text_7.svg"></img>
        <div className="text-sm text-center flex flex-col pb-10 space-y-2">
          <p className="text-xs">안내사항</p>
          <Text>
            피로연은 예식 끝나고
            <br /> 6시부터 9시까지 진행될 예정입니다
          </Text>
        </div>
        <div className="w-full h-[200px] overflow-hidden flex items-end justify-center">
          <img className="w-full" src="./img/01.png"></img>
        </div>
      </div>
      {/*  Thanks */}
      <div className="py-12 space-y-2">
        <img className="h-12 mx-auto" src="./img/text_8.svg"></img>
        <div className="text-sm text-center flex flex-col pb-2 space-y-2">
          <Text>소중한 발걸음 기다리겠습니다</Text>
        </div>
        <div className="relative w-[278px] h-[370px] overflow-hidden mx-auto rounded-md">
          <img
            className="absolute top-[40px] left-[50%] -translate-x-[50%] "
            src="./img/text_9.svg"
          ></img>
          <img className="object-bottom" src="./img/10.png"></img>
        </div>
        <p className="text-xs text-center">We're waiting for you</p>
      </div>
      <div className="flex items-center justify-center pb-4">
        <img className="w-[120px]" src="./img/text_footer.svg"></img>
      </div>
    </div>
  );
}
