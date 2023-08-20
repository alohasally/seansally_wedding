import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";
import i18n from "./lang/i18n";

const Text = tw.a`
    text-lg
`;

export default function Nav() {
  const { i18n } = useTranslation();
  const [isChange, setIsChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleContentClick = () => {
    // 메뉴 내용 클릭 시 메뉴 닫힘 상태 업데이트
    setIsOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsChange(false);
  };

  return (
    <div id="1" className="relative mx-auto">
      <div className="z-50 top-0 left-[50%] -translate-x-1/2 w-[420px] h-10 bg-black/80 fixed">
        <div className="px-4 py-2.5 flex justify-between items-end ">
          <a href="#1">
            <img src="./img/sean_Sally.svg"></img>
          </a>
          <div className="space-x-2 flex cursor-pointer ">
            <div className="relative">
              <img
                src="./img/lng.svg"
                onClick={() => setIsChange(!isChange)}
              ></img>
              <div className="absolute top-4 -left-4">
                {isChange && <HoverMenu changeLanguage={changeLanguage} />}
              </div>
            </div>
            <img
              onClick={toggleOpen}
              src={isOpen ? "./img/close.svg" : "./img/menu.svg"}
            ></img>
            {/* <div className="absolute -top-2 -right-3 text-white bg-[#1E022F] leading-3 px-[4px] py-[2px] rounded-lg text-xs">
              {i18n.language}
            </div> */}
          </div>
        </div>
        <div
          className={`max-w-[420px] bg-black/90 h-fit transition-all ease-in-out hidden${
            isOpen ? "fixed !z-999" : ""
          }`}
        >
          <div
            className="flex flex-col items-center justify-center space-y-6 py-[80px]"
            onClick={handleContentClick}
          >
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

      <div className="absolute w-full bottom-6 px-2 flex flex-row items-end justify-between">
        <img src="./img/flower/flower_1.svg"></img>
        <img src="./img/flower/flower_2.svg"></img>
      </div>
      <img className="w-[420px]" src="./img/00.jpg"></img>
      <img
        className="absolute top-[85px] left-[50%] -translate-x-[50%]"
        src="./img/text_1.svg"
      ></img>
    </div>
  );
}

function HoverMenu({ changeLanguage }) {
  const { i18n } = useTranslation();
  const menus = [
    {
      title: "English",
      onClick: () => {
        changeLanguage("en"); // 언어 변경 메서드를 호출하여 영어로 변경
      },
    },
    {
      title: "Korean",
      onClick: () => {
        changeLanguage("ko"); // 언어 변경 메서드를 호출하여 영어로 변경
      },
    },
  ];

  return (
    <div className="w-[76px] pt-[8px] pb-[12px] px-[8px] backdrop-blur-[2px] rounded-md mt-3 bg-black/70">
      <ul className="flex flex-col justify-center space-y-[10px] list-none">
        {menus.map(({ title, onClick }, i) => (
          <li
            key={i}
            className="flex flex-row items-center p-[4px] space-x-[8px] rounded-md cursor-pointer hover:bg-white/20"
            onClick={onClick}
          >
            <div className="text-white text-[14px]">{title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
