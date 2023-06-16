import TypingAnimation from "../components/TypingAnimation";
import styles from '../styles/Hero.module.css'


export default function Hero({text,speed}) {
   
    return (
        <div className={styles.mainDiv}>
         
        <TypingAnimation text={`Anthony Wells \nSoftware Engineer \n`} speed={100}  />
      
        
        </div>
       

    )
}
