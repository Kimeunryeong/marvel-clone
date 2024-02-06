import React from "react";
const MENUS = [
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/5/60/65a02c83d101c/portrait_uncanny.jpg",
    title: "Alligator Loki Infinity Comic #35 ",
    description: "2022",
  },
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/2/b0/6573313d1b40c/portrait_uncanny.jpg",
    title: "Avengers United Infinity Comic #18 ",
    description: "2023",
  },
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/6/a0/65a6ab761739c/portrait_uncanny.jpg",
    title: "Marvel's Voices Infinity Comic #89 ",
    description: "2022",
  },
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/1/60/65b7d79905519/detail.jpg",
    title: "Thanos (2023) #3",
    description: "2023",
  },
];

export default function CharactersComponent() {
  return (
    <div className=" w-full flex justify-center ">
      <div className=" max-w-7xl w-full py-16 flex flex-col items-center space-y-8">
        <h1 className=" font-bold text-3xl uppercase">latest comics</h1>
        <div className=" flex space-x-4">
          {MENUS.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col w-40 h-80 space-y-4 aspect-[9/16] relative"
            >
              <div className=" w-full h-[70%]] ">
                <img
                  className="w-full h-full object-cover object-fill transition-transform transform hover:-translate-y-2"
                  src={item.image}
                  alt="submenu_image"
                />
                <div className="font-bold px-2 ">
                  <h2 className="font-bold hover:text-red-600">{item.title}</h2>
                  <p className=" text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
