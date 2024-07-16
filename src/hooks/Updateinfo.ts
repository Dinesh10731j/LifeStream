import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "../api/Apendpoints";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";




const Userinfoupdate = async (updatedinfo: any) => {
  const token = Cookies.get("token");
  const userid = Cookies.get('email') || ''
  try {
    const response = await axiosInstance.patch(Endpoints.UpdateInfo(userid), updatedinfo,{
      headers:{
        Authorization:`Bearer ${token}`
      }

    });
  
    return response.data.data; // Assuming response.data already contains the required data
  } catch (error) {
    throw new Error("Update failed");
  }
};

export const UseUserInfoUpdate= (_userid?:string) => {
    const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ['userinfoupdate'],
    mutationFn:Userinfoupdate,
    onSuccess: () => {

      setTimeout(()=>{
        navigate("/donor");
    
      },2000);


      toast.success("Peronsl Information Updated");
  

     
       
      
    },
    onError: () => {
      toast.error("Failed to update personal information!")
    },
  });

  return mutation;
};
