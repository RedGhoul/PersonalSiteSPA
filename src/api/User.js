import axios from "axios";
import config from '../config/config';
const signInUser = (username, password) =>{
    return axios.post(config.baseURL+`/auth/signin`, {
        username: username,
        password: password
    });
};

export default {
    signInUser
};