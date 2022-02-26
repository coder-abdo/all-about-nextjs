import type { AppProps } from 'next/app';
import { globalStyles } from '@shared/globals';
import { Global } from '@emotion/react';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
