import commonAPI from "./commonAPI";
import BASEURL from "./serviceURL";


// add userdata API 
 export const addUserAPI=async(reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/users`,reqbody)
 }
 // get user
export const getUserByEmailAPI = async (email) => {
  return await commonAPI("GET", `${BASEURL}/users?email=${email}`, {});
};
// add studentdata API
  export const addStudentAPI = async (reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/studentdata`,reqbody)
  }
// update StudentDAta APi
 export const updateStudentAPI = async (id, reqbody) => {
  return await commonAPI("PUT",`${BASEURL}/studentdata/${id}`, reqbody); // PUT or PATCH based on backend
};

// get studentdata API
  export const getStudentAPI =async()=>{
    return await commonAPI("GET",`${BASEURL}/studentdata`)
  }
  //delete student data
  export const deleteStudentDataAPI = async(id)=> {
    return await commonAPI("delete",`${BASEURL}/studentdata/${id}`)
}
//post status attendance
export const studentStatusAPI = async (id, updatedStudent) => {
  return await commonAPI("PUT", `${BASEURL}/studentdata/${id}`, updatedStudent);
};
// add attendence status
 export const addAttendenceAPI =async(reqbody)=>{
  return await commonAPI("POST",`${BASEURL}/attendance/`,reqbody)
 }
 // get attendance status
 export const getAttendanceAPI =async()=>{
  return await commonAPI("GET",`${BASEURL}/attendance`)
 }

