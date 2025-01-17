import axiosInstance from "../api/axiosInterceptor";
import { Endpoints } from "../api/Apendpoints";
import { useQuery } from "@tanstack/react-query";
const { Receiptantoverview } = Endpoints;
const receiptantOverview = async () => {
  try {
    const response = await axiosInstance.get(Receiptantoverview);
  
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occured");
    }
  }
};

export const UseReceiptantOverview = () => {
  return useQuery({
    queryKey: ["receiptantoverview"],
    queryFn: receiptantOverview,
    staleTime:1000,
    refetchInterval:1000,
    refetchOnMount:'always',
    refetchOnReconnect:'always',
    retry:1000,
    refetchOnWindowFocus:'always'
  });
};
