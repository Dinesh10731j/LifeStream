import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Endpoints } from "../api/Apendpoints";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {Userlogin} = Endpoints;

const UserLogin = async (logindata: any) => {
  try {

    const token = Cookies.get("token");
    const response = await axiosInstance.post(Userlogin,logindata,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log(response.data);
    return response.data.data; // Assuming response.data already contains the required data
  } catch (error) {
    throw new Error("Login failed");
  }
};

export const UseUserLogin = () => {
    const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ['userslogin '],
    mutationFn: UserLogin,
    onSuccess: (data) => {
 
console.log(data.token);
       Cookies.set("token",data.token);
       Cookies.set("role", data.role);


 setTimeout(()=>{

    toast.success('Login Successful')

 },2000)

     navigate("/donor");
      
    },
    onError: () => {
      
    toast.error("Invalid crediantials!")
    },
  });

  return mutation;
};