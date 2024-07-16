import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "../api/Apendpoints";

const { Deleterequestdata } = Endpoints;

const DeleteRequest = async (deleteid: string) => {
  try {
    const deleteddata = await axiosInstance.delete(`${Deleterequestdata}/${deleteid}`);
    return deleteddata.data.data; // Return relevant data from backend response
  } catch (error) {
    throw new Error(`Error deleting request`);
  }
};

export const Usedelete = () => {
  return useMutation({
    mutationKey: ['deleterequest'], // Unique key for this mutation
    mutationFn: (deleteid: string) => DeleteRequest(deleteid),
    // Optionally, handle onSuccess, onError, etc.
    // onSuccess: (data) => {
    //   console.log('Delete request successful:', data);
    // },
    // onError: (error) => {
    //   console.error('Error deleting request:', error);
    // },
  });
};
