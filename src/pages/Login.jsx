import React, { useState } from "react";
import { FaUserTie, FaLock } from "react-icons/fa";
import { getUserByEmailAPI } from "../../service/allAPI";
import { Link } from "react-router-dom";
import HeaderTh from "../componets/HeaderTh";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });




  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    // Validation
    if (!email || !password) {
      alert("Both email and password are required!");
      return;
    }

    try {
      // Get user by email from JSON Server
      const res = await getUserByEmailAPI(email);

      if (!res.data || res.data.length === 0) {
        alert("User not found! Please register first.");
        return;
      }

      const user = res.data[0];

      // Compare password
      if (user.password === password) {
        alert(`Welcome back, ${user.name}! 🎉`);

        // Optional: Save login session
        // localStorage.setItem("user", JSON.stringify(user));

        // Redirect to dashboard
        window.location.href = "/home";
      } else {
        alert("Incorrect password! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed! Please try again later.");
    }
  };

  return (
     
   <>
   <HeaderTh/>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <FaUserTie className="text-4xl text-indigo-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Teacher Login</h1>
            <p className="text-gray-500 text-sm">Access your dashboard securely</p>
          </div>
  
          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 mb-1 text-sm font-medium">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-gray-50 focus-within:border-indigo-500">
                <FaUserTie className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none text-gray-700"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
  
            <div>
              <label className="block text-gray-600 mb-1 text-sm font-medium">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl p-3 bg-gray-50 focus-within:border-indigo-500">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none text-gray-700"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>
  
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
            >
              Login
            </button>
          </form>
  
          {/* Footer Links */}
          <p className="text-center text-gray-500 text-sm mt-5">
            Don't have an account?{" "}
            <Link to="/signin">
              <span className="text-indigo-600 hover:underline cursor-pointer">
                Register
              </span>
            </Link>
          </p>
  
          {/* <p className="text-center text-gray-500 text-sm mt-2">
            Forgot password?{" "}
            <span className="text-indigo-600 hover:underline cursor-pointer">
              Reset here
            </span>
          </p> */}
        </div>
      </div>
   </>
  
  );
}

export default Login;
