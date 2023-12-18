import React, { useEffect, useState } from 'react'

function Window() {
    if (typeof window !== "undefined") {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        useEffect(() => {
          // Add event listener for window resize
          window.addEventListener('resize', handleResize);
    
          // Cleanup the event listener on component unmount
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      }

}

export default Window