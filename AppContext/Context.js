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
  var [listNotifications,setListNotifications]=useState([{id:1}]);
  var [selectBeneficient,setSelectBeneficient]=useState(null);
  let [activities,setActivities]=React.useState([]);

  //NOTIFICATIONS

  let [Notification_basic_medic,setNotification_basic_medic]=React.useState([]);
  let [Notification_Maintenance_medic,setNotification_Maintenance_medic]=React.useState([]);

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
    setActivities([])
    //setCurrentPosition(null);
  }

  // LOCATION

  const [currentPosition, setCurrentPosition] = useState(null);

  return (
    // Usamos el AppContext.Provider para proveer el valor del contexto
    <AppContext.Provider value={{ 
      Notification_basic_medic,setNotification_basic_medic,
      Notification_Maintenance_medic,setNotification_Maintenance_medic,
      currentPosition, setCurrentPosition,
      activities,setActivities,
      listNotifications,setListNotifications,
      Logout,userData, setUserData, token, setToken , currentDate, setCurrentDate,historyDates,setHistoryDates,listBeneficient,setListBeneficient,selectBeneficient,setSelectBeneficient,
    patient,setPatient,step,setStep}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppWrapper;

