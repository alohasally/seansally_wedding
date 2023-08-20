import React from "react";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";

const Text = tw.p`
    text-sm leading-6
`;

export default function Invitation() {
  const { t } = useTranslation();
  return (
    <div id="2" className="py-12 space-y-4">
      <img className="h-12 mx-auto" src="./img/text_2.svg"></img>
      <div className="text-sm text-center flex flex-col pb-10">
        <Text>{t("invitation.1")}</Text>
        <Text>{t("invitation.2")}</Text>
      </div>
      <div className="relative">
        <div className="absolute w-full left-5 -bottom-4 px-2 flex flex-row items-end justify-between">
          <img src="./img/flower/flower_3.svg" alt="Flower"></img>
        </div>
        <div className="w-full h-[200px] overflow-hidden flex items-end justify-center">
          <img className="w-full" src="./img/01.jpg" alt="image"></img>
        </div>
      </div>
    </div>
  );
}
