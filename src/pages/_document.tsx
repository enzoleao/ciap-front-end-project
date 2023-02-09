import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Rubik:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Para adicionar ícone da marca */}
        {/* <link
            rel="shortcut icon"
            href="/mayo-player-icon.png"
            type="image/png"
          /> */}
      </Head>
      {/* <title>Sistema de Gestão de Prontuários do CIAP</title> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
