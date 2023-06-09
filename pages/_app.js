// top top level of next app
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
import { Analytics } from '@vercel/analytics/react';



export default function App({ Component, pageProps }) {
  return (
  <div>
  
  {/* main page where things come from */}
 
  <Component {...pageProps} />
  <Analytics />
 
 
  <footer className="text-center items-center text-white">
    © Anthony Wells {new Date().getFullYear()} GPLv3
  </footer>
  </div>
  )
}
