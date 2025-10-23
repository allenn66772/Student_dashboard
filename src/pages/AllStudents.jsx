import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import { getStudentAPI } from "../../service/allAPI";

function AllStudents() {
  const [studentData, setStudentData] = useState([]); // store array directly

  // ✅ Fetch all students
  const getAllData = async () => {
    try {
      const result = await getStudentAPI();
      console.log("Result:", result);

      if (result.status === 200) {
        setStudentData(result.data); // now this is an array
      } else {
        alert("Network error");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Student List
          </h2>

          {/* Table Section */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-blue-600 text-white uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200">#</th>
                  <th className="px-6 py-3 border-b border-gray-200">Name</th>
                  <th className="px-6 py-3 border-b border-gray-200">Email</th>
                  <th className="px-6 py-3 border-b border-gray-200">Course</th>
                  <th className="px-6 py-3 border-b border-gray-200">Phone</th>
                  <th className="px-6 py-3 border-b border-gray-200">Address</th>
                  <th className="px-6 py-3 border-b border-gray-200 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {studentData.length > 0 ? (
                  studentData.map((student, index) => (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-100 transition duration-200"
                    >
                      <td className="px-6 py-3">{index + 1}</td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {student.name}
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        {student.email}
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        {student.course}
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        {student.phone}
                      </td>
                      <td className="px-6 py-3 text-gray-600">
                        {student.address}
                      </td>
                      <td className="px-6 py-3 text-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md mr-2">
                          Edit
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllStudents;
