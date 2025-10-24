import React from "react";
import Header from "../componets/Header";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Attendence() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
                  <th className="px-6 py-3 border-b border-gray-200 text-center">
                    Actions
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200">Email</th>
                  <th className="px-6 py-3 border-b border-gray-200">Course</th>
                  <th className="px-6 py-3 border-b border-gray-200">Phone</th>
                  <th className="px-6 py-3 border-b border-gray-200">
                    Address
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {/* Example Row 2 */}
                <tr className="hover:bg-gray-100 transition duration-200">
                  <td className="px-6 py-3">2</td>
                  <td className="px-6 py-3 font-medium text-gray-800">
                    Jane Smith
                  </td>
                  <td className="px-6 py-3 text-center">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Attendance
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Attendance"
                        // onChange={handleChange}
                      >
                        <MenuItem
                          sx={{
                            borderRadius: "5px", // or '50px' for pill shape
                            ":hover": {
                              backgroundColor: "#76ff03",
                            },
                          }}
                          value={"Present"}
                        >
                          Present
                        </MenuItem>
                        <MenuItem
                           sx={{marginTop:"2px",
                            borderRadius: "5px", // or '50px' for pill shape
                            ":hover": {
                              color:"white",backgroundColor: "red",
                            },
                          }}
                          value={"Absent"}
                        >
                          Absent
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </td>
                  <td className="px-6 py-3 text-gray-600 truncate max-w-[150px]">jane@example.com</td>
                  <td className="px-6 py-3 text-gray-600">MBA</td>
                  <td className="px-6 py-3 text-gray-600">9871234560</td>
                  <td className="px-6 py-3 text-gray-600 truncate max-w-[150px]">Mumbai, India</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendence;
