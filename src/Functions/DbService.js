import axios from "axios";
import { encrypt } from "./Encript"
// const url = "https://quiet-mesa-11047.herokuapp.com/Users";
const url = "http://localhost:8080/Users";

export const update = (id, param) => {
    return axios.patch(`${url}/${id}`, param);
}

export const create = async (param) => {
    let userPassword = await encrypt(param.password);
    let user = await axios.get(url, {params:{email: param.email}});
    if (user.data.length > 0) {
        return true
    } else {
        axios.post(url, {...param, password: userPassword});
        return false
    }
}

export const fetch = (email) => {
    return axios.get(url, {params:{email: email}});
}