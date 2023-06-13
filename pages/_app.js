// top top level of next app
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import 'tailwindcss/tailwind.css'



export default function App({ Component, pageProps }) {
  return (
  <div className="bg-green-900">
  <Navbar />
  
  {/* main page where things come from */}
 
  <Component {...pageProps} />
 
 
  <footer className=" flex text-center ">
    © Anthony Wells {new Date().getFullYear()} GPLv3
  </footer>
  </div>
  )
}
