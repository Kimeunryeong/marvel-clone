import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text, outline }) {
  return (
    <Link to={link}>
      <div>
        <button
          style={{
            clipPath:
              "polygon(12% 0, 100% 0, 100% 67%, 88% 100%, 0 100%, 0 32%",
          }}
          className={`uppercase  px-6 py-4 font-bold  ${
            outline === "outline"
              ? "bg-gray-500 hover:bg-gray-700"
              : "bg-red-600 hover:bg-red-700 duration-500"
          }`}
        >
          {text}
        </button>
      </div>
    </Link>
  );
}
