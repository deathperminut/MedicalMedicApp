import React from "react";
import axios from "axios";
import { environment } from "../../../environments/environments";

const getMedicDates=async(token)=>{
    const path=environment.api+environment.getMedicDates;
    console.log(path)
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return await axios.get(path,config);
  }

export {getMedicDates};