import { Endpoints } from "../api/Apendpoints";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInterceptor";
import Cookies from "js-cookie";
const {Managebloodrquest} = Endpoints;

const fetchManageBloodRequest = async  ()=>{
    const token = Cookies.get("token");

    const response = await axiosInstance.get(Managebloodrquest,{
        headers:{
            Authorization:`Bearer ${token}`

        }


    
    });


return response.data.data;

}


 export const UseManageBloodRequest = ()=>{
    return useQuery({queryKey:['managebloodrequest'],queryFn:fetchManageBloodRequest, staleTime: 1000,
        refetchInterval: 1000,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",})
}