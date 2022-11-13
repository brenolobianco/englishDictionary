import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
    timeout: 5000,
  });
  
  export default api;