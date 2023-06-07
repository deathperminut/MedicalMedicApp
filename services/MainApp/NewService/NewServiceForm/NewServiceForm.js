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


  const UpdateDate=async (DATE,Token)=>{
    const path=environment.api+environment.updateAppointment;
    let config = {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    };
    /* SOLO ACTUALIZAMOS EL STATUS */
    DATE['status']='EN CAMINO';
    return await axios.post(path,DATE,config);
  }

  const UpdateDate_Arrive=async (DATE,Token)=>{
    const path=environment.api+environment.updateAppointment;
    let config = {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    };
    /* SOLO ACTUALIZAMOS EL STATUS */
    DATE['datetime_arrival']=new Date();
    return await axios.post(path,DATE,config);
  }

  const UpdateDate_FINISH=async (DATE,Token)=>{
    const path=environment.api+environment.updateAppointment;
    let config = {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    };
    /* SOLO ACTUALIZAMOS EL STATUS */
    DATE['datetime_output']=new Date();
    DATE['status']='FINALIZADO';
    return await axios.post(path,DATE,config);
  }

  const retrieveMedicalSchedule = async(token) => {
    const path = environment.api + environment.getAllEmployeeSchedule;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    };
    return await axios.get(path,config);
  };

  const DatesDoctors=(Dates)=>{
    if(Dates.length===0){
      return [];
    }else{
      let DatesCalendar=[];
      for (var i=0;i<Dates.length;i++){
  
        //let name=GetName(Dates[i]);
        //let title=name+'/'+getAge(ArrayDatesWithDoctor[i].birthday)+" Años"+'/'+ArrayDatesWithDoctor[i].address+'/'+'#AF49E1';
        let event={
          //title:title,
          start:new Date(Dates[i].start),
          end:new Date(Dates[i].end),
          resourceId:Dates[i].user_id,
          isDraggable:true,
          id:Dates[i].id,
        }
        DatesCalendar.push(event);
      }
      return DatesCalendar;
    }
    
  };



  export {getActivities,generateService,cancelService,getActiveService,UpdateDate,retrieveMedicalSchedule,DatesDoctors,UpdateDate_Arrive,UpdateDate_FINISH};