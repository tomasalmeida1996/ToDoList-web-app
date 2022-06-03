import axios from 'axios'
const tasksAPIURL = 'http://localhost:8080/api/'+'tasks';

export function getTasks(userId) {
    console.log("getTasks tasks",tasksAPIURL+'?userId='+userId)
    return axios.get(tasksAPIURL+'?userId='+userId);
}

export function addTask(task) {
    console.log('addTask',[tasksAPIURL, task])
    return axios.post(tasksAPIURL, task);
}

export function updateTask(id, task) {
    return axios.put(`${tasksAPIURL}/${id}`, task);
}

export function deleteTask(id) {
    return axios.delete(`${tasksAPIURL}/${id}`);
}