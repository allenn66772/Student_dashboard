import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Headernew from "../componets/Headernew";

function Landingpage() {
  const features = [
    {
      icon: <FaUsers className="text-blue-600 text-4xl mb-3" />,
      title: "Manage Students",
      desc: "Add, update, and track student information easily.",
    },
    {
      icon: <FaClipboardList className="text-green-600 text-4xl mb-3" />,
      title: "Attendance Tracking",
      desc: "Monitor and record student attendance effortlessly.",
    },
    {
      icon: <FaChartLine className="text-purple-600 text-4xl mb-3" />,
      title: "Performance Insights",
      desc: "Visualize grades and progress with interactive dashboards.",
    },
  ];

  return (
    <>
    <Headernew/>
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-start px-6 py-16 overflow-y-auto">
  {/*  Hero Section */}
  <motion.div
    className="text-center max-w-3xl mt-10"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
      Smart Student Management System
    </h1>
    <p className="text-gray-600 text-base sm:text-lg mb-8">
      Manage your students, attendance, and performance all in one place — simple, fast, and efficient.
    </p>

    <Link
      to="/signin"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition duration-300"
    >
      Get Started
    </Link>
  </motion.div>

  {/*  Feature Section */}
  <motion.div
    className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    {features.map((item, index) => (
      <div
        key={index}
        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition"
      >
        {item.icon}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </motion.div>

  {/*  CTA Section */}
  <motion.div
    className="mt-20 bg-blue-600 text-white rounded-2xl shadow-lg p-10 text-center max-w-4xl w-full mb-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
      Ready to simplify student management?
    </h2>
    <p className="text-blue-100 mb-6">
      Start organizing your student data and performance tracking with ease.
    </p>
    <Link
      to="/signin"
      className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-100 transition duration-300"
    >
      Get Started Now
    </Link>
  </motion.div>
</div>
<Footer/>
    </>
  );
}

export default Landingpage;
