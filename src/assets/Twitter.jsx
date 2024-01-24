import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function Twitter() {
  return (
    <Link to="https://www.facebook.com/Marvel/">
    <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
      <FaXTwitter size="full" />
    </div>
  </Link>
  )
}
