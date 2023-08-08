import React from "react";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full bottom-6 px-2 flex flex-row items-end justify-between">
        <img src="./img/flower/flower_1.svg"></img>
        <img src="./img/flower/flower_2.svg"></img>
      </div>
      <img className="h-fit" src="./img/00.png"></img>
      <img
        className="absolute top-[85px] left-[50%] -translate-x-[50%]"
        src="./img/text_1.svg"
      ></img>
    </div>
  );
}
