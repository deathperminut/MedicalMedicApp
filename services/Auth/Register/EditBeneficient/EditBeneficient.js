import axios from "axios";
import { environment } from "../../../../environments/environments";

const deleteBeneficient=async(user,token)=>{

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data',
        },
    };

    
    /* LOGIN */
    let path=environment.api+environment.deleteBeneficient
    /* BODY */
    const body={
      id:user.id
    }
    return await axios.post(path,body,config)

}

const editBeneficient=async(user,token)=>{

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data',
        },
    };
    /* LOGIN */
    let path=environment.api+environment.editBeneficient
    const body = new FormData();
    body.append('id',user.id);
    body.append('first_name', user.name);
    body.append('second_name', user.second_name);
    body.append('last_name', user.last_name);
    body.append('second_last_name', user.second_last_name);
    body.append('email', user.email);
    body.append('phone', user.phone);
    body.append('identification', user.identification);
    body.append('department', user.department);
    body.append('city', user.city);
    body.append('coverage_city', user.coverage_city);
    body.append('address', user.address);
    body.append('date_birth', user.date_birth);
    body.append('is_beneficiary',"True");
    body.append('type_user', 'usuario');
    //body.append('photo_profile',user.photo_profile);
    body.append('profile_type', "Usuario");
    body.append('neighbourhood', user.neighbourhood);
    body.append('identification_type',user.identification_type);
    body.append('genre', user.genre);
    body.append("eps",user.eps);
    body.append("regime_type",user.regime_type);
    console.log(body);
    return await axios.post(path,body,config)

}

const editUser=async(user,token)=>{

  let config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
  };
  /* LOGIN */
  let path=environment.api+environment.editBeneficient
  const body = new FormData();
  body.append('id',user.id);
  body.append('first_name', user.name);
  body.append('second_name', user.second_name);
  body.append('last_name', user.last_name);
  body.append('second_last_name', user.second_last_name);
  body.append('email', user.email);
  body.append('phone', user.phone);
  body.append('identification', user.identification);
  body.append('department', user.department);
  body.append('city', user.coverage_city);
  body.append('coverage_city', user.coverage_city);
  body.append('address', user.address);
  body.append('date_birth', user.date_birth);
  body.append('is_beneficiary',"False");
  body.append('type_user', 'usuario');
  //body.append('photo_profile',user.photo_profile);
  body.append('profile_type', "Usuario");
  body.append('neighbourhood', user.neighbourhood);
  body.append('identification_type',user.identification_type);
  body.append('genre', user.genre);
  body.append("eps",user.eps);
  body.append("regime_type",user.regime_type);
  console.log(body);
  return await axios.post(path,body,config)

}

const getWareLocation= async ()=>{
  const path = environment.api + environment.getLocations;
  

   return await axios.get(path);

}

const getBarrios= async ()=>{
  const path = environment.api + environment.getBarriosLocation;


   return await axios.get(path);

}

const getBarriosByLocation= async (idLocation)=>{
  const path = environment.api + environment.getBarriosLocation + idLocation;

   return await axios.get(path);

}




export {getBarrios,deleteBeneficient,editBeneficient,editUser,getWareLocation,getBarriosByLocation}

