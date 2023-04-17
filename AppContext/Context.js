import React, { useState } from 'react';

// Creamos el contexto utilizando React.createContext
export const AppContext = React.createContext(null);

// Creamos un componente que envuelve nuestra aplicación
const AppWrapper = (props) => {
  // AUTH
  var [userData, setUserData] = useState(null);
  var [token, setToken] = useState(null);

  // DATE

  var [currentDate,setCurrentDate]=useState(null);
  var [historyDates,setHistoryDates]=useState([]);

  //BENEFICIENT

  var [listBeneficient,setListBeneficient]=useState([]);
  var [selectBeneficient,setSelectBeneficient]=useState(null);

  // DATEMANAGEMENT

  var [patient,setPatient]=useState(null);
  var [step,setStep]=useState(0);

  //Logout

  const Logout=()=>{
   
    setUserData(null)
    setToken(null)
    setCurrentDate(null)
    setHistoryDates([])
    setListBeneficient([])
    setSelectBeneficient(null)
    setPatient(null)

  }

  return (
    // Usamos el AppContext.Provider para proveer el valor del contexto
    <AppContext.Provider value={{ Logout,userData, setUserData, token, setToken , currentDate, setCurrentDate,historyDates,setHistoryDates,listBeneficient,setListBeneficient,selectBeneficient,setSelectBeneficient,
    patient,setPatient,step,setStep}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppWrapper;

