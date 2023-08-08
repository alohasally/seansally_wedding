import React from "react";

export default function Information() {
  return (
    <div className="py-12 space-y-4">
      <img className="h-12 mx-auto" src="./img/text_7.svg"></img>
      <div className="text-sm text-center flex flex-col pb-10">
        <Text>2023년 10월 03일 개천절</Text>
        <Text>북촌 핸더스 에서 작은 결혼식을 합니다 </Text>
      </div>
      <div className="w-full h-[200px] overflow-hidden flex items-end justify-center">
        <img className="w-full" src="./img/01.png"></img>
      </div>
    </div>
  );
}
