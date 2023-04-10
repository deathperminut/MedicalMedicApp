import React from "react";
import axios from "axios";
import { environment } from "../../../environments/environments";

const getCompleteDates=async(user,token)=>{
    
    console.log("DATA: ",user);
    const path=environment.api+environment.getCompleteDates+user.identification;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return await axios.get(path,config);
  
  }

export {getCompleteDates};