import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();

  useEffect(() => {
    console.log(`${param.id}번째 Detail 페이지`);
  }, []);

  return <div>Detail {param.id}</div>;
};

export default Detail;
