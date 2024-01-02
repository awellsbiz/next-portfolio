// where we control teh layout
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior:'smooth'}}>
      <Head> 
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
