import axios from "axios";

const BaseUrl ="https://lifestream-api-1.onrender.com";


export const axiosInstance = axios.create({
    baseURL:BaseUrl
})