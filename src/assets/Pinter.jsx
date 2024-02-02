import React from 'react'
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Pinter() {
  return (
    <Link to="https://www.pinterest.co.kr/marvelofficial/">
    <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
      <FaPinterest size="100%" />
    </div>
  </Link>
  )
}
