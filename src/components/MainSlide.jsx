import { useState } from "react";
import NoticeDisney from "../components/NoticeDisney";
import { testimonials } from "../lib/menus";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Pinter from "../assets/Pinter";
import Button from "../components/Button";
import { motion } from "framer-motion";


const Card = ({
  logoImage,
  image,
  title,
  link1,
  link2,
  btn1,
  btn2,
  selected,
  setSelected,
  position,
}) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className="w-full h-full flex justify-center">
      <motion.div
        initial={false}
        animate={{
          x: `${offset}%`,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          zIndex: position,
        }}
        onClick={() => setSelected(position)}
        className="absolute top-0 left-0 w-full min-h-full p-8 flex flex-col justify-center items-center"
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          {/* 백그라운드 이미지 */}

          <img
            className="w-full h-full object-center object-center"
            src={image}
            alt={title}
          />
          <div className="absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
            {logoImage && (
              <div className="h-16">
                <img
                  src={logoImage}
                  alt="slide_logo"
                  className="h-full object-cover"
                />
              </div>
            )}
            <h1 className=" text-4xl font-bold uppercase">{title}</h1>
            <p className=" text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              facere.
            </p>
            <div className="flex space-x-4">
              {link1 && <Button link={link1} text={btn1} />}
              {/* {link2 && <Button link={link2} text={btn2} />} */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex space-x-2">
      {numTracks.map((item, index, array) => (
        <button
          onClick={() => setSelected(index)}
          className="h-2 w-full bg-slate-300 relative"
          key={index}
        >
          {selected === index ? (
            <motion.span
              className="absolute top-0 left-0 bg-red-600 w-full h-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "easeOut" }}
              onAnimationComplete={() => {
                setSelected(selected === array.length - 1 ? 0 : selected + 1);
              }}
            ></motion.span>
          ) : (
            <span
              className="absolute top-0 left-0 bg-red-600"
              style={{
                width: selected > index ? "100%" : "0%",
              }}
            ></span>
          )}
          <p
            className={`w-full h-16 text-left items-start pt-4 px-1 text-gray-500 ${
              selected === index && "text-red-600"
            } uppercase`}
          >
            {item.btn1}
          </p>
        </button>
      ))}
    </div>
  );
};

export default function MainSlide() {
  const [selected, setSelected] = useState(0);
  return (
    <section className=" w-full flex flex-col overflow-hidden">
      {/* notice disney */}
      <NoticeDisney />
      {/* 그림 */}
      <div className="relative w-full h-[650px]">
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
          <div className=" col-span-3 -translate-y-12 bg-white z-30">
            <SelectedBtns
              numTracks={testimonials}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          {/* grid 2 : 25% */}
          <div className=" flex w-full h-full justify-end space-x-4 items-center">
            <Facebook /> <Insta /> <Pinter />
          </div>
        </div>
      </div>
    </section>
  );
}
