
export type PreferDistance = "같은 지역" | "3km ok" | "3키로 이상"

export interface DistanceMatch{
    user_id: number;
    prefer_distance: PreferDistance;
}

export interface DistanceMatchItem{
    user_id: number;
    name: string;
    age: number;
    region: string;
    mbti: string;
    distance_km: number;
    match_rate: Number;
}

export const getMatchDistance = async (
  data: DistanceMatch
): Promise<DistanceMatchItem[]> => {
  const response = await fetch("API 주소를 입력하시오", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("거리가 맞는 사람들을 데려오지 못했어요 ㅜㅜ");
    return [];
  }

  return await response.json();
};