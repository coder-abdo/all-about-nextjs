import Head from 'next/head';
import { ReactNode } from 'react';
import type { NextPage } from 'next';
import Header from '@components/Header';
import { main } from '@shared/home';
import Navigation from '@components/navigation';
import { siteMetaData } from 'config';
type metaProps = {
  title: string;
  description: string;
};
type pageProps = {
  meta: metaProps;
  children?: ReactNode;
};
const Page: NextPage<pageProps> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="twitter:site" content={siteMetaData.author.twitter} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
      </Head>
      <main css={main}>
        <Header />
        <Navigation />
        {children}
      </main>
    </>
  );
};

export default Page;
