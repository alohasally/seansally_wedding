import React from "react";

export default function Nav() {
  return (
    <div className="relative mx-auto">
      <div className="absolute z-50 top-0 left-0 w-full h-10 bg-black/80">
        <div className="px-2 py-2 flex justify-between">
          <img src="./img/sean_Sally.svg"></img>
          <img src="./img/menu.svg"></img>
        </div>
      </div>
    </div>
  );
}
