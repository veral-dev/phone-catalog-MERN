import React, { createContext, useState } from 'react';

export const AlertContext = createContext();
const AlertProvider = (props) => {
  const [toastMsg, setToastMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  return (
    <AlertContext.Provider
      value={{
        toastMsg,
        setToastMsg,
        errorMsg,
        setErrorMsg
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
