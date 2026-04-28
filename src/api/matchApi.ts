import api from "../Utils/axiosInterceptor";
import type { UserRegisterRequest } from "../types/user";
import type { MatchUser } from "../types/match";

/** 회원가입 응답 타입 */
export interface UserResponse {
  id: number;
  name: string;
  age: number;
  mbti: string;
  grade: string;
  meetingLocation: string;
  hobbyCategory: string;
  hobbyDetail: string;
  contact: string;
  agree: boolean;
  instagram_id: string;
}

/** 회원가입 */
export const registerUser = async (
  data: UserRegisterRequest
): Promise<UserResponse> => {
  const res = await api.post<unknown, UserResponse>("/users", data);
  return res;
};

/** 매칭 조회 */
export const getMatches = async (
  userId: number
): Promise<MatchUser[]> => {
  const res = await api.get<unknown, MatchUser[]>(`/matches/${userId}`);
  return res;
};

/** 좋아요 */
export const likeUser = async (userId: number): Promise<void> => {
  await api.post(`/like/${userId}`);
};