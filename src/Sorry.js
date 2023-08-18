import React from "react";
import tw from "tailwind-styled-components";

const Text = tw.text`
    text-xs leading-5
`;

export default function Sorry() {
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <div className="relative w-[280px] flex flex-col items-center justify-center space-y-3">
        <div className="w-[280px] rounded-md">
          <img
            className="h-[500px] object-center object-cover"
            src="./img/12.webp"
          ></img>
        </div>
        <div className="text-xs text-center flex flex-col pb-10">
          <Text>
            예식장이 협소하여 모든 친지,
            <br />
            지인분들을 초대드리지 못하는 점에
            <br />
            대하여 깊은 양해를 구합니다
          </Text>
        </div>
      </div>
    </div>
  );
}
