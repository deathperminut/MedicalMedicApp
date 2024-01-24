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
    let date = moment();
    const year = date.year();
    const month = date.month() + 1;
    const day = date.date();
    const hour = date.hours();
    const minutes = date.minutes();
    let dateArrival = `${year}-${month}-${day}T${hour}:${minutes}`;
    DATE['datetime_arrival'] = dateArrival;
    if (DATE.activity === 2) {
      DATE['status']='EN CAMINO';
    }
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
    let date = moment();
    const year = date.year();
    const month = date.month() + 1;
    const day = date.date();
    const hour = date.hours();
    const minutes = date.minutes();
    let dateOutput = `${year}-${month}-${day}T${hour}:${minutes}`;
    DATE['datetime_output'] = dateOutput;
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

  const Whatsapp_message_salida =async(cellphone, latitude, longitude)=>{
    // environment.api
      let path= 'https://graph.facebook.com/v17.0/123796670819506/messages';
      let  Token_cellphone ='EAAEGaX3qVSoBO3DYSMwxsHBv4Lr644U5Jf9DZBbH1q6vMmRqvZCEq92NOtDo7ZCGmoJXZCZAZCt81nzvLkSFRBUuf2reTXkmZBabn3uXeLiVgT4dJZCZAhLdahn7SJwZCmfArSZC5pFAz9WhwgilsLG4mqsZCrg8XXJnXHFvgPPdA12dm54JC42GrH2R3B4kZBBZCH' // TOKEN PERMANENTE
      /* HEADER */
      let config = {
          headers: {
            Authorization: 'Bearer ' + Token_cellphone,
          },
      };
      let location = await getLocationNow(latitude, longitude);
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
                  "name": location.data.results[0].formatted_address,
                  "address": location.data.results[0].formatted_address
                }
              }
            ]
          }
           
        ]
            
            
        }
      }
      console.log("BODY AGENDADA; ",body)
      return await axios.post(path, body, config)
    
    };

  const whatsAppMessagePhoneCallPatient = async (cellphone) => {
    // environment.api
    let path = "https://graph.facebook.com/v17.0/123796670819506/messages";
    let tokenCellphone =
      "EAAEGaX3qVSoBO3DYSMwxsHBv4Lr644U5Jf9DZBbH1q6vMmRqvZCEq92NOtDo7ZCGmoJXZCZAZCt81nzvLkSFRBUuf2reTXkmZBabn3uXeLiVgT4dJZCZAhLdahn7SJwZCmfArSZC5pFAz9WhwgilsLG4mqsZCrg8XXJnXHFvgPPdA12dm54JC42GrH2R3B4kZBBZCH"; // TOKEN PERMANENTE
    /* HEADER */
    let config = {
      headers: {
        Authorization: "Bearer " + tokenCellphone,
      },
    };
    let body = {
      messaging_product: "whatsapp",
      to: "57" + cellphone,
      type: "template",
      template: {
        name: "appointment_phone_patient",
        language: {
          code: "en",
        },
        components: [
          {
            type: "header",
          },
        ],
      },
    };
    return await axios.post(path, body, config);    
  };

  const whatsAppMessagePhoneCallDoctor = async (cellphone, user) => {
    // environment.api
    let path = "https://graph.facebook.com/v17.0/123796670819506/messages";
    let tokenCellphone =
      "EAAEGaX3qVSoBO3DYSMwxsHBv4Lr644U5Jf9DZBbH1q6vMmRqvZCEq92NOtDo7ZCGmoJXZCZAZCt81nzvLkSFRBUuf2reTXkmZBabn3uXeLiVgT4dJZCZAhLdahn7SJwZCmfArSZC5pFAz9WhwgilsLG4mqsZCrg8XXJnXHFvgPPdA12dm54JC42GrH2R3B4kZBBZCH"; // TOKEN PERMANENTE
    /* HEADER */
    let config = {
      headers: {
        Authorization: "Bearer " + tokenCellphone,
      },
    };
    let name = user.second_name ? `${user.name} ${user.second_name} ${user.last_name}` : `${user.name} ${user.last_name}`;
    let body = {
      messaging_product: "whatsapp",
      //to: "57" + cellphone,
      to: "573206640327",
      type: "template",
      template: {
        name: "appointment_phone_doctor",
        language: {
          code: "en",
        },
        components: [
          {
            type: "body",
            "parameters": [
              {
                "type": "text",
                "text": name
              },
              {
                "type": "text",
                "text": user.cellphone_number
              }
            ]
          },
        ],
      },

    };
    return await axios.post(path, body, config);    
  };

    const getLocationNow = async (latitude, longitude) => {
      const apiKey = 'AIzaSyCw4GK9llNdu3RvbmsW25xp1P3b8WghL6w';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}&language=es`
      return await axios.get(url);
    };

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
        const durationInMinutes = time / 60;
        const now = new Date();

        const arrivalTime = new Date(now.getTime() + durationInMinutes * 60000);
        const hours = arrivalTime.getHours();
        const minutes = arrivalTime.getMinutes();
        const formattedArrivalTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
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
                  "text": formattedArrivalTime
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
        let location = await getLocationNow(latitude, longitude);
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
                    "name": location.data.results[0].formatted_address,
                    "address": location.data.results[0].formatted_address
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



  export {Whatsapp_message_time,Whatsapp_message_llegada,Whatsapp_message_salida,getActivities,generateService,cancelService,getActiveService,UpdateDate,retrieveMedicalSchedule,DatesDoctors,UpdateDate_Arrive,UpdateDate_FINISH, whatsAppMessagePhoneCallPatient, whatsAppMessagePhoneCallDoctor};