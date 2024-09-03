import { Endpoints } from "../api/Apendpoints"
const {Donordonationstats} = Endpoints;
import axiosInstance from "../api/axiosInterceptor";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import base64 from "base-64"

const getDonordonationstats = async ()=>{
    const donorId = Cookies.get('email') || '';
    const encodedEmail = base64.encode(donorId)
    const response = await axiosInstance.get(`${Donordonationstats}/${encodedEmail}`);
    return response.data;
}



export const UseDonorDonationStats = ()=>{
return useQuery({queryKey:['donordonationstats'],queryFn:getDonordonationstats, staleTime: 1000,
    refetchInterval: 1000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",});
}