import axios from "axios";

const api = axios.create({
    baseURL: 'Https://followupweb.herokuapp.com',
});



export default api;