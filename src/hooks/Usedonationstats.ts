import { Endpoints } from "../api/Apendpoints";
import axiosInstance from "../api/axiosInterceptor";
import { useQuery } from "@tanstack/react-query";

const {Donationstats} = Endpoints;


const getDonationstats = async ()=>{

    try{

        const statsresponse = await axiosInstance.get(Donationstats);

        return statsresponse.data.data;

    }catch{
        throw new Error('Failedto fecth  data')
    }

}


export const UsegetDonationstats = ()=>{
    return useQuery({queryKey:['donationstats'],queryFn:getDonationstats, staleTime: 1000,
        refetchInterval: 1000,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",})
}