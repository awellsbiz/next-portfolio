import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])


  return (

    <main className="container mx-auto mt-20 items-start min-h-screen py-2">     
      <Head>
        <title>{`Anthony's Portfolio`}</title>
      </Head> 
          
        <div className='flex'>
          <div className=' bg-neutral-500 p-8 mb-1 max-h-fit'>
              <Image
                src="/AnthonyWells.jpg"
                alt="Picture of the author"
                width={150}
                height={150}
                className="rounded-full mx-auto"  
              />
              <h1 className="text-6xl font-bold text-center">
               Anthony Wells
              </h1>
              <p className="mt-3 text-2xl text-center">
                Full Stack Software Engineer | Los Angeles, CA
              </p>
          
        
            </div>


          
             <div className=" bg-purple-300">             
              {/* add github and linked-in logo here that works as links */}

            <h1> About Me </h1>
              <p className=""> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
           
              <p className=""> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
              <p className=""> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
              <p className=""> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
              <p className=""> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
              <p className=""> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
              <p className=""> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
              <p className=" text-lg"> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I enjoy crafting robust and scalable web applications. Drawing from my background in independent filmmaking and hospitality, I bring a unique blend of creativity and technical expertise to my development work. Continuously embracing new technologies and staying up-to-date with industry trends, I am driven by a perpetual growth mindset, allowing me to deliver high-quality solutions in the ever-evolving tech landscape. </p>
            </div>
            </div>
          
            
          
        
    </main>
  )
}