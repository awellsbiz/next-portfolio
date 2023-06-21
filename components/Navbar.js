// built in link component to link to routes
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMenu} from 'react-icons/ai'
import { useState, useRef, useEffect } from "react";
import styles from '../styles/Navbar.module.css'
import ScrollLink from "./ScrollLink";






export default function Navbar() {
    // useRef variable to get the navbar element and getboundingclientrect method
    const navbarRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
        
        if(navbarRef.current) {
            const navbarRect = navbarRef.current.getBoundingClientRect();
            console.log(navbarRect)
        }
    }, [])

    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
    
   

    return (
      <nav ref={navbarRef} className={`${styles.navBar} ${isVisible ? styles.fadeIn : ''}`}>
            
                <ul className={styles.links}>
                    <ScrollLink to="about">
                        <li className={styles.link}>About</li>
                    </ScrollLink>
                    <ScrollLink to='projects'>
                        <li className={styles.link}>Projects</li>
                    </ScrollLink>
                    <ScrollLink to='contact'>
                        <li className={styles.link}>Contact</li>
                    </ScrollLink>
                </ul>

        </nav>
    )
}
