import { useState, useEffect } from 'react';
import styles from '@/styles/TypingAnimation.module.css'
import Link from 'next/link'
import Navbar from './Navbar';


const TypingAnimation = ({ text, speed, onAnimationComplete}) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setInterval(() => {
        setTypedText((prevTypedText) => prevTypedText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearInterval(timer);
    } else {
     onAnimationComplete();
    }
  }, [currentIndex, text, speed]);


  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.typingText}>
        {typedText}
        <div className={styles.subHeading}>
          <p> Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default TypingAnimation;