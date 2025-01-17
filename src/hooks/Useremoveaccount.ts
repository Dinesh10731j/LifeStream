import { Endpoints } from "../api/Apendpoints";
const { Removeaccount } = Endpoints;
import axiosInstance from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import {toast} from "react-toastify"
const removeAccount = async (userId:string) => {
  try {
  
    const response = await axiosInstance.delete(`${Removeaccount}/${userId}`);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occured");
    }
  }
};

export const UseRemoveAccount = () => {
  return useMutation({
    mutationKey: ["remove_account"],

    mutationFn: removeAccount,


    onSuccess:()=>{

        toast.success("Account removed successfully");

    },onError:()=>{
        toast.error("Failed to remove account")
    }
  });
};
