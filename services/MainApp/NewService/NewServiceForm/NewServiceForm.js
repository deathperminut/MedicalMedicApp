import React from "react";
import axios from "axios";
import { environment } from "../../../../environments/environments";

const getActivities=async(token)=>{

    const path=environment.api+environment.datesActivities;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return await axios.get(path,config);
  
  }

  const generateService=async(service,token)=>{

    let path=environment.api+environment.generateService

    /* HEADER */

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
    };
    
    let body={
      identification:service.identification,
      activity:service.activity,
      type_user:service.type_user,
      description:service.description,
      desired_date:service.desired_date,
      status:"INGRESADA",
    }


    return await axios.post(path,body,config)

  }

  const cancelService=async(service,reason,token)=>{

    let path=environment.api+environment.cancelService

    /* HEADER */

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
    };
    
    let body={
      id:service.id,
      description:reason
    }


    return await axios.post(path,body,config)

  }

  const getActiveService=async(user,token)=>{

    let path=environment.api+environment.getActiveDate+user.identification

    /* HEADER */

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
    };
    


    return await axios.get(path,config)

  }



  export {getActivities,generateService,cancelService,getActiveService};