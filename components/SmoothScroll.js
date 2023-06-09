import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react'
import Navbar from './Navbar';


const SmoothScroll = () => {
    const [scrollToTopVisible, setScrollToTopVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const handleScroll = () => {
        if (window.pageYOffset > 400) {
          setScrollToTopVisible(true);
        } else {
          setScrollToTopVisible(false);
        }
      };
    
      const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      return (
        <div>
          {/* Render your navigation bar or any other UI element */}
          {/*  */}
          {/* ... */}
          {/* Render your page content */}
          {/* ... */}
          {scrollToTopVisible && (
            <div
              onClick={scrollToTop}
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                cursor: "pointer",
              }}
            >
              Scroll to Top
            </div>
          )}
        </div>
      );
    };
    
    export default SmoothScroll;

