// top top level of next app
import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import '../styles/tokens.css';
import { Analytics } from '@vercel/analytics/react';



export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      {/* main page where things come from */}
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
