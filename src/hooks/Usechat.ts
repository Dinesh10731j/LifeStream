import axiosInstance from "../api/axiosInterceptor";
import { Endpoints } from "../api/Apendpoints";
import { useMutation } from "@tanstack/react-query";
const {Chat} = Endpoints
const chatbot = async (question:string)=>{
    try{

        const response = await axiosInstance.post(Chat,{question});
        return response.data;
    }catch(error:unknown){

        if(error instanceof Error){
            throw new Error(error.message);
        }else{
            throw new Error("An unknown error occured");
        }
    }
}


export const UseChatBot = ()=>{
    return useMutation({mutationKey:['chatbot'],mutationFn:chatbot})
}