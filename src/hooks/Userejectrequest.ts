import axiosInstance from "../api/axiosInterceptor";
import { Endpoints } from "../api/Apendpoints";
import { useMutation } from "@tanstack/react-query";
const { Rejectrequest } = Endpoints;
const rejectRequest = async (rejectId: string) => {
  try {
    const response = await axiosInstance.put(`${Rejectrequest}/${rejectId}`);

    return response.data;
  } catch {
    throw new Error("Failed to reject the request");
  }
};

export const UseRejectRequest = () => {
  return useMutation({
    mutationKey: ["rejectrequest"],
    mutationFn: rejectRequest,
  });
};
