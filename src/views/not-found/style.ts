import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
    0%,
    100% {
      opacity: 0.2;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.3);
    }
`;

/* 浮动动画 */
const float = keyframes`
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
`;

const glow = keyframes`
    0%,
    100% {
      text-shadow:
        0 0 15px rgba(247, 37, 133, 0.8),
        0 0 30px rgba(72, 202, 228, 0.6);
    }
    50% {
      text-shadow:
        0 0 30px rgba(247, 37, 133, 1),
        0 0 60px rgba(72, 202, 228, 0.8);
    }
`;

export const NotFoundWrapper = styled.div`
  /* 容器整体布局 */
  position: relative;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, #0d1b2a 0%, #000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  font-family: "Segoe UI", sans-serif;

  /* 星空背景 */
  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0; /* ✅ 置于底层 */

    > .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      opacity: 0.6;
      animation: ${twinkle} ease-in-out infinite;
    }
  }

  /* 主体内容层 */
  > .notfound-content {
    position: relative;
    z-index: 1; /* ✅ 保证内容在星空上方 */
    text-align: center;
    animation: ${float} 4s ease-in-out infinite; /* 🌊 轻微浮动动画 */

    /* 发光的 404 */
    > .notfound-title {
      font-size: 10rem;
      font-weight: 900;
      color: transparent;
      background: linear-gradient(90deg, #00b4d8, #7209b7, #f72585);
      background-clip: text;
      -webkit-background-clip: text;
      text-shadow:
        0 0 20px rgba(247, 37, 133, 0.7),
        0 0 40px rgba(72, 202, 228, 0.5);
      animation: ${glow} 3s ease-in-out infinite;
    }

    /* 副标题文字 */
    > .notfound-text {
      margin-top: 10px;
      font-size: 1.2rem;
      color: #b0bec5;
    }

    /* 按钮样式 */
    > .notfound-button {
      margin-top: 40px;
      padding: 12px 32px;
      border: none;
      border-radius: 30px;
      background: linear-gradient(90deg, #4361ee, #7209b7);
      color: white;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px rgba(114, 9, 183, 0.5);
    }

    > .notfound-button:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(114, 9, 183, 0.8);
      background: linear-gradient(90deg, #7209b7, #f72585);
    }
  }
`;
