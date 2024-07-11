
import { axiosInstance } from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "../api/Apendpoints";
const {UserSignup} = Endpoints;

const Usersignup = async (signupdata: any)=>{
    const response = await axiosInstance.post(UserSignup,signupdata);

console.log(response.data);
    return response.data.data;



}



export const UseUserSignup = ()=>{

    const mutation = useMutation({mutationKey:['usersignup'],mutationFn:Usersignup,onSuccess:()=>{
        alert("User Register Successful")
    },onError:(error)=>{
        alert(error.message);
    }})

    return mutation;

}