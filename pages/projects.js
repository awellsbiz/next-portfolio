import styles from '../styles/Projects.module.css'


export default function Projects() {
    return (
       <div id="projects" className={styles.mainContainer}>
    
        <div className={styles.title}>
            <h1>Projects</h1>
        </div>

        <div className={styles.projectContainer}>
            <div className={styles.project}>
                
                <a href="https://cinesearch.vercel.app/">
                <img src="/cinesearch.png" alt="Project1" />
                </a> 
        </div>


        <div className={styles.projectCopy}>
            <div className={styles.projectTitle}>
            <a href=" https://cinesearch-mavericks.netlify.app/">
                <h2>CineSearch</h2>
                </a>
                </div>
                <div className={styles.projectDescription}>
                    <p>Search for movies and TV shows using the OMDB API.<span><br /> <br />MongoDB | Express | React | Node.js</span></p>
                    </div>
        </div>
        </div>
    
        </div>
    )
}