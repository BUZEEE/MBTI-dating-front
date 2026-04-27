import { useState } from "react";
import type { MatchUser } from "../types/match";
import { likeUser } from "../api/matchApi";

interface MatchCardProps {
  user: MatchUser;
}

const MatchCard = ({ user }: MatchCardProps) => {
  const [liked, setLiked] = useState(user.liked);

  const handleLike = async () => {
    try {
      await likeUser(user.id);
      setLiked(true);
    } catch (error) {
      console.error("좋아요 실패:", error);
    }
  };

  return (
    <div style={cardStyle}>
      <div style={topStyle}>
        <div>
          <strong style={nameStyle}>{user.name}</strong>
          <span style={scoreStyle}>{user.matchRate}점</span>
        </div>

        <button onClick={handleLike} style={heartButtonStyle}>
          {liked ? "♥" : "♡"}
        </button>
      </div>

      <p style={infoStyle}>
        {user.age}세 · {user.grade} · {user.mbti}
      </p>

      <p style={textStyle}>📍 {user.meetingLocation}</p>

      <p style={textStyle}>✧ {user.hobbyCategory}</p>
      <p style={detailStyle}>{user.hobbyDetail}</p>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  width: "320px",
  padding: "22px",
  borderRadius: "14px",
  backgroundColor: "#ffffff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
};

const topStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const nameStyle: React.CSSProperties = {
  fontSize: "18px",
  marginRight: "10px",
};

const scoreStyle: React.CSSProperties = {
  padding: "4px 9px",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #6366f1, #ec4899)",
  color: "white",
  fontSize: "12px",
  fontWeight: 700,
};

const heartButtonStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "#f3f4f6",
  fontSize: "24px",
  cursor: "pointer",
};

const infoStyle: React.CSSProperties = {
  marginTop: "12px",
  fontSize: "14px",
};

const textStyle: React.CSSProperties = {
  marginTop: "14px",
  fontSize: "14px",
};

const detailStyle: React.CSSProperties = {
  marginTop: "4px",
  fontSize: "13px",
  color: "#334155",
};

export default MatchCard;