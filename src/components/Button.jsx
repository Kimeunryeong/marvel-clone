import React from "react";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";

export default function Button({ link, text, outline, onClick, isFetching }) {
  return (
    <Link to={link}>
      <div>
        <button
          disabled={isFetching}
          onClick={onClick}
          style={{
            clipPath:
              "polygon(12% 0, 100% 0, 100% 67%, 88% 100%, 0 100%, 0 32%",
          }}
          className={`uppercase px-6 py-4 font-bold text-white duration-500  ${
            outline === "outline"
              ? "bg-gray-500 hover:bg-gray-700"
              : "bg-red-600 hover:bg-red-700 duration-500"
          }`}
        >
          {isFetching ? (
            <div>
              <DotLoader color="#36d7b7" />
            </div>
          ) : (
            text
          )}
        </button>
      </div>
    </Link>
  );
}
