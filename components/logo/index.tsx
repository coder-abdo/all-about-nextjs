import { IoMdPlanet as Saturn } from 'react-icons/io';
import { css } from '@emotion/react';
const saturn = css`
  position: relative;
  top: 0.2em;
`;
const logoStyle = css`
  color: var(--color-text-invert);
  font-size: 7rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
`;
export const Logo = () => (
  <span css={logoStyle}>
    DEVL
    <Saturn css={saturn} />G
  </span>
);
