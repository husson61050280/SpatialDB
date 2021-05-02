import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:8080'});

export const addDataPM = (dataPM) => API.post('/add' , dataPM)
export const Query_1 = (data) => API.post('/Query1' , data);
export const Query_2 = (data) => API.post('/Query2' , data);
export const feature1 = (data) => API.get("/feature1" , data)
export const feature2 = () => API.get("/feature2");
export const feature3 = () => API.get("/feature3");
export const feature4 = () => API.get("/feature4");
export const feature5 = () => API.get("/feature5");
export const feature6 = (data) => API.get("/feature6" , data);
