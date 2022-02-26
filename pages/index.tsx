import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '@components/Header';
import { main } from '@shared/home';
import Navigation from '@components/navigation';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>All About Next JS</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main css={main}>
        <Header />
        <Navigation />
      </main>
    </>
  );
};

export default Home;
