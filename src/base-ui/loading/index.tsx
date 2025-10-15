import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { LoadingWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Loading: FC<IProps> = memo(function Loading() {
  return (
    <LoadingWrapper>
      <div className="spinner"></div>
      <div className="loading-text">Loading...</div>
    </LoadingWrapper>
  );
});

export default Loading;
