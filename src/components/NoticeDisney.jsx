import React from "react";
import diseney from "../assets/diseney.svg";

export default function NoticeDisney() {
  return (
    <div className="w-full h-10 bg-main-color flex justify-center items-center uppercase text-gray-300 space-x-2">
      <span>stream echo on</span>
      <img className="h-full" src={diseney} />
    </div>
  );
}
