
import { Endpoints } from "../api/Apendpoints";
const { Changerole } = Endpoints;
import axiosInstance from "../api/axiosInterceptor";
import { useMutation } from "@tanstack/react-query";

interface UserRoleData {
  role: string;
  _id: string;
}

const ChangeUserRole = async (userRoleData: UserRoleData) => {
  try {
    const {role, _id} = userRoleData;
 

    const response = await axiosInstance.put(`${Changerole}/${_id}`, { role });
   
    return response.data.data; 
  } catch (err) {
    throw new Error('Error while fetching role');
  }
}

export const UseChangeUserRole = () => {
  return useMutation({
    mutationKey: ['changerole'],
    mutationFn: (userRoleData: UserRoleData) => ChangeUserRole(userRoleData)
  });
}
