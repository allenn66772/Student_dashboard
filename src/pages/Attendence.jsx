import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import { addAttendenceAPI, getStudentAPI } from "../../service/allAPI";
import Footer from "../componets/Footer";

function Attendence() {
  const [studentData, setStudentData] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [date, setDate] = useState(""); // date state

  const getAllData = async () => {
    try {
      const result = await getStudentAPI();
      if (result.status === 200) {
        setStudentData(result.data);
      } else {
        alert("Network error");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const handleAttendanceChange = (studentId, value) => {
    setAttendanceData(prevState => ({
      ...prevState,
      [studentId]: value
    }));
  };

  const addAttendance = async () => {
    if (!date) {
      alert("Please choose a date");
      return;
    }

    if (Object.keys(attendanceData).length === 0) {
      alert("Please mark attendance for students");
      return;
    }

    const submitData = {
      date: date,
      attendance: attendanceData
    };

    try {
      const result = await addAttendenceAPI(submitData);
      console.log(result);
      alert("Attendance submitted successfully");

      setAttendanceData({});
      setDate("");
    } catch (error) {
      console.error(error);
      alert("Failed to submit attendance");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8">
          
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Student Attendance
          </h2>

          {/* Date Selector */}
          <div className="mb-6 flex justify-end items-center gap-3">
            <label className="text-lg font-medium text-gray-700">
              Select Date:
            </label>
            <input
              type="date"
              className="border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-blue-600 text-white text-xs uppercase font-semibold">
                <tr>
                  <th className="px-6 py-3 border-b">#</th>
                  <th className="px-6 py-3 border-b">Name</th>
                  <th className="px-6 py-3 border-b text-center">Attendance</th>
                  <th className="px-6 py-3 border-b">Email</th>
                  <th className="px-6 py-3 border-b">Course</th>
                  <th className="px-6 py-3 border-b">Phone</th>
                  <th className="px-6 py-3 border-b">Address</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {studentData.length > 0 ? (
                  studentData.map((student, index) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-3">{index + 1}</td>
                      <td className="px-6 py-3">{student.name}</td>

                      {/* Attendance Dropdown */}
                      <td className="px-6 py-3 text-center">
                        <select
                          className="border border-gray-300 rounded-md px-3 py-1"
                          value={attendanceData[student.id] || ""}
                          onChange={(e) =>
                            handleAttendanceChange(student.id, e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option  value="Present">Present</option>
                          <option value="Absent">Absent</option>
                        </select>
                      </td>

                      <td className="px-6 py-3">{student.email}</td>
                      <td className="px-6 py-3">{student.course}</td>
                      <td className="px-6 py-3">{student.phone}</td>
                      <td className="px-6 py-3 truncate max-w-[150px]">
                        {student.address}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-6 text-gray-400">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              onClick={addAttendance}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg"
            >
              Submit
            </button>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Attendence;
