import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

function Header() {
    return (
        <header className=' grid grid-cols-2 lg:grid-cols-3 items-center p-4'>
            
                <div className='w-full space-x-4 hidden md:block lg:block'>
                    <a href="">Shop</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
                <div className='flex items-center justify-center'>
                    <div>
                        <a href="" className='text-2xl font-bold'>ABUNDANCE</a>
                    </div>
                    
                </div> 
            
            <div className='flex items-center justify-end'>
                <ShoppingBagIcon className='h-6 w-6' />
                {/* <ShoppingCartIcon className='h-6 w-6'/> */}
            </div>
        </header>
    )
}

export default Header