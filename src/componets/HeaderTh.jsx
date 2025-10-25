import React from 'react'
import { FaUserTie } from "react-icons/fa";

function HeaderTh() {
  return (
    <>
     <header className=" bg-gradient-to-br from-blue-100 to-indigo-100 p-4 shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left: Logo / Title */}
      <div className="flex items-center gap-2">
        <FaUserTie className="text-indigo-600 text-2xl" />
        <h1 className="text-xl font-bold text-indigo-600">
          EduSphere
        </h1>
      </div>

      {/* Right: Nav Links */}
      <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        
       
       
        
        {/* <Link to="/login">
            <button  className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
              Login
            </button>
        </Link> */}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </header>
    
    
    </>
  )
}

export default HeaderTh