import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Endpoints } from "../api/Apendpoints";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {UserSignup} = Endpoints;

const Usersignup = async (signupdata: any) => {
  try {
    const response = await axiosInstance.post(UserSignup, signupdata);
    console.log(response.data);
    return response.data; // Assuming response.data already contains the required data
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
   

      setTimeout(()=>{
        toast.success("User Register Successful");
      },2000)
  

     
        navigate("/login");
      
    },
    onError: () => {
      toast.error("User Registration Failed!")
    },
  });

  return mutation;
};
