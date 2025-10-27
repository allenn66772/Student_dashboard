import React, { useEffect, useState } from 'react';
import { getAttendanceAPI } from '../../service/allAPI';
import HeaderTh from '../componets/HeaderTh';
import Footer from '../componets/Footer'
import Header from '../componets/Header';

function Showattendance() {
  const [attendanceList, setAttendanceList] = useState([]);

  const fetchAttendance = async () => {
    try {
      const result = await getAttendanceAPI();

      if (result?.status === 200 && Array.isArray(result.data)) {
        setAttendanceList(result.data);
      } else {
        setAttendanceList([]);
      }
    } catch (error) {
      console.error(error);
      setAttendanceList([]);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <>
    <Header/>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Students Attendance
        </h1>
  {/* 
        {attendanceList.length === 0 && (
          <p className="text-gray-600">No attendance records found</p>
        )} */}
  
        {attendanceList.map((record, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              Date: {record?.date || "Unknown"}
            </h2>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(record?.attendance) && record.attendance.length > 0 ? (
                record.attendance.map((student, i) => (
                  <div
                    key={student?.id || i}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {student?.name || "Unknown Student"}
                    </h3>
                    <span
                      className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
                        student?.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {student?.status || "No Status"}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No student attendance data</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
   
  );
}

export default Showattendance;
