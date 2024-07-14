import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "../api/Apendpoints";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const {Scheduledonation} = Endpoints;

const Userschedule = async (scheduledata: any) => {
  try {
    const response = await axiosInstance.post(Scheduledonation, scheduledata);
    return response.data.data; // Assuming response.data already contains the required data
  } catch (error) {
    throw new Error("Schedule failed");
  }
};

export const UseUserSchedule = () => {
    const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: ['usersScheduledonation'],
    mutationFn: Userschedule,
    onSuccess: (data) => {
    
        console.log('This is ',data);
   

      setTimeout(()=>{
             
        navigate("/history");
     
      },2000);

      toast.success("New Schedule created successfully");
  


      
    },
    onError: () => {
      toast.error("Schedule Failed!")
    },
  });

  return mutation;
};
