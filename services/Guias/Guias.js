import axios from 'axios';
import { environment } from '../../environments/environments';

const deleteDocument = async(documentId,token) => {
  const path = environment.api + environment.deleteDocument;
  let config = {
    headers: {
      Authorization: 'Bearer ' + token,
    }
  };

  let body={
    id:documentId
  }

  return await axios.post(path,body,config);

};

const insertDocument = async(Document,token) => {
    const path = environment.api + environment.pushDocument;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    };
    return await axios.post(path,Document,config);
  
  };

const getAreas = async(token) => {
    const path = environment.api + environment.getAreas;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    };
    return await axios.get(path,config);
};
const getDocumentsByArea = async(AreaId,token) => {
    console.log(AreaId)
    const path = environment.api + environment.returnDocumentsByArea+AreaId;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    };
    return await axios.get(path,config);
};
const getAllDocuments = async(token) => {
    const path = environment.api + environment.returnDocuments;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
    };
    return await axios.get(path,config);
};


export {getAreas,getDocumentsByArea,getAllDocuments,insertDocument,deleteDocument};