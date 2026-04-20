export interface MatchRate {
    match_rate: number;
}

export interface MatchRequest {
  user_id: number;
  limit?: number; // 기본 5
}

export interface MatchUser {
  user_id: number;
  name: string;
  age: number;
  mbti: string;
  meetingStations: string[];
  hobbies: string[];
  match_rate: number;
}

export interface MatchResponse {
  matches: MatchUser[]; // 이미 높은 순으로 정렬된 상태
}


export const getMatches = async (
  userId: number
): Promise<MatchResponse> => {
  const response = await fetch(
    `http://127.0.0.1:8000/match?user_id=${userId}&limit=5`
  );

  if (!response.ok) {
    throw new Error("매칭 데이터를 가져오지 못했습니다");
  }

  return await response.json();
};
