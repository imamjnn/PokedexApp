import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2';

const axiosCall = axios.create({
  baseURL,
  timeout: 30000,
});

export default axiosCall;
