import { useState, useEffect } from 'react';
import styles from '@/styles/TypingAnimation.module.css'
import { AiOutlineArrowDown, AiOutlineLinkedin, AiOutlineGithub, AiOutlineFileText } from 'react-icons/ai';
import Link from 'next/link'


const TypingAnimation = ({ text, speed }) => {
  const [typedText, setTypedText] = useState('');
  const [subText, setSubText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setInterval(() => {
        setTypedText((prevTypedText) => prevTypedText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
       

      }, speed);

      return () => clearInterval(timer);
    } else {
      setIsAnimationComplete(true);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (isAnimationComplete) {
      // Add logic to set the subtext here
      setSubText('Los Angeles, CA');
    }
  }, [isAnimationComplete]);

  return (
    <div className={styles.box2}>
      <div className={styles.text}>{typedText}
      {isAnimationComplete && (
        <div className={styles.fadeIxn}>
          <p className={styles.subHeading}>
            {subText}
          </p>
          <p className={styles.subHeading2}> React | Django | PostgreSQL</p>
          <div className={styles.scrollDown}>
              <AiOutlineArrowDown size={27} /> 
            </div>
            <div className={styles.links}>
             <Link href='https://www.linkedin.com/in/awells91' className={styles.links}> <AiOutlineLinkedin size={30} className=' mx-auto' /></Link>
             
              <Link href='https://github.com/awellsbiz' className={styles.links}><AiOutlineGithub size={30} className=' mx-auto'/> </Link>
              
              <Link href='https://docs.google.com/document/d/1efuLRUtLvXwkOv10GAth3UacO26smOK92LAPJD_oABc/edit?usp=sharing' className={styles.links}> <AiOutlineFileText size={30} className=' mx-auto' /></Link>
            
            </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default TypingAnimation;