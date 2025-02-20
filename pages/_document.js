// where we control teh layout
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <body class="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content p-4 overflow-x-hidden w-full outline outline-yellow-400 bg-customBg-primary">
        <div>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
