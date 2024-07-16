import { axiosInstance } from "../api/axiosInterceptor";
import Cookies from "js-cookie";
import { Endpoints } from "../api/Apendpoints";
import { useQuery } from "@tanstack/react-query";
const {Totaldonordonation} = Endpoints

const Donordetails = async () => {
  try {
    const token = Cookies.get("token");

    const response = await axiosInstance.get(Totaldonordonation, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

    return response.data.data; // Assuming response.data contains the required data
  } catch (error) {
    throw new Error("Failed to fetch user profile");
  }
};

export const UseUserDonationDetails= () => {
  return useQuery({queryKey:['donordetails'], queryFn:Donordetails});
};
