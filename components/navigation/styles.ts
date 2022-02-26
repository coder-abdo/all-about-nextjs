import { css } from '@emotion/react';

const navigationStyles = css`
  max-width: var(--page-width);
  width: 90%;
  position: relative;
  top: -3ch;
  display: flex;
  justify-content: space-between;
  font-size: 2.5rem;
  margin: 0 auto;
  padding: 1.5ch 5ch;
  background-color: var(--page-background);
  a,
  a:hover {
    color: var(--color-accent);
  }
`;

export { navigationStyles };
