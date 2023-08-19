import React from "react";
import { Hearts } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center ">
      <Hearts className="mx-auto" color="#ffbadd" height={100} width={100} />
    </div>
  );
}
