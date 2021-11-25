import React, { createContext, useState, useEffect, useContext } from 'react';
import clientAxios from '../services/config-axios';
import { AlertContext } from './Alert.context';

export const PhoneContext = createContext();
const PhoneProvider = (props) => {
  const [phoneData, setPhonedata] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setErrorMsg, setToastMsg } = useContext(AlertContext);

  const fetchPhoneData = async () => {
    setLoading(true);
    try {
      const res = await clientAxios.get('/phones');
      const phoneList = res.data.phones;
      setPhonedata(phoneList);
    } catch (error) {
      setErrorMsg(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const getPhone = async (id) => {
    try {
      const res = await clientAxios.get(`/phones/detail/${id}`);
      return res.data;
    } catch (error) {
      setErrorMsg(error.response.data);
    }
  };

  const createNewPhone = async (phone) => {
    try {
      const res = await clientAxios.post('/phones/create', phone);
      return res.data;
    } catch (error) {
      setErrorMsg(error.response.data);
    } finally {
      fetchPhoneData();
    }
  };
  const editPhone = async (phone) => {
    try {
      const res = await clientAxios.put(`/phones/update/${phone._id}`, phone);
      return res.data;
    } catch (error) {
      setErrorMsg(error.response.data);
    } finally {
      fetchPhoneData();
    }
  };

  const deletePhone = async (id) => {
    try {
      const res = await clientAxios.delete(`/phones/${id}`);
      if (res.data.ok) setToastMsg(res.data.ok);
    } catch (error) {
      setErrorMsg(error.response.data);
    } finally {
      fetchPhoneData();
    }
  };

  useEffect(() => {
    fetchPhoneData();
  }, []);

  return (
    <PhoneContext.Provider
      value={{
        phoneData,
        loading,
        createNewPhone,
        editPhone,
        deletePhone,
        getPhone
      }}
    >
      {props.children}
    </PhoneContext.Provider>
  );
};

export default PhoneProvider;
