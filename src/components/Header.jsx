import { FaSearch } from "react-icons/fa";
import title_logo from "../assets/png/title_logo.png";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
      {/* 헤더 */}
      <section className="w-full flex justify-center h-12 bg-main-color">
        <div className="max-w-7xl w-full h-full flex items-center relative text-white justify-between">
          {/* 왼쪽 로고 : 로그인 */}
          <div className="flex h-full text-sm items-center space-x-2 border-x border-gray-700 px-4">
            <span className="inline-block bg-white w-5 h-5 text-main-color rounded-full text-right italic pr-1 font-bold ">
              IN
            </span>
            <span>LOGIN</span>
            <span>|</span>
            <span>JOIN</span>
          </div>
          {/* 오른쪽 로고 : 검색 */}
          <div className="px-4 flex border-x border-gray-700 h-full items-center space-x-4">
            <div className="h-full flex items-center space-x-2">
              {/* 이미지 */}
              <img
                className="h-[60%] inline-block"
                src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
                alt="right_logo"
              />
              <div className="inline-block uppercase text-center">
                <p className="text-sm">marvel unlimited</p>
                <p className="text-xs">subscribe</p>
              </div>
            </div>
            {/* 서치아이콘 */}
            <div className="border-l border-gray-700 pl-4 h-full flex items-center">
              <FaSearch />
            </div>
          </div>
          {/* 중앙 로고 */}
          <div className="absolute top-0 left-[50%] -translate-x-[50%] items-center h-full">
            <img className="h-full" src={title_logo} alt="logo_large" />
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center h-10 bg-main-color border-y border-gray-700 space-x-8 text-white items-center uppercase">
        <p>news</p>
        <Link to="/comics">comics</Link>
        <Link to="/characters">characters</Link>
        <p>movies</p>
        <p>tv shows</p>
        <p>games</p>
        <p>videos</p>
        <p>more</p>
      </section>
     
    </>
  );
}
