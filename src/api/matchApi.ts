import api from "../Utils/axiosInterceptor";
import type { UserRegisterRequest } from "../types/user";
import type { MatchUser } from "../types/match";

export const registerUser = async (
  data: UserRegisterRequest
): Promise<MatchUser[]> => {
  return await api.post("/users", data);
};

export const likeUser  = async(userId: number): Promise<void> =>{
    return await api.post('/like/${userId');
}