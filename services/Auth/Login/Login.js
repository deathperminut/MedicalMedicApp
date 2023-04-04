import axios from "axios";
import { environment } from "../../../environments/environments";

const initLogin=async(User)=>{
    
    /* LOGIN */

    let path=environment.api+environment.logIn

    /* BODY */

    let body={

        identification:User.identification,
        password:User.password,

    }

    return await axios.post(path,body)

}

const GetName=(Date)=>{
    
    let Dates={...Date};
    let name=Date.name;
    if(Dates.second_name===null){
      Dates['second_name']='';
    }
    if(Dates.last_name===null){
      Dates['last_name']='';
    }
    if(Dates.second_last_name===null){
      Dates['second_last_name']='';
    }

    try {
      name=name+' '+Dates.second_name+' '+Dates.last_name+' '+Dates.second_last_name;
    } catch (error) {
      name=name;
    }
    return name;
}

const GetName_Beneficient=(Date)=>{
    
  let Dates={...Date};
  let name=Date.first_name;
  if(Dates.second_name===null){
    Dates['second_name']='';
  }
  if(Dates.last_name===null){
    Dates['last_name']='';
  }
  if(Dates.second_last_name===null){
    Dates['second_last_name']='';
  }

  try {
    name=name+' '+Dates.second_name+' '+Dates.last_name+' '+Dates.second_last_name;
  } catch (error) {
    name=name;
  }
  return name;
}




export {initLogin,GetName,GetName_Beneficient}