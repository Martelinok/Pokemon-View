import axios from "axios";

const url = "https://quiet-mesa-11047.herokuapp.com/Users";

export const update = (id, param) => {
    return axios.patch(`${url}/${id}`, param);
}

export const create = async (param) => {
    let user = await axios.get(url, {params:{email: param.email}});
    if (user.data.length > 0) {
        return true
    } else {
        axios.post(url, param);
        return false
    }
}

export const fetch = (email, password) => {
    return axios.get(url, {params:{email: email, password: password}});
}