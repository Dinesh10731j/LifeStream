import axios from "axios";

const BaseUrl ="http://localhost:7200";


export const axiosInstance = axios.create({
    baseURL:BaseUrl
})