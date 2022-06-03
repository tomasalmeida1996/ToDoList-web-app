import axios from 'axios'
const usersAPIURL = 'http://localhost:8080/api/'+'users';

export function userLogin(user) {
    console.log("userLogin tasks",[`${usersAPIURL}/login`,user])
    return axios.post(`${usersAPIURL}/login`, user);    
}
export function userRegister(user) {
    console.log("userLogin tasks",[`${usersAPIURL}/register`,user])
    return axios.post(`${usersAPIURL}/register`, user);    
}

