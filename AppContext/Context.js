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

  return (
    // Usamos el AppContext.Provider para proveer el valor del contexto
    <AppContext.Provider value={{ userData, setUserData, token, setToken , currentDate, setCurrentDate,historyDates,setHistoryDates,listBeneficient,setListBeneficient}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppWrapper;

