import React from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaClipboardList, FaCalendarCheck } from "react-icons/fa";
import Header from '../componets/Header';

function Home() {
  return (
    <>
    <Header/>
     <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Student Management Dashboard</h1>
        <p className="text-gray-500">Overview and analytics of your institution</p>
      </header>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
          <div className="p-4 bg-blue-100 rounded-xl text-blue-600">
            <FaUserGraduate size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">1,245</h2>
            <p className="text-gray-500 text-sm">Total Students</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
          <div className="p-4 bg-green-100 rounded-xl text-green-600">
            <FaChalkboardTeacher size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">68</h2>
            <p className="text-gray-500 text-sm">Total Classes</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
          <div className="p-4 bg-yellow-100 rounded-xl text-yellow-600">
            <FaClipboardList size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">92%</h2>
            <p className="text-gray-500 text-sm">Attendance Rate</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-4">
          <div className="p-4 bg-red-100 rounded-xl text-red-600">
            <FaCalendarCheck size={28} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">12</h2>
            <p className="text-gray-500 text-sm">Upcoming Events</p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Announcements */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Announcements</h3>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <p className="text-gray-700 font-medium">🎓 Semester Exams from Nov 5</p>
              <p className="text-gray-400 text-sm">Posted 2 days ago</p>
            </li>
            <li className="border-b pb-2">
              <p className="text-gray-700 font-medium">🏆 Annual Sports Day registration open</p>
              <p className="text-gray-400 text-sm">Posted 1 week ago</p>
            </li>
            <li>
              <p className="text-gray-700 font-medium">📢 New Library Books Added</p>
              <p className="text-gray-400 text-sm">Posted 3 weeks ago</p>
            </li>
          </ul>
        </div>

        {/* Recent Students */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recently Added Students</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <p className="text-gray-700 font-medium">Alen Anto</p>
              <p className="text-gray-400 text-sm">Class 10A</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-700 font-medium">Maria Joseph</p>
              <p className="text-gray-400 text-sm">Class 9B</p>
            </li>
            <li className="flex justify-between">
              <p className="text-gray-700 font-medium">Rahul Menon</p>
              <p className="text-gray-400 text-sm">Class 12C</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
    
    
    </>
  )
}

export default Home