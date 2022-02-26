import { css } from '@emotion/react';
export const globalStyles = css`
  :root {
    --page-background: #222;
    --page-text: #ddd;
  }
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  hmtl {
    font-size: 62.5%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--page-background);
    color: var(--page-text);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
