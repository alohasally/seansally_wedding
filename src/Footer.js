import React from "react";
import tw from "tailwind-styled-components";
import KakaoMap from "./KakaoMap";
import { useTranslation } from "react-i18next";

const Text = tw.text`
    text-sm leading-6
`;

export default function Footer() {
  const { t } = useTranslation();
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(t("etc.1"));
    } catch (e) {
      alert(t("etc.2"));
    }
  };
  return (
    <div>
      {/*  Location */}
      <div id="6" className="py-12 space-y-4">
        <img className="h-12 mx-auto" src="./img/text_6.svg"></img>
        <div className="text-sm text-center flex flex-col pb-10 space-y-3">
          <Text>{t("location.1")}</Text>
          <button
            onClick={() => handleCopy("서울시 종로구 북촌로1길 42 30-4")}
            className="bg-pink-200 w-[80px] mx-auto text-xs text-black py-2 rounded-sm"
          >
            {t("location.2")}
          </button>
          <KakaoMap />
          <div className="w-[252px] mx-auto space-y-6 pt-8">
            <div className="flex flex-row items-center justify-between">
              <Text className="text-xs">{t("location.3")}</Text>
              <Text className="w-[190px] text-left">{t("location.4")}</Text>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Text className="text-xs"> {t("location.5")}</Text>
              <Text className="w-[190px] text-left">{t("location.6")}</Text>
            </div>
          </div>
        </div>

        <div className="text-sm text-center flex flex-col pb-10 space-y-2">
          <p className="text-xs">&lt; {t("location.7")}&gt;</p>
          <div className="w-full h-[208px] overflow-hidden flex items-end justify-center">
            <img
              className="h-[208px]"
              src="./img/location.webp"
              alt="parkinglot"
            />
          </div>
          <Text>
            {t("location.8")}
            <br /> {t("location.9")}
          </Text>
          <button
            onClick={() => handleCopy("서울 종로구 안국동 141")}
            className="bg-pink-100 w-[66px] py-1 mx-auto text-[10px] text-black rounded-sm"
          >
            {t("location.2")}
          </button>
        </div>
        <div className="text-sm text-center flex flex-col space-y-2">
          <p className="text-xs">&lt; {t("information.1")}&gt;</p>
          <div className="w-full h-[208px] overflow-hidden flex items-end justify-center">
            <img
              className="h-[208px] rounded-lg"
              src="./img/handus.webp"
              alt="handus"
            />
          </div>
          <Text className="text-xs leading-6">
            {t("information.2")}
            <br />
            {t("information.3")}
          </Text>
        </div>
      </div>
      {/*  Information */}
      <div div id="7" className="py-12 space-y-4">
        <img className="h-12 mx-auto" src="./img/text_7.svg"></img>
        <div className="text-sm text-center flex flex-col pb-10 space-y-4">
          <p className="text-xs">&lt;{t("information.4")}&gt;</p>
          <span className="block border w-6 border-white/40 mx-auto"></span>
          <Text>
            {t("information.5")}
            <br /> {t("information.6")}
            <br />
            {t("information.7")}
          </Text>
          <Text className="text-xs text-white/60">{t("information.8")}</Text>
          <div className="w-full h-[200px] overflow-hidden flex items-end justify-center">
            <img className="w-full" src="./img/11.webp"></img>
          </div>
          <Text>
            {t("information.9")}
            <br /> {t("information.10")}
          </Text>
          <button
            onClick={() => handleCopy("서울 종로구 종로10길 16")}
            className="bg-pink-100 w-[66px] py-1 mx-auto text-[10px] text-black rounded-sm"
          >
            {t("information.11")}
          </button>
          <Text className="text-xs text-white/60">{t("information.12")}</Text>
        </div>
      </div>
      {/*  Thanks */}
      <div className="pt-2 pb-12 space-y-2">
        <img className="h-12 mx-auto" src="./img/text_8.svg"></img>
        <div className="text-sm text-center flex flex-col pb-2 space-y-2">
          <Text>{t("information.13")}</Text>
        </div>
        <div className="relative w-[278px] h-[370px] overflow-hidden mx-auto rounded-md">
          <img
            className="absolute top-[40px] left-[50%] -translate-x-[50%] "
            src="./img/text_9.svg"
          ></img>
          <img className="object-bottom" src="./img/10.jpg"></img>
        </div>
        <p className="text-xs text-center">We're waiting for you</p>
      </div>
      <div className="flex flex-col items-center justify-center pb-10">
        <img
          className="w-3 -rotate-90 opacity-80 pb-2"
          src="./img/flower/flower_10.svg"
        ></img>
        <img className="w-[130px]" src="./img/text_footer.svg"></img>
      </div>
    </div>
  );
}
