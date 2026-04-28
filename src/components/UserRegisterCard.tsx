import { useState } from "react";
import type { UserRegisterRequest } from "../types/user";
import { useNavigate } from "react-router-dom";
import {
  MBTI_OPTIONS,
  GRADE_OPTIONS,
  MEETING_LOCATION_OPTIONS,
  HOBBY_OPTIONS,
} from "../constants/userOptions";
import { registerUser, getMatches } from "../api/matchApi";

const UserRegisterCard = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<UserRegisterRequest>({
    name: "",
    age: 20,
    mbti: "",
    grade: "",
    meetingLocation: "",
    hobbyCategory: "",
    hobbyDetail: "",
    contact: "",
    agree: false,
    instagram_id: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async () => {
    if(!form.name){
      alert("이름을 입력하세요");
      return
    }
    if(!form.mbti){
      alert("mbti를 선택해주세요");
      return
    }
    if(!form.grade){
      alert("학년을 선택해주세요")
      return
    }
    if(!form.meetingLocation){
      alert("데이트를 진행할 장소를 선택해주세요");
      return
    }
    if(!form.hobbyCategory){
      alert("취미 정보를 입력해주세여")
       return
    }

    if (!form.agree) {
      alert("개인정보 동의 필요");
      return;
    }

    try {
      const createdUser = await registerUser(form);
      const matchUsers = await getMatches(createdUser.id);
      navigate("/match", { state: matchUsers });
    } catch (error) {
      console.error("회원 정보 전송 실패:", error);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>회원 정보 입력</h2>

      <input
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
      />

      <select name="mbti" value={form.mbti} onChange={handleChange}>
        <option value="">MBTI 선택</option>
        {MBTI_OPTIONS.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select name="grade" value={form.grade} onChange={handleChange}>
        <option value="">학년 선택</option>
        {GRADE_OPTIONS.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      <select
        name="meetingLocation"
        value={form.meetingLocation}
        onChange={handleChange}
      >
        <option value="">장소 선택</option>
        {MEETING_LOCATION_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        name="hobbyCategory"
        value={form.hobbyCategory}
        onChange={handleChange}
      >
        <option value="">취미 선택</option>
        {HOBBY_OPTIONS.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>

      <textarea
        name="hobbyDetail"
        placeholder="취미 상세"
        value={form.hobbyDetail}
        onChange={handleChange}
      />

      <input
        name="contact"
        placeholder="연락처"
        value={form.contact}
        onChange={handleChange}
      />

      <input
        name="instagram_id"
        placeholder="인스타 ID"
        value={form.instagram_id}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        개인정보 수집 동의
      </label>

      <button onClick={handleSubmit}>시작하기</button>
    </div>
  );
};

export default UserRegisterCard;