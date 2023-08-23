import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>My Portfólio</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
