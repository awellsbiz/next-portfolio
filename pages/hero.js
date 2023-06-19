import TypingAnimation from "../components/TypingAnimation";
import styles from '../styles/Hero.module.css'
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';


export default function Hero({onAnimationComplete}) {


    
      return (
        <div className={styles.mainDiv}>
          <TypingAnimation
            text={`Anthony Wells`}
            speed={100}
            onAnimationComplete={onAnimationComplete}
          />
        </div>
      );
    }
