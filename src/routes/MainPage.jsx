import { useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetCharacters, apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";
import Layout7 from "../components/Layout7";
import { RingLoader } from "react-spinners";
import Button from "../components/Button";

export default function MainPage() {
  let lists; // fetch 요청한 배열을 받기 위한 변수
  let events; // events fetch요청한 배열을 받기 위한 변수
  let characters; // character fetch 요청

  // 코믹스 페치
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }

  // 이벤트 페치
  const { data: dataEvents, isLoading: isLoadingEvents } = useQuery(
    ["getEvents"],
    apiGetEvents
  );

  if (!isLoadingEvents) {
    events = dataEvents?.data.results;
  }

  // 캐릭터 fetch
  const { data: dataCharacters, isLoading: isLoadingCharacters } = useQuery(
    ["getCharacters", { limit: 30 }],
    apiGetCharacters
  );
  if (!isLoadingCharacters) {
    characters = dataCharacters?.data?.results;
  }

  // console.log(isLoading, data);

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox
        imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"
        mainTitle="available now"
        subTitle="ew on marvel unlimited"
        description="Read these plus 30,000+ digital comics for $9.99 a month!"
        btnTxt="get marvel unlimited"
      />

      {/* 리스트 캐러셀 */}
      <ListCarousel lists={lists} />

      {/* 이벤트 */}
      <section className=" w-full flex justify-center">
        <div className=" max-w-7xl w-full  grid grid-cols-[7fr_3fr]">
          {/* 왼쪽 */}
          <div className=" w-full h-full ">
            {/* 타이틀 */}
            <TitleRotate text="the events" />
            {/*  이벤트  api 에서 불러오기 */}
            <div className=" w-full">
              {events?.map((item) => (
                <div
                  key={item?.id}
                  className="w-full h-64 flex pb-4 space-x-6 border-b-2 cursor-pointer"
                >
                  <div className="w-[40%] h-full py-2">
                    <img
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[60%] space-y-2 ">
                    <div className=" font-bold">{item.title}</div>
                    <div>{item.description}</div>
                    <div className=" text-slate-400">{item.modified}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 오른쪽 */}
          <div className=" w-full border-t-4 border-b-4 rounded-3xl p-6 min-w-[300px] min-h-[300px]">
            <div className=" text-center space-y-4  py-6">
              <h2 className=" uppercase font-bold text-2xl">the hype box</h2>
              <p>
                Can’t-miss news and updates from across the Marvel Universe!
              </p>
            </div>
            <div className="flex w-full h-full space-x-2 p-2 grid grid-cols-[3fr_7fr]">
              <div className="">
                <img src=""/>
              </div>
              <div>텍스트</div>
            </div>
          </div>
        </div>
      </section>

      {/* 캐릭터 */}
      <TitleImageBox
        imgUrl="https://mblogthumb-phinf.pstatic.net/MjAxOTA1MDVfMzYg/MDAxNTU3MDM1NTk0MzA2.h2V3QJR5Rh3nFQysb5AfkGV1GiasOIvTo9xgIQ_mjV4g.YIj0Zlr9ZsZ-zvPd_ZeX4Mvf_bR1VdraHxvsievprRwg.JPEG.obech12/%EB%A7%88%EB%B8%942.jpg?type=w800"
        mainTitle="on sale 1/31"
        subTitle="new comics this week"
        description="In a world without Norman Osborn, SPIDER-PUNK REIGNS!"
        btnTxt="print subscription"
      />
      {/* 캐릭터 리스트 캐러셀 */}
      {isLoadingCharacters ? (
        <Layout7>
          <div className="w-full flex justify-center py-16">
            <RingLoader color="red" />
          </div>
        </Layout7>
      ) : (
        <ListCarousel lists={characters} />
      )}

      {/* 마블 인사이더 */}
      <section className="w-full flex justify-center h-80 bg-black">
        <div className="max-w-7xl w-full h-full grid grid-cols-[4fr_6fr]">
          {/* 왼쪽 */}
          <div className="w-full h-full">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg"
              />
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="w-full h-full flex flex-col text-white items-center justify-center space-y-4">
            <h3 className="text-red-600 uppercase tracking-wider	">
              Marvel insider
            </h3>
            <h4 className=" text-2xl font-bold">Watch, Earn, Redeem!</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <Button text="join now" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
