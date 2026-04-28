import type {
  MBTI,
  Grade,
  MeetingLocationCategory,
  HobbyCategory,
} from "../types/user";

export const MBTI_OPTIONS: MBTI[] = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];

export const GRADE_OPTIONS: Grade[] = [
  "1학년",
  "2학년",
  "3학년",
  "4학년",
];

export const MEETING_LOCATION_OPTIONS: MeetingLocationCategory[] = [
  "천안역",
  "두정역",
  "고속버스터미널",
  "영등포역",
  "백석대학교",
];

export const HOBBY_OPTIONS: HobbyCategory[] = [
  "운동",
  "독서",
  "여행",
  "음악",
  "영화 감상",
  "기타",
];