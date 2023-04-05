import React, { useState } from 'react';

// Creamos el contexto utilizando React.createContext
export const AppContext = React.createContext(null);

// Creamos un componente que envuelve nuestra aplicación
const AppWrapper = (props) => {
  // AUTH
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  // DATE

  const [currentDate,setCurrentDate]=useState(null);
  const [historyDates,setHistoryDates]=useState([]);

  //BENEFICIENT

  const [listBeneficient,setListBeneficient]=useState([]);
  const [selectBeneficient,setSelectBeneficient]=useState(null);

  //Logout

  const Logout=()=>{
   
    setUserData(null)
    setToken(null)
    setCurrentDate(null)
    setHistoryDates([])
    setListBeneficient([])
    setSelectBeneficient(null)

  }

  return (
    // Usamos el AppContext.Provider para proveer el valor del contexto
    <AppContext.Provider value={{ Logout,userData, setUserData, token, setToken , currentDate, setCurrentDate,historyDates,setHistoryDates,listBeneficient,setListBeneficient,selectBeneficient,setSelectBeneficient}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppWrapper;

