import React, { useState } from "react";
import Header from "../componets/Header";

function AddStudent() {
  const [studentData, setStudentData] = useState({
    studentDetails: {
     name: "", 
     email: "",
     course: "",
     phone: "",
     address: ""
     }
  });
  ///
  const handleChange = (e) => {
  const { name, value } = e.target;
  setStudentData((prev) => ({
    studentDetails: {
      ...prev.studentDetails,
      [name]: value,
    },
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, course, phone, address } = studentData.studentDetails;

    if (!name || !email || !course || !phone || !address ) {
      alert("All fields are required!");
      return;
    }

    try {
      const result = await addStudentAPI(studentData.studentDetails);
      console.log(result);
      alert("Added successfully!");
      // window.location = "/login";
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Add Student
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                placeholder="Enter student name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                placeholder="Enter student email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Course
              </label>
              <input
                type="text"
                name="course"
                value={studentData.course}
                onChange={handleChange}
                placeholder="Enter course name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={studentData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Address
              </label>
              <textarea
                name="address"
                value={studentData.address}
                onChange={handleChange}
                placeholder="Enter address"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddStudent;
