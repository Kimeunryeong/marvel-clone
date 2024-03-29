import React from 'react'
import { Link } from 'react-router-dom'
import { FaSnapchatGhost } from "react-icons/fa";


export default function Snapchat() {
  return (
    <Link to="https://www.snapchat.com/add/marvelhq">
    <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
      <FaSnapchatGhost size="100%" />
    </div>
  </Link>
  )
}
