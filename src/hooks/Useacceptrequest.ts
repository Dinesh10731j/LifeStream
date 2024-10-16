import axiosInstance from "../api/axiosInterceptor";
import { Endpoints } from "../api/Apendpoints";
import { useMutation } from "@tanstack/react-query";
const { Acceptrequest } = Endpoints;
const acceptRequest = async (acceptId: string) => {
  try {
    const response = await axiosInstance.put(`${Acceptrequest}/${acceptId}`);
    return response.data;
  } catch {
    throw new Error("Failed to accept the request");
  }
};

export const UseAcceptRequest = () => {
  return useMutation({
    mutationKey: ["acceptrequest"],
    mutationFn: acceptRequest,
  });
};
