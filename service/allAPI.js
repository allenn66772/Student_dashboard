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


