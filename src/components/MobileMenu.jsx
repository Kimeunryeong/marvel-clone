import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaAngleRight, FaBars, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { MENUS } from "./Header";

const MobileMenuLink = ({ menu }) => (
  <Link to={menu.href}>
    <div className=" relative w-full flex justify-between px-2 py-2 cursor-pointer group">
      {/* 왼쪽 */}
      <div>{menu.text}</div>
      {/* 오른쪽 */}
      <div>
        <FaAngleRight />
      </div>
      <div className=" absolute left-0 right-0 origin-left h-[1px] bg-red-500 scale-x-0 group-hover:scale-x-100" />
    </div>
  </Link>
);

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {/* 모바일 적용시 메뉴바 */}
      <div
        onClick={() => setMobileOpen(true)}
        className="block md:hidden text-2xl px-2 cursor-pointer"
      >
        <FaBars />
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="z-50  fixed left-0 top-0 bottom-0 flex w-full h-screen bg-main-color"
          >
            <div className=" w-full h-full">
              {/* 모바일 헤더영역 */}
              <div className="w-full flex justify-between p-3 text-2xl">
                <button onClick={() => setMobileOpen(false)}>
                  <IoMdClose />
                </button>
                <button className="text-lg">
                  <FaSearch />
                </button>
              </div>
              {/* 모바일 메뉴영역 */}
              <div>
                {MENUS.map((item, index) => (
                  <MobileMenuLink key={index} menu={item} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
