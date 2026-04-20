import { useState } from "react";

export type MeetingStationCategory =
  | "천안역"
  | "두정역"
  | "고속버스터미널"
  | "영등포역"
  | "백석대학교";

export const MEETING_STATION_CATEGORIES: MeetingStationCategory[] = [
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

interface UserRegisterRequest {
  name: string;
  age: number;
  region: string;
  mbti: string;
  hobbies: HobbyCategory[];
  meetingStations: MeetingStationCategory[];
  selectAge: number;
}

 export interface UserRegisterCardProps {
  onSubmit?: (data: UserRegisterRequest) => void;
}

const UserRegisterCard = ({ onSubmit }: UserRegisterCardProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [region, setRegion] = useState("");
  const [mbti, setMbti] = useState("");
  const [selectAge, setSelectAge] = useState("");
  const [hobbies, setHobbies] = useState<HobbyCategory[]>([]);
  const [meetingStations, setMeetingStations] = useState<MeetingStationCategory[]>([]);

  const handleHobbyToggle = (hobby: HobbyCategory) => {
    setHobbies((prev) =>
      prev.includes(hobby)
        ? prev.filter((item) => item !== hobby)
        : [...prev, hobby]
    );
  };

  const handleStationToggle = (station: MeetingStationCategory) => {
    setMeetingStations((prev) =>
      prev.includes(station)
        ? prev.filter((item) => item !== station)
        : [...prev, station]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !age.trim() ||
      !region.trim() ||
      !mbti.trim() ||
      !selectAge.trim()
    ) {
      alert("이름, 나이, 지역, MBTI, 선호 나이는 꼭 입력해주세요.");
      return;
    }

    if (hobbies.length === 0) {
      alert("취미를 1개 이상 선택해주세요.");
      return;
    }

    if (meetingStations.length === 0) {
      alert("만남 거점을 1개 이상 선택해주세요.");
      return;
    }

    const requestData: UserRegisterRequest = {
      name: name.trim(),
      age: Number(age),
      region: region.trim(),
      mbti: mbti.trim().toUpperCase(),
      hobbies,
      meetingStations,
      selectAge: Number(selectAge),
    };

    console.log("회원가입 데이터:", requestData);

    if (onSubmit) {
      onSubmit(requestData);
    }
  };

  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #d9d9d9",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: 700 }}>
        회원 정보 입력
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>나이</label>
          <input
            type="number"
            placeholder="나이를 입력하세요"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>지역</label>
          <input
            type="text"
            placeholder="예: 천안"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>MBTI</label>
          <input
            type="text"
            placeholder="예: INTP"
            value={mbti}
            onChange={(e) => setMbti(e.target.value)}
            style={inputStyle}
            maxLength={4}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>취미</label>
          <div style={optionContainerStyle}>
            {HOBBY_CATEGORIES.map((hobby) => (
              <button
                type="button"
                key={hobby}
                onClick={() => handleHobbyToggle(hobby)}
                style={{
                  ...chipStyle,
                  backgroundColor: hobbies.includes(hobby) ? "#222" : "#f3f3f3",
                  color: hobbies.includes(hobby) ? "#fff" : "#222",
                }}
              >
                {hobby}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label>만남 거점</label>
          <div style={optionContainerStyle}>
            {MEETING_STATION_CATEGORIES.map((station) => (
              <button
                type="button"
                key={station}
                onClick={() => handleStationToggle(station)}
                style={{
                  ...chipStyle,
                  backgroundColor: meetingStations.includes(station)
                    ? "#3b82f6"
                    : "#f3f3f3",
                  color: meetingStations.includes(station) ? "#fff" : "#222",
                }}
              >
                {station}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>선호 나이</label>
          <input
            type="number"
            placeholder="선호하는 상대 나이"
            value={selectAge}
            onChange={(e) => setSelectAge(e.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={submitButtonStyle}>
          등록하기
        </button>
      </form>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
};

const optionContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "10px",
};

const chipStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: "999px",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 500,
};

const submitButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "12px",
  backgroundColor: "#111827",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
};

export default UserRegisterCard;