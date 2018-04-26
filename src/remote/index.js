import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
const instance = axios.create();

export const sendPOSTRequest = (destination, payload) => {
    return instance.post(destination, JSON.stringify(payload));
};

export const sendPUTRequest = (destination, payload) => {
    return instance.put(destination, JSON.stringify(payload));
};

export const sendDELETERequest = (destination) => {
    return instance.delete(destination);
};

export const sendGETRequest = (destination) => {
    return instance.get(destination);
};

export const sendFormDataRequest = (destination, formData, configs = {
    headers: {
        'content-type': 'multipart/form-data'
    }
}) => {
    return instance.post(destination, formData, configs);
};
