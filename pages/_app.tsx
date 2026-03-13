import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ubaith Sherif – AI & Software Developer</title>
        <meta name="description" content="Portfolio of Ubaith Sherif – AI & Data Science student and software developer building machine learning applications and full-stack systems." />
        <meta name="keywords" content="Ubaith Sherif, AI Developer, Machine Learning, Computer Vision, React Native, Portfolio" />
        <meta property="og:title" content="Ubaith Sherif – AI & Software Developer" />
        <meta property="og:description" content="Building AI-powered systems, machine learning applications, and full-stack software that solve real-world problems." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
