import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "../api/Apendpoints";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const {Requestblood} = Endpoints;

const UsersRequest = async (requestdata: any) => {
  try {
    const response = await axiosInstance.post(Requestblood, requestdata);
    return response.data.data; 
  } catch (error) {
    throw new Error("Request failed");
  }
};

export const UseUserBloodRequest = () => {
    const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ['userbloodrequest'],
    mutationFn: UsersRequest,
    onSuccess: (data) => {
    
        console.log('This is ',data);
   

      setTimeout(()=>{
             
        navigate("/request-history");
     
      },2000);

      toast.success("New Request send successfully");
  


      
    },
    onError: () => {
      toast.error("Schedule Failed!")
    },
  });

  return mutation;
};
