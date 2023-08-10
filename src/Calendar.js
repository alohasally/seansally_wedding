import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const Count = tw.h4`
    text-xl pr-1    
`;
const Smalltext = tw.text`
    text-xs
`;

const Text = tw.text`
    text-sm leading-6
`;

export default function Calendar() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const weddingDay = new Date("2023/10/03 13:00:00");
    console.log(weddingDay);

    const interval = setInterval(() => {
      const now = new Date();
      const leftDay = weddingDay.getTime() - now.getTime();

      const d = Math.floor(leftDay / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (leftDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((leftDay % (1000 * 60 * 60)) / (1000 * 60));
      setMins(m);
      const s = Math.floor((leftDay % (1000 * 60)) / 1000);
      setSecs(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="4" className="py-12 space-y-4">
      <img className="h-12 mx-auto" src="./img/text_4.svg"></img>
      <div className="flex justify-center items-center">
        <Text className="">2023년 10월 3일 오후 1시</Text>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-[320px]" src="./img/calendar.svg"></img>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex flex-row justify-center items-center">
          <Count>{days}</Count>
          <Smalltext>일</Smalltext>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Count>{hours}</Count>
          <Smalltext>시</Smalltext>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Count>{mins}</Count>
          <Smalltext>분</Smalltext>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Count>{secs}</Count>
          <Smalltext>초</Smalltext>
        </div>
      </div>
      <div className="text-sm text-center flex flex-col pb-10">
        <Text>션과 선형의 결혼식이 {days}일 남았습니다</Text>
      </div>
    </div>
  );
}
