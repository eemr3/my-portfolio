import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/eemr3/recurso-portifolio/main/api',
});
