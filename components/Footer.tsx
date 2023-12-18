import React from 'react'

function Footer() {
    return (
        <div className='max-w-[90%] w-[1650px] mx-auto pt-5 text-white'>
            <div>
                <div className='lg:flex justify-between'>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[100px] font-thin underline '>
                        <div className='space-y-2'>
                            <p>Shipping & Returns</p>
                            <p>Size Guide</p>
                            <p> FAQ's</p>
                        </div>
                        <div className='space-y-2'>
                            <p>About</p>
                            <p>Contact</p>
                            <p> Privacy Policy</p>
                        </div>
                        <div className='space-y-2'>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Youtube</p>
                        </div>
                    </div>
                    <div className='pt-10 lg:pt-0 pr-0 lg:pr-[100px]'>
                        <p className='pb-5 text-xs'>Sign up to recieve news and updates</p>
                        <div className='flex'>
                            <input type="email" className='py-0 lg:py-3 pr-0 lg:pr-[80px] pl-4 mr-2 text-gray-500 outline-none' placeholder="Email Address"/>
                            <button className='p-3 text-center bg-gray-900'> Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className='mt-[100px] pb-5 border-t-[1px] border-gray-100'>

                </div>
            </div>
        </div>
    )
}

export default Footer