import styles from '@/styles/About.module.css'
import {useState} from 'react'
// special next.js images that speed up ssr caching 
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineFileText, AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'


export default function About() {
    
    return (
        
          
          <div className=" bg-neutral-600">
            <div className={styles.box1}>
              
              
            </div>          
              {/* add github and linked-in logo here that works as links */}
              {/* <h1 className=' text-center font-bold text-lg text-yellow-500'> Welcome to My Portfolio! </h1>
            <h1 className=' text-center font-bold text-2xl'> ⚙️🏗️🔧🕵🏾 </h1>
            <h1 className=' text-center font-bold text-lg text-yellow-500'> Currently Designing and Building My Portfolio Daily!</h1>
            <div className=' m-10 bg-neutral-700'>
            <h2 className=' text-center font-bold text-lg text-yellow-500'>About Me :</h2>
              <p className="text-center font font-semibold text-white"> As a full stack software engineer, I thrive in collaborative environments and have a passion for creative problem-solving. With a strong affinity for Next.js, React, Django REST Framework, and PostgreSQL databases, I am confident in my skills in building robust and scalable web applications. Currently transitioning from the restaurant industry as a bartender, I am eager to immerse myself in the dynamic world of technology. Relocating from Springfield, MA to Los Angeles, CA after high school to pursue a filmmaking career, I have always embraced challenges and pursued opportunities for growth…And Working in restaurants-paid the bills. The instability of the film industry has motivated me to redirect my passion for learning, problem-solving, and technology toward a career in software engineering. My work in the filmmaking world and  restaurants combined has equipped me with strong skills in organization, leading, creative problem-solving, and a strong work-ethic.
             </p>
             </div>
            <div className=' m-10 bg-neutral-700'>
              <h2 className=' text-center font-bold text-lg text-yellow-500'> General Update: </h2>
              <p className=' text-center font font-semibold text-white'>So this is my main project right now after graduating GA. I been enforcing my css skills and getting to know Tailwind and next. At first I built the navbar and made it responsive. Today and am continuing to implement Desgining routing and layout. Then, hopefully I can have it responsive by next week! After that I plan to clean up and add content! Visit Daily to see my growth!</p>
            </div>

            <div className=' m-10 bg-neutral-700 flex justify-center'>  
            <h2 className=' text-center font-bold text-lg text-yellow-500'> Contact Me:  </h2>
             <Link href='https://www.linkedin.com/in/awells91' className=' ml-2 font-semibold text-blue-400'> <AiOutlineLinkedin size={25} className=' mx-auto' />Linked In | </Link>
             
              <Link href='https://github.com/awellsbiz' className=' ml-2 font-semibold text-blue-400 '><AiOutlineGithub size={25} className=' mx-auto'/> Github | </Link>
              
              <Link href='https://docs.google.com/document/d/1efuLRUtLvXwkOv10GAth3UacO26smOK92LAPJD_oABc/edit?usp=sharing' className=' ml-2 font-semibold text-blue-400 '> <AiOutlineFileText size={25} className=' mx-auto' />Resume</Link>
            </div> */}
            </div>  
           
      
        
    )
}