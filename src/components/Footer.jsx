import FooterLogo from "../assets/png/small_logo.png";

import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Pinter from "../assets/Pinter";
import Snapchat from "../assets/Snapchat";
import Tumblr from "../assets/Tumblr";
import Twitter from "../assets/Twitter";
import Youtube from "../assets/Youtube";

export default function Footer() {
  return (
    <div className=" bg-main-color w-full flex justify-center py-16">
      <div className=" max-w-7xl w-full flex justify-between text-white ">
        {/* 1. 로고 */}
        <div className="flex space-x-8">
          {/* (1)로고 */}
          <div>
            <img src={FooterLogo} alt="footer_logo" />
          </div>
          {/* (2) */}
          <div>
            <p>ABOUT MARVEL</p>
            <p>HELP/FAQS</p>
            <p>CAREERS</p>
            <p>INTERNSHIPS</p>
          </div>
          {/* (3) */}
          <div>
            <p>ADVERTISING</p>
            <p>DISNEY+</p>
            <p>MARVELHQ.COM</p>
            <p>REDEEM DIGITAL COMICS</p>
          </div>
        </div>
        {/* 2. ads */}
        <div className="space-y-8">
          {/* 위 */}
          <div className="flex space-x-4">
            {/* (1)이미지 */}
            <div className="h-8">
              <img className="h-full"
                src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png"
                alt="insider_image"
              />
            </div>
            {/* (2)본문 */}
            <div>
              <h2 className=" uppercase font-semibold">marvel insider</h2>
              <p className=" text-gray-500 text-sm">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </div>

          {/* 아래 */}
          <div className="flex space-x-4">
            {/* (1)이미지 */}
            <div className="h-8">
              <img
              className="h-full"
                src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png"
                alt="insider_image"
              />
            </div>
            {/* (2)본문 */}
            <div>
              <h2 className=" uppercase font-semibold">marvel insider</h2>
              <p className=" text-gray-500 text-sm">
                Get Rewarded for Being a Marvel Fan
              </p>
            </div>
          </div>
        </div>
        {/* 3. 아이콘 */}
        <div className=" space-y-6">
          <h3 className=" uppercase">follow Marvel</h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-x-10 gap-y-4">
            <div>
              <Facebook />
            </div>
            <div>
              <Twitter />
            </div>
            <div>
              <Insta />
            </div>
            <div>
              <Tumblr />
            </div>
            <div>
              <Youtube />
            </div>
            <div>
              <Snapchat />
            </div>
            <div>
              <Pinter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
