import React from "react";

export default function TitleRotate({text}) {
  return (
    <>
      {/* 사선으로 된 제목 */}
      <div className="relative w-80 h-20 flex items-center">
        <span className=" uppercase tracking-widest text-lg font-bold">
          {text}
        </span>
        {/* 사선 */}
        <div className="absolute left-0 top-[90%] w-[100px] h-[2px] bg-[#c6a972] origin-bottom-left -rotate-[45deg] "></div>
      </div>
    </>
  );
}
