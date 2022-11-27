import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css'

type NextPageWithLatout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLatout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
