import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8000'
  baseURL:'https://shivaniecom.onrender.com'
});

export default api;
