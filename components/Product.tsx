import { urlFor } from '@/sanity';
import { url } from 'inspector';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


interface Props {
    product: Product;
    width: String;
}

function Product({ product, width }: Props) {
    const [windowWidth, setWindowWidth] = useState(1600);

  useEffect(() => {
    // Check if window is defined (client-side rendering)
    if (typeof window !== 'undefined') {
      // Access window.innerWidth
      setWindowWidth(window.innerWidth);

      // Add event listener for window resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); 

    return (
        
        <div className={`pt-[40px] md:pt-[60px] lg:pt-[80px] pl-3 ${ width}`}>
            
            <div className='relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[650px] w-full items-start'>
                <a href="">
                    <Image alt='' src={urlFor(product.image[0]).url()} layout='fill' objectFit='cover' />
                </a>
            </div>
            <div className='pt-4 font-light'>
                <a href="">
                    <p>{product.title}</p>
                </a>
                <p>${product.price}</p>
            </div>
        </div>
    )
}

export default Product

// ${ windowWidth<= 400 ? "w-[49%]" : "w-[31.8%]"}