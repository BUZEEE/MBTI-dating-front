import React from "react";
import UserRegisterCard from "../components/UserRegisterCard";

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, rgb(255, 247, 250) 0%, rgb(240, 244, 255) 100%)",
};

const overlayStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
  boxSizing: "border-box",
};

const contentStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "900px",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  fontSize: "42px",
  fontWeight: 800,
  marginBottom: "12px",
  color: "#111827",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "18px",
  color: "#4b5563",
  marginBottom: "32px",
  lineHeight: 1.6,
};
const MainPage = () => {
  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <h1 style={titleStyle}>MBTI Dating</h1>
          <p style={descriptionStyle}>
            나와 잘 맞는 사람을 찾아보세요.
            <br />
            만남 거점, 취미, MBTI를 바탕으로 매칭합니다.
          </p>

          <UserRegisterCard />
        </div>
      </div>
    </div>
  );
};

export default MainPage;