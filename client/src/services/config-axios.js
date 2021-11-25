import axios from 'axios';

const clientAxios = axios.create({
  // baseURL: 'http://localhost:5000/api'
  baseURL: 'https://phone-catalog-srv.herokuapp.com/api'
});

export default clientAxios;
