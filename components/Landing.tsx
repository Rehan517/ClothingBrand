import Image from 'next/image'
import React from 'react'

function Landing() {
    return (
        <section className='grid grid-cols-2  items-center justify-between h-[30vh] sm:h-[50vh] md:h-[80vh] lg:h-[130vh]'>

            <div className='h-[100%] flex items-start relative'>
                <Image className="object-contain" alt='' src="/Front1.jpeg" layout='fill' objectFit='cover' />
            </div>

            <div className='w-full h-[100%] flex items-end relative'>
                <Image alt='' src="/Front2.jpeg" layout='fill' objectFit='cover' />
            </div>
        </section>
    )
}

export default Landing