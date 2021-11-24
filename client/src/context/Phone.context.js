import React, { createContext, useState, useEffect } from 'react';
// import { fetchList } from "../services/api-calls";
import clientAxios from '../services/config-axios';

export const PhoneContext = createContext();
const PhoneProvider = (props) => {
  const [phoneData, setPhonedata] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPhoneData = async () => {
    setLoading(true);
    try {
      const res = await clientAxios.get('/phones');
      const phoneList = res.data.phones;
      setPhonedata(phoneList);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhoneData();
  }, []);

  return (
    <PhoneContext.Provider
      value={{
        phoneData,
        loading
      }}
    >
      {props.children}
    </PhoneContext.Provider>
  );
};

export default PhoneProvider;
