import React, { useEffect } from "react";

const { kakao } = window;

export default function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.577411, 126.984271),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(37.577411, 126.984271);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    const iwContent =
        '<div class="w-full"><div class="text-black bg-white text-center font-semibold text-xs w-[180px]">핸더스 Handus<br><a href="https://map.kakao.com/link/map/Handus_Sean&Sally,37.577411, 126.984271" class="bg-pink-200 text-xs" style="color:black" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Handus_Sean&Sally,37.577411, 126.984271" class="bg-pink-200 text-xs" style="color:black" target="_blank">길찾기</a></div></div>',
      // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(37.577411, 126.984271); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, []);
  return (
    <div id="map" className="w-[360px] h-[220px] rounded-md mx-auto"></div>
  );
}
