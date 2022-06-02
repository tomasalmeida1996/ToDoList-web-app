import axios from 'axios'
const tasksAPIURL = 'http://localhost:8080/api/'+'tasks';

export function getTasks() {
    console.log("getTasks tasks",tasksAPIURL)
    return axios.get(tasksAPIURL);
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