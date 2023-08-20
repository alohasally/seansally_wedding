import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 번역 리소스 파일을 import (아래에 생성할 JSON 파일)
import en from "./en/translation.json";
import ko from "./ko/translation.json";

const resources = {
  en: {
    translation: en,
  }, // 영어 번역 리소스
  ko: {
    translation: ko,
  }, // 한국어 번역 리소스
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en", // 번역 파일에서 찾을 수 없는 경우 기본 언어
    interpolation: {
      escapeValue: false,
    },
  });
const simplifiedLanguageCode = (code) => {
  if (code.includes("-")) {
    code = code.split("-")[0];
  }

  if (code === "en") return "en";
  return "ko";
};
// i18n의 언어 코드 설정 변경
const detectedLanguage = simplifiedLanguageCode(i18n.language);

i18n.changeLanguage(detectedLanguage);

export default i18n;
