import { Endpoints } from "../api/Apendpoints";
import { axiosInstance } from "../api/axiosInterceptor";
import { useQuery } from "@tanstack/react-query";
const {DonationInfo} = Endpoints
const fetchdonationinfo = async ()=>{
    const response =  await axiosInstance.get(DonationInfo);



    return response.data
}



export const Usedonationinfo = ()=>{
return useQuery({queryKey:['donationinfo'],queryFn:fetchdonationinfo})

}