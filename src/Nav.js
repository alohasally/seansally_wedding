import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const Text = tw.a`
    text-lg
`;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div id="1" className="mx-auto fixed">
      <div className="absolute z-50 top-0 left-0 w-full h-10 bg-black/80">
        <div className="px-2 py-2 flex justify-between">
          <img src="./img/sean_Sally.svg"></img>
          <img
            onClick={toggleOpen}
            src={isOpen ? "./img/close.svg" : "./img/menu.svg"}
          ></img>
        </div>
      </div>
      <div className="absolute w-full bottom-6 px-2 flex flex-row items-end justify-between">
        <img src="./img/flower/flower_1.svg"></img>
        <img src="./img/flower/flower_2.svg"></img>
      </div>
      <img className="h-fit" src="./img/00.webp"></img>
      <img
        className="absolute top-[85px] left-[50%] -translate-x-[50%]"
        src="./img/text_1.svg"
      ></img>
      <div
        className={`z-999 top-0 left-0 bg-black/90 w-full h-[500px] transition-all ease-in-out ${
          isOpen ? "absolute" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 my-[80px]">
          <Text href="#1">Home</Text>
          <Text href="#2">Love Story</Text>
          <Text href="#3">Invitation</Text>
          <Text href="#4">Calendar</Text>
          <Text href="#5">Wedding Photo</Text>
          <Text href="#6">Location</Text>
          <Text href="#7">Information</Text>
        </div>
      </div>
    </div>
  );
}
