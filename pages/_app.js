// top top level of next app
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import 'tailwindcss/tailwind.css'



export default function App({ Component, pageProps }) {
  return (
  <div className=" bg-zinc-500">
  
  {/* main page where things come from */}
 
  <Component {...pageProps} />
 
 
  <footer className=" flex text-center ">
    © Anthony Wells {new Date().getFullYear()} GPLv3 (Footer add Logos)
  </footer>
  </div>
  )
}
