import axios from "axios";
import { environment } from "../../../environments/environments";

const getBeneficients=async(User,token)=>{
    

    let path=environment.api+environment.getBeneficients+User.id

    /* HEADER */

    let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
    };


    return await axios.get(path,config)

}

export {getBeneficients}