import { useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";

export default function MainPage() {
  let lists; // fetch 요청한 배열을 받기 위한 변수
  let events; // events fetch요청한 배열을 받기 위한 변수

  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }

  const { data: dataEvents, isLoading: isLoadingEvents } = useQuery(
    ["getEvents"],
    apiGetEvents
  );

  if (!isLoadingEvents) {
    events = dataEvents?.data.results;
  }
  console.log(events);

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />

      {/* 리스트 캐러셀 */}
      <ListCarousel lists={lists} />

      {/*  */}
      <section className=" w-full flex justify-center">
        <div className=" max-w-7xl w-full  grid grid-cols-[7fr_3fr]">
          {/* 왼쪽 */}
          <div className=" w-full h-full ">
            {/* 타이틀 */}
            <TitleRotate text="the events" />
            {/*  이벤트  api 에서 불러오기 */}
            <div className=" w-full flex flex-col">
              {events &&
                events.map((item) => (
                  <div key={item?.id} className="">
                    <div className="w-full h-30 flex space-x-6 border-b-2 p-6">
                      <img
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt={item.title}
                        className="w-[40%]"
                      />
                      <div className=" space-y-2">
                        <div className=" font-bold">{item.title}</div>
                        <div>{item.description}</div>
                        <div className=" text-slate-400">{item.modified}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* 오른쪽 */}
            <div className=" w-full h-full  "></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
