import React from "react";
import tw from "tailwind-styled-components";
import KakaoMap from "./KakaoMap";

const Text = tw.text`
    text-sm leading-6
`;

export default function Footer() {
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("주소가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };
  return (
    <div>
      {/*  Location */}
      <div id="6" className="py-12 space-y-4">
        <img className="h-12 mx-auto" src="./img/text_6.svg"></img>
        <div className="text-sm text-center flex flex-col pb-10 space-y-3">
          <Text>서울시 종로구 북촌로1길 42 30-4 핸더스</Text>
          <button
            onClick={() => handleCopy("서울시 종로구 북촌로1길 42 30-4")}
            className="bg-pink-200 w-[80px] mx-auto text-xs text-black py-2 rounded-sm"
          >
            주소복사
          </button>
          <KakaoMap />
          <div className="w-[252px] mx-auto space-y-6 pt-8">
            <div className="flex flex-row items-center justify-between">
              <Text className="text-xs">대중교통</Text>
              <Text className="w-[190px] text-left">
                지하철 3호선 안국역 1번출구 해당 건물 끼고 우회전하여 직진 도보
                1-2분 소요
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Text className="text-xs">자가용</Text>
              <Text className="w-[190px] text-left">
                해영회관점 주차장으로 오셔서 주차하시면 됩니다.
              </Text>
            </div>
          </div>
        </div>

        <div className="text-sm text-center flex flex-col pb-10 space-y-2">
          <p className="text-xs">주차안내</p>
          <div className="w-full h-[208px] overflow-hidden flex items-end justify-center">
            <img
              className="h-[208px]"
              src="./img/location.webp"
              alt="parkinglot"
            />
          </div>
          <Text>
            서울 종로구 안국동 141
            <br /> 해영회관점 주차장
          </Text>
          <button
            onClick={() => handleCopy("서울 종로구 안국동 141")}
            className="bg-pink-100 w-[60px] py-1 mx-auto text-[10px] text-black rounded-sm"
          >
            주소복사
          </button>
        </div>
        <div className="text-sm text-center flex flex-col space-y-2">
          <p className="text-xs">식장안내</p>
          <div className="w-full h-[208px] overflow-hidden flex items-end justify-center">
            <img
              className="h-[208px] rounded-lg"
              src="./img/handus.webp"
              alt="handus"
            />
          </div>
          <Text className="text-xs leading-6">
            식장인 핸더스는 작은 한옥이기 때문에
            <br />
            화장실이 남녀 구분없이 1개라는 점 참고해주세요
          </Text>
        </div>
      </div>
      {/*  Information */}
      <div div id="7" className="py-12 space-y-4">
        <img className="h-12 mx-auto" src="./img/text_7.svg"></img>
        <div className="text-sm text-center flex flex-col pb-10 space-y-4">
          <p className="text-xs">안내사항</p>
          <span className="block border w-6 border-white/40 mx-auto"></span>
          <Text>
            피로연은 예식 끝나고 종각역 근처 이자카야 나무 에서
            <br /> 6시부터 9시까지 진행될 예정입니다
          </Text>
          <Text className="text-xs text-white/60">
            시간 여유가 되시면 자유롭게 참석하시면 됩니다
          </Text>
          <div className="w-full h-[200px] overflow-hidden flex items-end justify-center">
            <img className="w-full" src="./img/11.webp"></img>
          </div>
          <Text>
            서울 종로구 종로10길 16 2층
            <br /> 종각 이자카야 나무
          </Text>
          <button
            onClick={() => handleCopy("서울 종로구 종로10길 16")}
            className="bg-pink-100 w-[60px] py-1 mx-auto text-[10px] text-black rounded-sm"
          >
            주소복사
          </button>
          <Text className="text-xs text-white/60">
            예식장 핸더스에서 도보 10~15분 소요
          </Text>
        </div>
      </div>
      {/*  Thanks */}
      <div className="pt-2 pb-12 space-y-2">
        <img className="h-12 mx-auto" src="./img/text_8.svg"></img>
        <div className="text-sm text-center flex flex-col pb-2 space-y-2">
          <Text>소중한 발걸음 기다리겠습니다</Text>
        </div>
        <div className="relative w-[278px] h-[370px] overflow-hidden mx-auto rounded-md">
          <img
            className="absolute top-[40px] left-[50%] -translate-x-[50%] "
            src="./img/text_9.svg"
          ></img>
          <img className="object-bottom" src="./img/10.webp"></img>
        </div>
        <p className="text-xs text-center">We're waiting for you</p>
      </div>
      <div className="flex items-center justify-center pb-4">
        <img className="w-[120px]" src="./img/text_footer.svg"></img>
      </div>
    </div>
  );
}
