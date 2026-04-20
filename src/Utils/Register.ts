export interface UserRegisterRequest {
  name: string;
  age: number;
  region: string;
  mbti: string;
  hobbies: string[];
  meetingStations: MeetingWantCategory[];
  selectAge: number;
}

export interface UserRegisterResponse {
  message: string;
  name: string;
  age: number;
  region: string;
  mbti: string;
  hobbies: string[];
  meetingStations: MeetingWantCategory[];
  selectAge: number;
}

export type MeetingWantCategory =
  | "천안역"
  | "두정역"
  | "고속버스터미널"
  | "영등포역"
  | "백석대학교";

export const MEETING_STATION_CATEGORIES: MeetingWantCategory[] = [
  "천안역",
  "두정역",
  "고속버스터미널",
  "영등포역",
  "백석대학교",
];

export type HobbyCategory =
  | "운동"
  | "독서"
  | "여행"
  | "음악"
  | "기타";

export const HOBBY_CATEGORIES: HobbyCategory[] = [
  "운동",
  "독서",
  "여행",
  "음악",
  "기타",
];

export interface HobbyItem {
  category: HobbyCategory;
  note: string;
}

export const sendHobby = async (
  data: HobbyItem
): Promise<HobbyItem> => {
  const response = await fetch("http://127.0.0.1:8000/hobby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("취미 요청 실패");
    throw new Error("취미 요청 실패");
  }

  return await response.json();
};

export const registerUser = async (
  data: UserRegisterRequest
): Promise<UserRegisterResponse> => {
  const response = await fetch("http://127.0.0.1:8000/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("사용자 등록 요청 실패");
  }

  return await response.json();
};

export const getUsers = async (): Promise<UserRegisterResponse[]> => {
  const response = await fetch("http://127.0.0.1:8000/users", {
    method: "GET",
  });

  if (!response.ok) {
    console.error("유저 데이터를 가져오지 못했습니다");
    throw new Error("유저 조회 실패");
  }

  return await response.json();
};