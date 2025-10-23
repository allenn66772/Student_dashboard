import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You have been logged out successfully!");
    window.location.href = "/login";
  };
  return (
    <>
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left: Logo / Title */}
      <div className="flex items-center gap-2">
        <FaUserTie className="text-indigo-600 text-2xl" />
        <h1 className="text-xl font-semibold text-gray-800">
          Student Management
        </h1>
      </div>

      {/* Right: Nav Links */}
      <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">
          Dashboard
        </Link>
        <Link to="/allstudents" className="hover:text-indigo-600 transition">
          Students
        </Link>
         <Link to="/addstudent" className="hover:text-indigo-600 transition">
          Add Student
        </Link>
       
        <Link to="/attendence" className="hover:text-indigo-600 transition">
          Attendance
        </Link>
        <button onClick={handleLogout} className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
          Logout
        </button>
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

export default Header