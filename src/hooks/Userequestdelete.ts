import axiosInstance from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query"; // Correct import from react-query
import { Endpoints } from "../api/Apendpoints";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Deleterequestdata } = Endpoints;

const DeleteRequest = async (deleteid: string) => {
  try {
    const deleteddata = await axiosInstance.delete(`${Deleterequestdata}/${deleteid}`);
    return deleteddata.data.data;
  } catch (error) {
    throw new Error(`Error deleting request`);
  }
};

export const Usedelete = () => {
  return useMutation({
    mutationKey: ['deleterequest'],
    mutationFn: async (deleteid: string) => {
      try {
        const data = await DeleteRequest(deleteid);
        toast.success('Request deleted successfully');
        return data;
      } catch (error) {
        toast.error('Failed to delete request');
        throw new Error('failed');
      }
    },
  });
};
