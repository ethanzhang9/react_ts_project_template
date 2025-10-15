import { createGlobalStyle } from "styled-components";

export const CommonStyle = createGlobalStyle`
    html {
        // 62.5% = 0.625 = 10 / 16
        font-size: 62.5%;
    }
    body {
        font-family: 'Segoe UI', sans-serif;
        font-size: 1.6rem; /* 16px */
    }
`;
