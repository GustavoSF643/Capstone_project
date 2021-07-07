import axios from "axios";

const api = axios.create({
    baseURL: "https://capstone-fake-api.herokuapp.com/"
})

export default api;