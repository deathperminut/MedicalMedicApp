import React from "react";
import axios from "axios";
import { environment } from "../../../environments/environments";

const getMedicDates=async(token)=>{
    const path=environment.api+environment.getMedicDates;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return await axios.get(path,config);
}

const getActiveDates=async(token)=>{
  const path=environment.api+environment.getActiveDate;
  let config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  return await axios.get(path,config);

}

export {getMedicDates,getActiveDates};
