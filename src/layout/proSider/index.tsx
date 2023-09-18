import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div onClick={() => navigate("/")}>首页</div>
      <div onClick={() => navigate("/demo")}>Demo</div>
      <div onClick={() => navigate("/demo/subDemo")}>子路由</div>
    </div>
  );
};

export default Index;
