import { axiosInstance } from "../api/axiosInterceptor";
import Cookies from "js-cookie";
import { Endpoints } from "../api/Apendpoints";
import { useQuery } from "@tanstack/react-query";

const fetchReceiptentrequeshistory = async () => {
  try {
    const token = Cookies.get("token");

    const userid = Cookies.get("userid") || ''; // Ensure userid is treated as string

    const response = await axiosInstance.get(Endpoints.Bloodrequesthistory(userid), {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    console.log(response.data);
    return response.data.data; // Assuming response.data contains the required data
  } catch (error) {
    throw new Error("Failed to fetch user profile");
  }
};

export const UseReceipentrequesthistory = (_userid?: string) => {
  return useQuery({ queryKey:['userProfile'], queryFn:fetchReceiptentrequeshistory});
};
