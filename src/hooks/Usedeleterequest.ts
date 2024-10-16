
import { Endpoints } from "../api/Apendpoints";
const { DeleteRequest } = Endpoints;
import axiosInstance from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";

interface requestType {
  requestId: string;
}

const deleteRequest = async (requestId: requestType) => {
  try {
    const response = await axiosInstance.delete(DeleteRequest,{
      data: requestId, 
    });
    return response.data;
  } catch{

    throw new Error('Failed to delete request');
  }
};



export const UseDeleteRequest = ()=>{
    return useMutation({mutationKey:['deleterequest'],mutationFn:deleteRequest});
}
