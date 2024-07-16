import { axiosInstance } from "../api/axiosInterceptor";
import { Endpoints } from "../api/Apendpoints";
import { useMutation } from "@tanstack/react-query";
const { Editrequest } = Endpoints;
const EditReceiptantrequest = async (editid: string, editedData: any) => {
    const editResponse = await axiosInstance.patch(`${Editrequest}/${editid}`, editedData);
    return editResponse.data.data;
}

export const UseRecipientEditRequest = () => {
    return useMutation({
        mutationKey: ['editreceiptantrequest'],
        mutationFn: ({ editid, editedData }:{ editid: string, editedData:any }) => EditReceiptantrequest(editid, editedData)
    });
}
