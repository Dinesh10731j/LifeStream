import { Endpoints } from "../api/Apendpoints";
const { Userhistory } = Endpoints;
import { axiosInstance } from "../api/axiosInterceptor";
import { useQuery } from "@tanstack/react-query";

const ViewHistory = async (id: string) => {
    try {
        const response = await axiosInstance.get(`${Userhistory}/${id}`);
        return response.data.data;
    } catch {
        throw new Error("Failed to fetch the View History");
    }
}

export const UseViewHistory = (id: string ) => {
    return useQuery({queryKey:['viewuserhistory', id], queryFn:() => ViewHistory(id)})
     
}

