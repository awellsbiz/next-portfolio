import styles from "../styles/About.module.css";
import { useState } from "react";
// special next.js images that speed up ssr caching
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function About() {
  return (
    <div id="about" className={styles.about}>

<div className={styles.profileBox}>

<div className={styles.profileImage}>
  <img
    src="/AnthonyWells.jpg"
    alt="Picture of the author"
    className={styles.profileImage}
  />

</div>

<div className= {styles.links}>
      <AiOutlineLinkedin className={styles.resumeIcon} size={30} />
  <a href="https://www.linkedin.com/in/awells91/">
      <span className={styles.resumeText}>LinkedIn</span>
     
  </a>
</div>
<div className= {styles.links}>
      <AiOutlineTwitter className={styles.resumeIcon} size={30} />
  <a href="https://twitter.com/_a_wells">
      <span className={styles.resumeText}>Twitter</span>
     
  </a>
</div>
<div className= {styles.links}>
      <AiOutlineGithub className={styles.resumeIcon} size={30} />
  <a href="https://github.com/awellsbiz" download>
      <span >GitHub</span>
     
  </a>
</div>

<div className= {styles.links}>
      <AiOutlineFileText className={styles.resumeIcon} size={30} />
  <a href="https://docs.google.com/document/d/1efuLRUtLvXwkOv10GAth3UacO26smOK92LAPJD_oABc/edit?usp=sharing" download>
      <span className={styles.resumeText}>Resume</span>
     
  </a>
  
</div>

</div>

      <div className={styles.copywrightBox}>

        <div className={styles.aboutSection}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.copywright}>
             I'm a Skilled and experienced full-stack software engineer out of Los Angeles, CA. Drawing from my 12+ years of experience in the
          restaurant and entertainment sectors, I bring a high level of
          proficiency, structure, organization, and creative thinking to my software solutions.

        </p>
        </div>

        <div className={styles.techSection}>
        <h1 className={styles.heading}>Techs</h1>

           <ul className={styles.techCopywright}>
            <li>JavaScript</li>
            <li>Python</li>
             <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Django</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
           <li>MongoDB</li>
            <li>Git</li>
            <li>GitHub</li>
    
            
          </ul> 
        </div>
      </div>

     
    </div>
  );
}
