import React from "react";
import tw from "tailwind-styled-components";

const Text = tw.text`
    text-sm leading-6
`;

export default function Wedding() {
  return (
    <div className="py-12 space-y-4 flex flex-col items-center justify-center">
      <div className="relative w-[350px] h-[380px] flex items-center justify-center">
        <img
          className="absolute -left-1 -top-7"
          src="./img/flower/flower_5.svg"
        ></img>
        <img
          className="absolute bottom-0 -left-1"
          src="./img/flower/flower_7.svg"
        ></img>
        <img
          className="absolute top-2 right-3"
          src="./img/flower/flower_6.svg"
        ></img>
        <img
          className="absolute bottom-0 right-1"
          src="./img/flower/flower_8.svg"
        ></img>
        <img
          className="absolute top-[72px] left-2/3"
          src="./img/flower/flower_9.svg"
        ></img>
        <img
          className="absolute top-2/3 left-16"
          src="./img/flower/flower_10.svg"
        ></img>
        <img
          className="absolute bottom-[72px] right-16"
          src="./img/flower/flower_11.svg"
        ></img>
        <div className="w-[300px] h-[350px] overflow-x-hidden rounded-md">
          <img
            className="h-full object-center object-cover"
            src="./img/02.jpg"
          ></img>
        </div>
      </div>
      <div className="text-sm text-center flex flex-col pb-10">
        <Text>
          저희가 인생을 함께 <br />
          시작하는 날에
          <br />
          와주셔서 축복해주세요
        </Text>
      </div>
      <div className="bg-white/10 px-4 pt-2 pb-4 rounded-md ">
        <div className="flex items-center justify-center pb-5">
          <img className="pt-4" src="./img/line.svg"></img>
        </div>
        <div className="space-y-4 flex flex-col items-start justify-center">
          <div className="space-x-3">
            <Text className="text-xs">에리케 플로레스</Text>
            <Text className="text-xs pr-1">테리 플로레스</Text>
            <Text className="text-white/80 text-xs">의 아들</Text>
            <Text>션</Text>
          </div>
          <div className="space-x-2">
            <Text className="px-6 text-xs">이운형</Text>
            <Text className="px-5 text-xs">이선옥</Text>
            <Text className="px-2 text-xs text-white/80">의 딸</Text>
            <Text>선형</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
