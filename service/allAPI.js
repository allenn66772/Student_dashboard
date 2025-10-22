import commonAPI from "./commonAPI";
import BASEURL from "./serviceURL";


// add userdata API 
 export const addUserAPI=async(reqbody)=>{
    return await commonAPI("POST",`${BASEURL}/users`,reqbody)
 }