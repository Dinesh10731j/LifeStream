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
    console.log(response.data);
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
    onSuccess: () => {
   

      setTimeout(()=>{
        toast.success("Schedule successfully");
      },2000)
  

     
        navigate("/donor/viewdonationhistory");
      
    },
    onError: () => {
      toast.error("Schedule Failed!")
    },
  });

  return mutation;
};
