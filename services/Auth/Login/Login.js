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
    console.log("Body: ",body)

    return await axios.post(path,body)

}



export {initLogin}