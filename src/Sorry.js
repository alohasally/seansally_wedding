import React from "react";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";

const Text = tw.text`
    text-xs leading-5
`;

export default function Sorry() {
  const { t } = useTranslation();
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <div className="relative w-[280px] flex flex-col items-center justify-center space-y-3">
        <div className="w-[280px] rounded-md">
          <img
            className="h-[400px] object-center rounded-lg"
            src="./img/12.webp"
          ></img>
        </div>
        <div className="text-xs text-center flex flex-col pb-10">
          <Text>
            {t("sorry.1")}
            <br />
            {t("sorry.2")}
            <br />
            {t("sorry.3")}
          </Text>
        </div>
      </div>
    </div>
  );
}
