import axios from "axios";
import moment from 'moment-timezone';
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
    DATE['datetime_arrival'] = moment().tz(moment.tz.guess()).format();
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
    DATE['datetime_output'] = moment().tz(moment.tz.guess()).format();
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

  const Whatsapp_message_salida =async(cellphone,latitude,longitude)=>{
    // environment.api
      let path= 'https://graph.facebook.com/v17.0/123796670819506/messages';
      let  Token_cellphone ='EAAEGaX3qVSoBO3DYSMwxsHBv4Lr644U5Jf9DZBbH1q6vMmRqvZCEq92NOtDo7ZCGmoJXZCZAZCt81nzvLkSFRBUuf2reTXkmZBabn3uXeLiVgT4dJZCZAhLdahn7SJwZCmfArSZC5pFAz9WhwgilsLG4mqsZCrg8XXJnXHFvgPPdA12dm54JC42GrH2R3B4kZBBZCH' // TOKEN PERMANENTE
      /* HEADER */
      let config = {
          headers: {
            Authorization: 'Bearer ' + Token_cellphone,
          },
      };
      let body= {
        "messaging_product": "whatsapp",
        "to": "57"+cellphone,
        "type": "template",
        "template": {
            "name": "ubicacion",
            "language": {
                "code": "en"
            }
            ,
        "components": [
            {
            "type": "header",
            "parameters": [
              {
                "type": "location",
                "location": {
                  "longitude": longitude,
                  "latitude": latitude,
                  "name":"Doctor location",
                  "address":"Doctor location"
                }
              }
            ]
          }
           
        ]
            
            
        }
      }
      console.log("BODY AGENDADA; ",body)
      return await axios.post(path, body, config)
    
    }


    const Whatsapp_message_time =async(cellphone,time, timeStart)=>{
      // environment.api
        let path= 'https://graph.facebook.com/v17.0/123796670819506/messages';
        let  Token_cellphone ='EAAEGaX3qVSoBO3DYSMwxsHBv4Lr644U5Jf9DZBbH1q6vMmRqvZCEq92NOtDo7ZCGmoJXZCZAZCt81nzvLkSFRBUuf2reTXkmZBabn3uXeLiVgT4dJZCZAhLdahn7SJwZCmfArSZC5pFAz9WhwgilsLG4mqsZCrg8XXJnXHFvgPPdA12dm54JC42GrH2R3B4kZBBZCH' // TOKEN PERMANENTE
        /* HEADER */
        let config = {
            headers: {
              Authorization: 'Bearer ' + Token_cellphone,
            },
        };
        const dateObject = new Date(timeStart);

        // Obtener la hora, los minutos y los segundos
        const horas = dateObject.getHours();
        const minutos = dateObject.getMinutes();
        let date = `${horas}:${minutos < 10 ? `0${minutos}` : minutos}`;
        let body= {
          "messaging_product": "whatsapp",
          "to": "57"+cellphone,
          "type": "template",
          "template": {
              "name": "time",
              "language": {
                  "code": "en"
              }
              ,
          "components": [
              {
              "type": "body",
              "parameters": [
                {
                  "type": "text",
                  "text": date
                }
              ]
            }
             
          ]
              
              
          }
        }
        console.log("BODY AGENDADA; ",body)
        return await axios.post(path, body, config)
      }
  
    const Whatsapp_message_llegada =async(cellphone,latitude,longitude)=>{
      // environment.api
        let path= 'https://graph.facebook.com/v17.0/123796670819506/messages';
        let  Token_cellphone ='EAAEGaX3qVSoBO3DYSMwxsHBv4Lr644U5Jf9DZBbH1q6vMmRqvZCEq92NOtDo7ZCGmoJXZCZAZCt81nzvLkSFRBUuf2reTXkmZBabn3uXeLiVgT4dJZCZAhLdahn7SJwZCmfArSZC5pFAz9WhwgilsLG4mqsZCrg8XXJnXHFvgPPdA12dm54JC42GrH2R3B4kZBBZCH' // TOKEN PERMANENTE
        /* HEADER */
        let config = {
            headers: {
              Authorization: 'Bearer ' + Token_cellphone,
            },
        };
        let body= {
          "messaging_product": "whatsapp",
          "to": "57"+cellphone,
          "type": "template",
          "template": {
              "name": "llegada_destino",
              "language": {
                  "code": "es"
              }
              ,
          "components": [
              {
              "type": "header",
              "parameters": [
                {
                  "type": "location",
                  "location": {
                    "longitude": longitude,
                    "latitude": latitude,
                    "name":"Doctor location",
                    "address":"Doctor location"
                  }
                }
              ]
            }
             
          ]
              
              
          }
        }
        console.log("BODY AGENDADA; ",body)
        return await axios.post(path, body, config)
      
      }



  export {Whatsapp_message_time,Whatsapp_message_llegada,Whatsapp_message_salida,getActivities,generateService,cancelService,getActiveService,UpdateDate,retrieveMedicalSchedule,DatesDoctors,UpdateDate_Arrive,UpdateDate_FINISH};