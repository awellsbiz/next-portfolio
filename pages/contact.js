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
            <AiOutlineLinkedin className={styles.resumeIcon} size={30} />
            <a href="https://www.linkedin.com/in/awells91/">
              <span className={styles.resumeText}>LinkedIn</span>
            </a>
          </div>
          <div className={styles.links}>
            <AiOutlineTwitter className={styles.resumeIcon} size={30} />
            <a href="https://twitter.com/_a_wells">
              <span className={styles.resumeText}>Twitter</span>
            </a>
          </div>
          <div className={styles.links}>
            <AiOutlineGithub className={styles.resumeIcon} size={30} />
            <a href="https://github.com/awellsbiz" download>
              <span>GitHub</span>
            </a>
          </div>

          <div className={styles.links}>
            <AiOutlineFileText className={styles.resumeIcon} size={30} />
            <a
              href="https://docs.google.com/document/d/1efuLRUtLvXwkOv10GAth3UacO26smOK92LAPJD_oABc/edit?usp=sharing"
              download
            >
              <span className={styles.resumeText}>Resume</span>
            </a>
          </div>

          <div className={styles.links}>
            <AiOutlineMail className={styles.resumeIcon} size={30} />
            <a href="mailto:anthony@anthonywells.codes">
              <span className={styles.resumeText}>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
