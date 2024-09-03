import axiosInstance from "../api/axiosInterceptor";
import Cookies from "js-cookie";
import { Endpoints } from "../api/Apendpoints";
import { useQuery } from "@tanstack/react-query";

const fetchReceiptentrequeshistory = async () => {
  try {
    const token = Cookies.get("token");

    const email = Cookies.get("email") || ''; 

    const response = await axiosInstance.get(Endpoints.Bloodrequesthistory(email), {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
    return response.data.data; 
  } catch (error) {
    throw new Error("Failed to fetch user profile");
  }
};

export const UseReceipentrequesthistory = (_email?: string) => {
  return useQuery({ queryKey:['bloodrequesthistory'], queryFn:fetchReceiptentrequeshistory, staleTime: 1000,
    refetchInterval: 1000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",});
};
