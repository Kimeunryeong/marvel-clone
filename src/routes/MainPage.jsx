import { useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import NoticeDisney from "../components/NoticeDisney";
import { testimonials } from "../lib/menus";
import { motion } from "framer-motion";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Pinter from "../assets/Pinter";

const Card = ({
  image,
  title,
  link,
  text,
  selected,
  setSelected,
  position,
}) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className="w-full h-full flex justify-center relative">
      <motion.div
        initial={false}
        animate={{
          x: `${offset}`,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          zIndex: position,
        }}
        onClick={() => setSelected(position)}
        className=" absolute top-0 left-0 w-full h-full flex justify-center"
      >
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </motion.div>
      <div className=" absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
        <h1 className=" text-4xl font-bold uppercase">{title}</h1>
        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          facere.
        </p>
        <Button link={link} text={text} />
      </div>
    </div>
  );
};

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex space-x-2">
      {numTracks.map((item, index, array) => (
        <button
          className="h-2 w-full bg-slate-300 relative"
          key={index}
          onClick={() => setSelected(index)}
        >
          {selected === index ? (
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeOut" }}
              onAnimationComplete={() =>setSelected(selected === array.length - 1 ? 0 : selected + 1)}
              className="absolute top-0 left-0 bg-red-600 w-full h-full"
            ></motion.span>
          ) : (
            <span
              className="absolute top-0 left-0 bg-red-600"
              style={{
                width: selected > index ? "100%" : "0%",
              }}
            ></span>
          )}
          <p className={`w-full h-16 text-left items-start pt-4 px-1 font-semibold text-gray-500 ${selected === index && "text-red-600"} uppercase`}>{item.button}</p>
        </button>
      ))}
    </div>
  );
};

export default function MainPage() {
  const [selected, setSelected] = useState(0);
  return (
    <Layout>
      {/* notice disney */}
      <NoticeDisney />
      {/* 메인 캐러셀 */}
      <section className=" w-full flex flex-col">
        {/* 그림 */}
        <div className=" h-[450px] w-full overflow-hidden">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              {...item}
              selected={selected}
              setSelected={setSelected}
              position={index}
            />
          ))}
        </div>
        {/* 버튼 */}
        <div className=" w-full flex justify-center h-20">
          <div className=" max-w-7xl w-full h-full grid grid-cols-4">
            {/* grid 1 : 75% */}
            <div className=" col-span-3 -translate-y-12 bg-white">
              <SelectedBtns
                numTracks={testimonials}
                setSelected={setSelected}
                selected={selected}
              />
            </div>
            {/* grid 2 : 25% */}
            <div className=" flex w-full h-full justify-end space-x-4 pt-4"><Facebook/> <Insta/> <Pinter/></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
