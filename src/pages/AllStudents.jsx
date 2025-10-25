import React, { useEffect, useState } from "react";
import Header from "../componets/Header";
import {
  deleteStudentDataAPI,
  getStudentAPI,
  updateStudentAPI,
} from "../../service/allAPI";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import Footer from "../componets/Footer";

function AllStudents() {
  const [studentData, setStudentData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

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

  const handleOpen = (student) => {
    setSelectedStudent({ ...student });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const result = await updateStudentAPI(selectedStudent.id, selectedStudent);
      if (result.status === 200) {
        alert("Student updated successfully!");
        handleClose();
        getAllData();
      } else {
        alert("Update failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const dataDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const result = await deleteStudentDataAPI(id);
        if (result.status === 200) {
          alert("Student deleted successfully!");
          getAllData();
        } else {
          alert("Failed to delete student.");
        }
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Failed to delete student.");
      }
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-4 sm:p-6 lg:p-8 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-4 sm:mb-6">
            Student List
          </h2>

          {/*  Responsive Table Container */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-blue-600 text-white uppercase text-xs sm:text-sm font-semibold">
                <tr>
                  <th className="px-3 sm:px-6 py-3 border-b border-gray-200">#</th>
                  <th className="px-3 sm:px-6 py-3 border-b border-gray-200">
                    Name
                  </th>
                  <th className="px-3 sm:px-6 py-3 border-b border-gray-200">
                    Email
                  </th>
                  <th className="px-3 sm:px-6 py-3 border-b border-gray-200">
                    Course
                  </th>
                  <th className="px-3 sm:px-6 py-3 border-b border-gray-200">
                    Phone
                  </th>
                  <th className="px-3 sm:px-6 py-3 border-b border-gray-200">
                    Address
                  </th>
                  <th className="px-3 sm:px-6 py-3 border-b border-gray-200 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {studentData.length > 0 ? (
                  studentData.map((student, index) => (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-100 transition duration-200 text-xs sm:text-sm"
                    >
                      <td className="px-3 sm:px-6 py-3">{index + 1}</td>
                      <td className="px-3 sm:px-6 py-3 font-medium text-gray-800">
                        {student.name}
                      </td>
                      <td className="px-3 sm:px-6 py-3 text-gray-600 truncate max-w-[100px] sm:max-w-[150px]">
                        {student.email}
                      </td>
                      <td className="px-3 sm:px-6 py-3 text-gray-600">
                        {student.course}
                      </td>
                      <td className="px-3 sm:px-6 py-3 text-gray-600">
                        {student.phone}
                      </td>
                      <td
                        className="px-3 sm:px-6 py-3 text-gray-600 truncate max-w-[100px] sm:max-w-[150px]"
                        title={student.address}
                      >
                        {student.address}
                      </td>
                      <td className="px-3 sm:px-6 py-3 text-center flex flex-col sm:flex-row gap-2 sm:justify-center">
                        <button
                          onClick={() => handleOpen(student)}
                          className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => dataDelete(student.id)}
                          className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-md"
                        >
                          Remove
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

      {/*  Edit Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Student</DialogTitle>
        <DialogContent dividers>
          {selectedStudent && (
            <>
              {["name", "email", "course", "phone", "address"].map((field) => (
                <TextField
                  key={field}
                  margin="dense"
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  value={selectedStudent[field] || ""}
                  onChange={handleChange}
                  fullWidth
                />
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained" color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <Footer/>
    </>
  );
}

export default AllStudents;
