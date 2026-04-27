export type MBTI =
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export type Grade =
  | "1학년"
  | "2학년"
  | "3학년"
  | "4학년";

export type MeetingLocationCategory =
  | "천안역"
  | "두정역"
  | "고속버스터미널"
  | "영등포역"
  | "백석대학교";

export type HobbyCategory =
  | "운동"
  | "독서"
  | "여행"
  | "음악"
  | "영화 감상"
  | "기타";

export interface UserRegisterRequest {
  name: string;
  age: number;
  mbti: MBTI | "";
  grade: Grade | "";
  meetingLocation: MeetingLocationCategory | "";
  hobbyCategory: HobbyCategory | "";
  hobbyDetail: string;
  contact: string;
  agree: boolean;
  instagram_id: string;
}