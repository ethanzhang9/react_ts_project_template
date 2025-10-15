import styled, { keyframes } from "styled-components";

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 占满整个视口 */
  background: linear-gradient(135deg, #ff6b6b, #ff8787); /* 红色渐变 */
  color: white;
  font-family: sans-serif;

  .spinner {
    width: 50px;
    height: 50px;
    border: 6px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 16px;
  }

  .loading-text {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
