import { useLocation, useNavigate } from "react-router-dom";
import type { MatchUser } from "../types/match";
import MatchCard from "../components/MatchCard";

const MatchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const matchUsers = location.state as MatchUser[] | null;

  if (!matchUsers || matchUsers.length === 0) {
    return (
      <div style={pageStyle}>
        <h2>매칭 결과가 없습니다.</h2>
        <button onClick={() => navigate("/")}>프로필 입력으로 돌아가기</button>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <button onClick={() => navigate("/")} style={backButtonStyle}>
        ← 프로필 수정
      </button>

      <h1 style={titleStyle}>추천 매칭</h1>
      <p style={subTitleStyle}>
        {matchUsers[0]?.meetingStation}에서 만날 수 있는 분들
      </p>

      <div style={gridStyle}>
        {matchUsers.map((user) => (
          <MatchCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: "56px 120px",
  backgroundColor: "#fff5fb",
};

const backButtonStyle: React.CSSProperties = {
  border: "none",
  background: "transparent",
  fontSize: "14px",
  cursor: "pointer",
  marginBottom: "16px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 800,
  margin: 0,
};

const subTitleStyle: React.CSSProperties = {
  marginTop: "8px",
  marginBottom: "32px",
  color: "#1e293b",
};

const gridStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

export default MatchPage;