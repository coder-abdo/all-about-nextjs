import { css } from '@emotion/react';
export const globalStyles = css`
  :root {
    --page-width: 80rem;
    --page-background: rgb(240, 240, 240);
    --page-text: rgb(40, 40, 40);
    --background-accent: rgb(3, 84, 133);
    --color-text-invert: rgb(240, 240, 240);
    --color-accent: rgb(4, 64, 100);
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
