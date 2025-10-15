import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Test: FC<IProps> = memo(function Test() {
  return <div>Test</div>;
});

export default Test;
