import  { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplates</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starte t work with Typescript,NextJs and Styled Component"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
