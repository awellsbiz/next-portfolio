import { AiOutlineLink } from 'react-icons/ai'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'


export default function Projects() {
    return (
       <div id="projects" className={styles.mainContainer}>
    


    
            <div className={styles.project}>
                <a href="https://cinesearch-mavericks.netlify.app/">
                <Image 
                src="/cinesearch.png" 
                alt="Project1" 
                width={400}
                height={300}
                />
                </a> 
        </div>


        <div className={styles.projectCopy}>
            <div className={styles.projectTitle}>
            <a href=" https://cinesearch-mavericks.netlify.app/">
                <h2 className={styles.h2}>CineSearch</h2>
                </a>
                
                {/* <div className={styles.projectDescription}> */}
                
                    <p1>Search for movies and TV shows </p1> 
                        <h2 className={styles.h2}>Techs</h2> 

                        <p1>OMDB API | MongoDB | Express | React | Node.js</p1>
                       <a href=" https://cinesearch-mavericks.netlify.app/"> <p2>
                        <AiOutlineLink className={styles.icon} size={25}/> Visit Site
                        </p2></a>
                    {/* </div> */}

                    </div>
        </div>
        </div>
    
    
    )
}