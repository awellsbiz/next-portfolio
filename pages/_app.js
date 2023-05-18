// top top level of next app
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  {/* main page where things come from */}
  <Component {...pageProps} />
  <footer>
    © Anthony Wells {new Date().getFullYear()} GPLv3
  </footer>
  </>
  )
}
