import styles from '@/styles/About.module.css'
import {useState} from 'react'
// special next.js images that speed up ssr caching 
import Image from 'next/image'

export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return (
        
        <div className={styles.divBorder}>
          
            
            {/*  styled jsx exapmle */}
            <style jsx>
                {`
                .bigHeader {
                    font-size: ${fontSize}rem;
                }
                `}
            </style>
            <h1 className='bigHeader'>About Me</h1>

            <button onClick={()=> setFontSize(fontSize + 1)}> ++ </button>
            <button onClick={()=> setFontSize(fontSize - 1)}> -- </button>
            <p className={styles.greenText}>Iam a super cool software engineer now. i make neat projects with the code(put brand statement her)💻📝</p>
      
            
            {/* local images are stored in public folder*/}
            {/* regular img tags work as well if you cannot provide a width and height*/}
            {/* using another hosting domain for images */}

        </div>
        
    )
}