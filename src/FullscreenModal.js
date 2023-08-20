import React from "react";

export default function FullScreenModal({ imageSrc, onClose }) {
  const handleImageClick = (e) => {
    // 이미지 클릭 시 모달이 닫히지 않도록 방지
    e.stopPropagation();
  };

  const handleBackgroundClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60 modal-background"
      onClick={handleBackgroundClick}
    >
      <div className="max-w-screen-lg w-full h-full relative">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl"
          onClick={onClose}
        >
          X
        </button>
        <div className="max-h-full max-w-full" onClick={handleImageClick}>
          <img className="max-h-full max-w-full" src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
}
