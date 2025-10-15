import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
  /* 重置常见元素 */
  body,
  button,
  dd,
  dl,
  dt,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  input,
  li,
  ol,
  p,
  pre,
  td,
  th,
  ul,
  div,
  section,
  figure,
  figcaption,
  main,
  header,
  footer {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 链接样式 */
  a {
    color: ${(props) => props.theme.colors.text.light};
    text-decoration: none;
  }

  /* 图片对齐 */
  img {
    vertical-align: top;
  }

  /* 列表样式 */
  ul,
  ol {
    list-style: none;
  }
`;
