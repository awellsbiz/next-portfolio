import { useState, useEffect } from 'react';
import styles from '@/styles/TypingAnimation.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai';


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
          <div className={styles.scrollDown}>
              <AiOutlineArrowDown size={50} />
            </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default TypingAnimation;