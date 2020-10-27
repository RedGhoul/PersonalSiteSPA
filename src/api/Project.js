import axios from "axios";
import config from '../config/config';
const Get = () => {
    return axios.get(config.baseURL + `api/projects`);
};
const Create = (input, headers) => {
    return axios
        .post(
            config.baseURL + "/project/create",
            input,
            {
                headers: headers,
            }
        )
}
const Delete = (input, id, headers) => {
    return axios
        .post(
            config.baseURL + "/project/delete/" + id,
            input,
            {
                headers: headers,
            }
        )
}
const Update = (input, id, headers) => {
    return axios
        .post(
            config.baseURL + "/project/update/" + id,
            input,
            {
                headers: headers,
            }
        )
}
export default {
    Get,
    Create,
    Delete,
    Update
};
