import axios from "axios";
import { environment } from "../../../../environments/environments";

const initRegister=async(user)=>{
    
    /* LOGIN */

    let path=environment.api+environment.RegisterUser

    /* BODY */
    const body = new FormData();
    body.append('first_name', user.firstName);
    body.append('second_name', user.secondName);
    body.append('last_name', user.firstLastname);
    body.append('second_last_name', user.secondLastname);
    body.append('date_joined', "");
    body.append('email', user.email);
    body.append('password', user.password1);
    body.append('phone', user.cellphone);
    body.append('identification', user.identification);
    body.append('department', user.department);
    body.append('city', user.city);
    body.append('coverage_city', user.coverageCity);
    body.append('date_birth', user.birthDate);
    body.append('description', '');
    body.append('is_beneficiary',"False");
    body.append('type_user', 'usuario');
    body.append('photo_profile', user.image);
    body.append('profile_type', "Usuario");
    body.append('neighbourhood', user.neighbourhood);
    body.append('identification_type',user.identification_type);
    body.append('genre', user.genre);
    body.append("eps",user.eps);
    body.append("occupation",user.occupation);
    body.append("regime_type",user.regime_type),
    body.append("insurer",user.insurer);

    return await axios.post(path,body)

}


export {initRegister}
