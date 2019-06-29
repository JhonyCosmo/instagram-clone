import axios from 'axios';

const URL_PRINCIPAL='http://10.0.0.102:3333';

const api = axios.create({
    baseURL:URL_PRINCIPAL,    
});

export default api;
export {api,URL_PRINCIPAL};