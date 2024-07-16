import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "../api/Apendpoints";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";

const {UserSignup} = Endpoints;

const Usersignup = async (signupdata: any) => {
  const token = Cookies.get("token");
  try {
    const response = await axiosInstance.post(UserSignup, signupdata,{
      headers:{
        Authorization:`Bearer ${token}`
      }

    });
   
    return response.data.data; // Assuming response.data already contains the required data
  } catch (error) {
    throw new Error("Signup failed");
  }
};

export const UseUserSignup = () => {
    const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ['usersignup'],
    mutationFn: Usersignup,
    onSuccess: (data) => {
      Cookies.set("token",data.token);
      Cookies.set("id",data._id);
      setTimeout(()=>{
        navigate("/login");
    
      },2000);


      toast.success("User Register Successful");
  

     
       
      
    },
    onError: () => {
      toast.error("User Registration Failed!")
    },
  });

  return mutation;
};
