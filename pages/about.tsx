import type { NextPage } from 'next';
import Image from 'next/image';
import { css, keyframes } from '@emotion/react';
import { FaReact as ReactIcon } from 'react-icons/fa';
import Page from '@layouts/page';
const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;
const header = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2ch;
`;
const avatar = css`
  border-radius: 50%;
`;
const title = css`
  font-size: 2rem;
  font-weight: 200;
`;
const icon = css`
  margin-left: 1ch;
  position: relative;
  top: 5px;
  color: var(--color-accent);
  animation: ${rotate} 5s linear infinite;
`;
const bio = css`
  margin-top: 3ch;

  p {
    max-width: 60ch;
    margin: 0 auto;
  }
  > p + p {
    margin-top: 3ch;
  }
`;
const footer = css`
  margin-top: 5ch;
  text-align: right;
  margin-right: 3ch;
`;
const About: NextPage = () => {
  return (
    <Page
      meta={{
        title: 'About :: Devlog',
        description: 'John Doe biography',
      }}
    >
      <section css={header}>
        <Image
          css={avatar}
          src="/john-doe.jpg"
          alt="avatar"
          width={300}
          height={400}
        />
        <h2 css={title}>
          <span>john doe</span>
          <ReactIcon css={icon} />
        </h2>
      </section>
      <section css={bio}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          doloremque fugit quisquam, ipsum cum, impedit quod reprehenderit non
          eaque facere, iste aliquam? In atque ex obcaecati et accusamus nihil
          fugit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          perspiciatis reprehenderit officiis iusto iure nobis recusandae
          dolorum aut. Exercitationem unde laborum repudiandae mollitia
          pariatur, accusamus dolore repellat vitae ratione atque!
        </p>
      </section>
      <section css={footer}>
        <small>Source:</small>
        <a href="https://google.com" rel="noopener noreferrer" target="_blank">
          google
        </a>
      </section>
    </Page>
  );
};

export default About;
