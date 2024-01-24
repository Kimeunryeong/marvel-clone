import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text }) {
  return (
    <Link to={link}>
      <div>
        <button
          style={{
            clipPath:
              "polygon(12% 0, 100% 0, 100% 67%, 88% 100%, 0 100%, 0 32%",
          }}
          className=" uppercase bg-red-600 px-10 py-4 font-bold hover:bg-red-700 duration-500"
        >
          {text}
        </button>
      </div>
    </Link>
  );
}
