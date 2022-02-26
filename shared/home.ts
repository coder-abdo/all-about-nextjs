import { css } from '@emotion/react';
const SR_ONLY = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const container = css`
  padding: 2rem 0;
`;
const title = css`
  ${SR_ONLY}
`;
const main = css`
  background-color: var(--background-accent);
  min-height: 40vh;
  display: grid;
  place-items: center;
`;
export { container, title, main };
