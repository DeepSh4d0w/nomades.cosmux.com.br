import Head from "next/head";
import "./globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nômades</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
