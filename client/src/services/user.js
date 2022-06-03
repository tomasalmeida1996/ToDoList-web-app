import axios from 'axios'
const tasksAPIURL = 'http://localhost:8080/api/'+'users';

export function userLogin(user) {
    console.log("userLogin tasks",[`${tasksAPIURL}/login`,user])
    return axios.post(`${tasksAPIURL}/login`, user);    
}
