import React, { useState } from "react";
import { FaUserTie, FaLock, FaEnvelope, FaUserPlus } from "react-icons/fa";
import { addUserAPI } from "../../service/allAPI";
import { Link } from "react-router-dom";

function Signin() {
  const [userData, setuserData] = useState({
    userDetails: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = userData.userDetails;

    if (!name || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const result = await addUserAPI(userData.userDetails);
      console.log(result);
      alert("Added successfully!");
      window.location="/login";
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <FaUserPlus className="text-4xl text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Teacher Sign Up</h1>
          <p className="text-gray-500 text-sm">
            Create your account to manage students
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-gray-50 focus-within:border-indigo-500">
              <FaUserTie className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full bg-transparent outline-none text-gray-700"
                value={userData.userDetails.name}
                onChange={(e) =>
                  setuserData({
                    ...userData,
                    userDetails: {
                      ...userData.userDetails,
                      name: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-gray-50 focus-within:border-indigo-500">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-700"
                value={userData.userDetails.email}
                onChange={(e) =>
                  setuserData({
                    ...userData,
                    userDetails: {
                      ...userData.userDetails,
                      email: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-gray-50 focus-within:border-indigo-500">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-gray-700"
                value={userData.userDetails.password}
                onChange={(e) =>
                  setuserData({
                    ...userData,
                    userDetails: {
                      ...userData.userDetails,
                      password: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-gray-50 focus-within:border-indigo-500">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                className="w-full bg-transparent outline-none text-gray-700"
                value={userData.userDetails.confirmPassword}
                onChange={(e) =>
                  setuserData({
                    ...userData,
                    userDetails: {
                      ...userData.userDetails,
                      confirmPassword: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-5">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-indigo-600 hover:underline cursor-pointer">
              Login here
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
