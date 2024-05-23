import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(+e.target.value);
        }}
      />
      <Link to={`/detail/${num}`}>
        번째 Detail 페이지로 이동 (입력이 없으면 0번째로 이동합니다)
      </Link>
    </div>
  );
};

export default Home;
