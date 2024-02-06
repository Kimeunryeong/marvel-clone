import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="block sm:hidden">
      {/* 모바일 적용시 메뉴바 */}
      <div
        onClick={() => setMobileOpen(true)}
        className="block md:hidden text-2xl px-2 cursor-pointer"
      >
        <FaBars />
      </div>
      <div className=" fixed left-0 top-0 bottom-0 flex h-screen flex bg-main-color"></div>
    </div>
  );
}
