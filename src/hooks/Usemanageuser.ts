import { Endpoints } from "../api/Apendpoints";
const { Getusers } = Endpoints;
import axiosInstance from "../api/axiosInterceptor";
import { useQuery } from "@tanstack/react-query";
const ManageUsers = async () => {
  try {
    const UsersResponse = await axiosInstance.get(Getusers);

    return UsersResponse.data.data;
  } catch (err) {
    throw new Error("Error while fetching data");
  }
};

export const UseManageUsers = () => {
  return useQuery({ queryKey: ["allusers"], queryFn: ManageUsers, staleTime: 1000,
    refetchInterval: 1000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always", });
};
