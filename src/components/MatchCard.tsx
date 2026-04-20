


interface Props {
  name: string;
  distance: number;
  matchRate: number;
}

const MatchCard = ({ name, distance, matchRate }: Props) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>거리: {distance} km</p>
      <p>매칭률: {matchRate}%</p>
      <button>선택</button>
    </div>
  );
};

export default MatchCard;