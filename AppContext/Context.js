import React, { useState } from 'react';

// Creamos el contexto utilizando React.createContext
export const AppContext = React.createContext(null);

// Creamos un componente que envuelve nuestra aplicación
const AppWrapper = (props) => {
  // Definimos los datos y funciones que queremos compartir con los componentes hijos
  const [counter, setCounter] = useState(0);

  return (
    // Usamos el AppContext.Provider para proveer el valor del contexto
    <AppContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppWrapper;

