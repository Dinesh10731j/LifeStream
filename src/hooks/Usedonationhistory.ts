import { axiosInstance } from "../api/axiosInterceptor";
import Cookies from "js-cookie";
import { Endpoints } from "../api/Apendpoints";
import { useQuery } from "@tanstack/react-query";
import base64 from "base-64"

const fetchDonorid = async () => {
  try {
   
const token = Cookies.get("token")
    const email = Cookies.get("email") || ''; // Ensure userid is treated as string
    const encodeEmail = base64.encode(email);

    const response = await axiosInstance.get(Endpoints.Donorhistory(encodeEmail), {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    return response.data.data; 
  } catch (error) {
    throw new Error("Failed to fetch donor history");
  }
};

export const UseUserdonationhistory = (_email?: string) => {
  return useQuery({ queryKey:['email'], queryFn:fetchDonorid});
};
