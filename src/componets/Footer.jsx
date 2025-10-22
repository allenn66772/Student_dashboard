import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
        {/* Left Section */}
        <p className="text-gray-600 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Student Management Dashboard. All rights reserved.
        </p>

        {/* Right Section */}
        <div className="flex gap-6 text-gray-500 text-sm">
          <a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-600 transition">Terms of Service</a>
          <a href="#" className="hover:text-indigo-600 transition">Contact</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer