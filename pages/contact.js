import Image from "next/image";
import styles from "../styles/Contact.module.css";
import {
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
export default function Contact() {
  return (
    <div id="contact" className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.label}>
          <h1 className={styles.title}>Contact Me</h1>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/awells91/">
            <AiOutlineLinkedin className={styles.resumeIcon} size={30} />
              <span className={styles.resumeText}>LinkedIn</span>
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://twitter.com/_a_wells">
            <AiOutlineTwitter className={styles.resumeIcon} size={30} />
              <span className={styles.resumeText}>Twitter</span>
            </a>
          </div>
          <div className={styles.links}>
            <a href="https://github.com/awellsbiz" download>
            <AiOutlineGithub className={styles.resumeIcon} size={30} />
              <span>GitHub</span>
            </a>
          </div>

          <div className={styles.links}>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vQ1SRm_xjFMf7CTsLocjlcXVWiIiwrfmS2KNeqHGmz6O45x5RDR0hlLh3eEgUmSP6BPkfnQfFKW588r/pub"
              download
            >
            <AiOutlineFileText className={styles.resumeIcon} size={30} />
              <span className={styles.resumeText}>Resume</span>
            </a>
          </div>

          <div className={styles.links}>
            <a href="mailto:anthony@anthonywells.codes">
            <AiOutlineMail className={styles.resumeIcon} size={30} />
              <span className={styles.resumeText}>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
