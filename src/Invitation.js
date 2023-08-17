import React from "react";
import tw from "tailwind-styled-components";

const Text = tw.text`
    text-sm leading-6
`;

export default function Invitation() {
  return (
    <div id="2" className="py-12 space-y-4">
      <img className="h-12 mx-auto" src="./img/text_2.svg"></img>
      <div className="text-sm text-center flex flex-col pb-10">
        <Text>2023년 10월 03일 개천절 오후 1시</Text>
        <Text>북촌 핸더스 에서 작은 결혼식을 합니다 </Text>
      </div>
      <div className="relative">
        <div className="absolute w-full left-5 -bottom-4 px-2 flex flex-row items-end justify-between">
          <img src="./img/flower/flower_3.svg"></img>
        </div>
        <div className="w-full h-[200px] overflow-hidden flex items-end justify-center">
          <img className="w-full" src="./img/01.webp"></img>
        </div>
      </div>
    </div>
  );
}
