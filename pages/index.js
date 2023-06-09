import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import SmoothScroll from '@/components/SmoothScroll'


export default function Home() {
  return (
      <main>     
      <Head>
        <title>{`Anthony's Portfolio`}</title>
      </Head>
      <div className=' h-100% w-20 border border-emerald-800 border-solid'>Ok</div>
      <p className=' text-yellow-300'> I am king</p>
      </main>
  )
}

