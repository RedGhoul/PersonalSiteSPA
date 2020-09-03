import axios from "axios";
import config from '../config/config';

const Get = () => {
    return axios.get(config.baseURL + `/workexperience`);
};
const Delete = (headers, id) => {
    return axios.post(config.baseURL + `/workexperience/delete/` + id, {},
        { headers: headers });
};
const Create = (headers, input) => {
    return axios.post(config.baseURL + `/workexperience/create/`, input,
        { headers: headers });
};
const Update = (headers, input, id) => {
    return axios.post(config.baseURL + `/workexperience/update/` + id, input,
        { headers: headers });
}
export default {
    Get,
    Delete,
    Create,
    Update
};
