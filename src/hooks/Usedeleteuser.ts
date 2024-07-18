import { Endpoints } from "../api/Apendpoints";
import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";

const {Deleteuser} = Endpoints
const RemoveUsers = async (user_id:string)=>{
    try{


        const response = await axiosInstance.delete(`${Deleteuser}/${user_id}`)

return response.data.data;



    }catch{

        throw new Error("Failed to delete the user")

        

    }

}



export const UseRemoveUser = ()=>{

    return useMutation({mutationKey:['removeruser'],mutationFn:RemoveUsers})

}