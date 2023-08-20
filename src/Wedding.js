import React from "react";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";

const Text = tw.text`
    text-sm leading-6
`;

export default function Wedding() {
  const { t } = useTranslation();
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
          {t("story.7")} <br />
          {t("story.8")}
          <br />
          {t("story.9")}
        </Text>
      </div>
      <div className="bg-white/10 px-4 pt-2 pb-4 rounded-md ">
        <div className="flex items-center justify-center pb-5">
          <img className="pt-4" src="./img/line.svg"></img>
        </div>
        <div className="space-y-4 flex flex-col items-center justify-center">
          <div className="space-x-3">
            <Text className="text-xs">{t("name.1")}</Text>
            <Text className="text-xs pr-1">{t("name.2")}</Text>
            <Text className="text-white/80 text-xs">{t("name.3")}</Text>
            <Text>{t("name.4")}</Text>
          </div>
          <div className="space-x-2">
            <Text className="px-6 text-xs">{t("name.5")}</Text>
            <Text className="px-5 text-xs">{t("name.6")}</Text>
            <Text className="px-2 text-xs text-white/80">{t("name.7")}</Text>
            <Text>{t("name.8")}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
