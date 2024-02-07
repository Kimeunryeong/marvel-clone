import { useInfiniteQuery, useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetCharacters, apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";
import Layout7 from "../components/Layout7";
import { RingLoader } from "react-spinners";
import Button from "../components/Button";
import HypeImg from "../assets/titleHype.svg";

export default function MainPage() {
  let lists; // fetch 요청한 배열을 받기 위한 변수
  let events; // events fetch요청한 배열을 받기 위한 변수
  let characters; // character fetch 요청

  // 코믹스 페치
  const { data, isLoading } = useQuery(
    ["getComics", { limit: 20 }],
    apiGetComics
  );
  if (!isLoading) {
    lists = data?.data.results;
  }

  // 이벤트 페치
  const {
    data: dataEvents,
    isLoading: isLoadingEvents,
    fetchNextPage, //다음페이지를 불러옴
    hasNextPage, // 다음페이지 유무 여부 (true,false)
    isFetchingNextPage, // 다음페이지 불러오는 중인지 판별 여부 Boolean
  } = useInfiniteQuery(
    // 쿼리키, 캐시에 참조하는 레퍼런스
    ["getEvents"],

    // 현재 어떤 페이지에 있는지 확인할 수 있는 파라미터
    // 기본값은 undefined
    // api 요청할 때 기본값으로 넣어서 사용가능
    ({ pageParam = 0 }) => apiGetEvents({ pageParam }),
    {
      // 다음페이지(새 데이터)를 불러올 때, 마지막 페이지와 전체페이지를 받아옴
      // (1인자)마지막페이지와 (2인자)전체페이지를 받아옴
      getNextPageParam: (lastPage, pages) => {
        console.log("lastPage", lastPage);
        const limit = lastPage?.data?.limit;
        const count = lastPage?.data?.count;
        if (count === limit) {
          const nextPage = pages.length;
          return nextPage;
        } else {
          return null;
        }
      },
    }
  );
  // if (!isLoadingEvents) {
  //   events = dataEvents?.data.results;
  // }

  // 캐릭터 fetch
  const { data: dataCharacters, isLoading: isLoadingCharacters } = useQuery(
    ["getCharacters", { limit: 10 }],
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
      <section className=" w-full flex justify-center px-4 ">
        <div className=" max-w-7xl w-full grid gird-cols-1 md:grid-cols-[7fr_3fr] gap-16">
          {/* 왼쪽 */}
          <div className=" w-full h-full ">
            {/* 타이틀 */}
            <TitleRotate text="the events" />
            {/*  이벤트  api 에서 불러오기 */}
            <div className=" w-full">
              {dataEvents?.pages.map((page) =>
                page?.data.results.map((item, index) => (
                  <div
                    key={index}
                    className="w-full space-y-4 md:space-y-0 h-auto md:h-64 border-b-2 flex pb-4 space-x-6 border-b-2 pb-4 mb-4 flex flex-col md:flex-row space-x-0 md:space-x-8 group cursor-pointer"
                  >
                    {/* 이미지 */}
                    <div className="w-[40%] md:w-1/2 h-full">
                      <img
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* description */}
                    <div className="w-[60%] md:w-1/2 h-full space-y-2 overflow-hidden">
                      <h2 className="uppercase font-bold group-hover:text-red-600 duration-500">
                        {item.title}
                      </h2>
                      <p className=" text-sm text-gray-500">
                        {item.description}
                      </p>
                      <h3 className=" italic text-sm">
                        {item.start?.substr(0, 10)}
                      </h3>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="w-full flex justify-center pb-8 pt-4">
              <Button
                isFetching={isFetchingNextPage}
                onClick={() => fetchNextPage()}
                text="load more"
                outline="outline"
              />
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="w-full py-16">
            {/* 박스 상단 테두리 */}
            <div className="relative w-full mb-8">
              <img src={HypeImg} alt="hype_image" />
              <div className="h-20 text-center w-full flex flex-col items-center">
                <h2 className="text-2xl font-semibold uppercase -translate-y-2">
                  The Hype box
                </h2>
                <p className="w-2/3 text-xs">
                  Can’t-miss news and updates from across the Marvel Universe!
                </p>
              </div>
            </div>
            {/* 박스 내용  */}
            <div className="w-full flex flex-col px-4 divide-y">
              {/* 아이템 */}
              {dataEvents?.data?.results?.slice(5, 10).map((item, index) => (
                <div
                  key={index}
                  className="w-full py-8 flex group cursor-pointer"
                >
                  <div className="w-[40%] aspect-auto">
                    <img
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                      alt="event_image"
                      className="w-[90%] aspect-video object-cover"
                    />
                  </div>
                  <div className="w-[60%] px-4 space-y-2">
                    <h2 className="font-semibold uppercase group-hover:text-red-600 duration-500">
                      {item.title}
                    </h2>
                    <p className="text-xs">{item.description.substr(0, 80)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 하단 박스 테두리 */}
            <div className="w-full flex justify-end">
              <img src={HypeImg} className=" rotate-180" alt="hype_image" />
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
      <section className="w-full flex justify-center h-auto md:h-80 bg-black">
        <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-[4fr_6fr]">
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
          <div className="w-full h-full py-8 flex flex-col text-white items-center justify-center space-y-4">
            <h3 className="text-red-600 uppercase tracking-wider	">
              Marvel insider
            </h3>
            <h4 className=" text-2xl font-bold">Watch, Earn, Redeem!</h4>
            <p className=" text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <Button text="join now" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
