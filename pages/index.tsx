import Page from '@layouts/page';
import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <Page
      meta={{
        title: 'Devlog',
        description: 'the website of the john doe',
      }}
    />
  );
};

export default Home;
