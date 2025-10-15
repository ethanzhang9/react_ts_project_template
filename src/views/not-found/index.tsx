import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFoundWrapper } from "./style";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      {/* 星空背景 */}
      <div className="stars">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          ></span>
        ))}
      </div>

      {/* 页面主要内容 */}
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <button className="notfound-button" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </NotFoundWrapper>
  );
};

export default NotFound;
