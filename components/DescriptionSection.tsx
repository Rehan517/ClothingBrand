import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity';

interface Props {
    product: Product;
}

function DescriptionSection({ product }: Props) {
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
        <div>
            <div className='lg:flex lg:items-center'>

                <div className='h-[33vh] md:h-[35vh] lg:h-screen relative w-[63%] lg:w-[50%]'>
                    <div className=' '>
                        <Image alt='' src="/park.jpg" className='' layout='fill' objectFit='cover' />
                    </div>

                    <p className='w-[100%] pt-[30px] lg:pt-[60px] text-sm md:text-xl lg:text-xl font-bold absolute -bottom-[100px]'>FOCUSED ON HIGH QUALITY MANUFACTURING

                        AND DESIGN</p>
                </div>





                <div className='lg:w-[50%] flex flex-col items-end mt-[120px] lg:mt-0'>
                    <div className={`w-[60%] lg:w-[50%]`}>

                        <div className='relative h-[240px] md:h-[500px] lg:h-[600px] w-full'>
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
                </div>

            </div>
            {/* <div>
                <p className='pt-[30px] lg:pt-[60px] sm:text-l md:text-xl lg:text-xl font-bold whitespace-pre-line'>FOCUSED ON HIGH QUALITY MANUFACTURING

                    AND DESIGN</p>
            </div> */}
        </div>
    )
}

export default DescriptionSection