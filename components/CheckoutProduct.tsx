import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity';
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { addToBasket, removeFromBasket } from '@/redux/basketSlice';
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast"

interface Props {
  items: Product[];
  id: string;

}

function CheckoutProduct({ id, items }: Props) {
  console.log(items)
  const dispatch = useDispatch()
  const product = items[0] as Product
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    toast.error(`${items[0].title} removed from basket`, {
      position: "bottom-center"
    })
  }

  const addItemToBasket = () => {

    dispatch(addToBasket(product));

    toast.success(`${items[0].title} added to basket`, {
      position: "bottom-center",
    })
  }

  return (
    <div className='flex py-6 justify-between border-b-2 border-b-gray'>
      <div className='flex'>
        <div className='relative h-[120px] lg:h-[150px] w-[120px] lg:w-[150px] mr-2 lg:mr-10'>
          <Image alt='' src={urlFor(items[0].image[0]).url()} layout='fill' objectFit='cover' />
        </div>


        <h4>{items[0].title}</h4>

      </div>


      <div className='lg:flex'>
        <div className='flex lg:pr-40'>
          <MinusIcon className='h-6 w-6 cursor-pointer' onClick={removeItemFromBasket} />
          <p className='px-1 lg:px-3'>{items.length}</p>
          <PlusIcon className='h-6 w-6 cursor-pointer' onClick={addItemToBasket} />
        </div>
        <p className='pt-2 lg:pt-0 md:pt-0 lg:pr-4'>${(items[0].price * items.length).toFixed(2)}</p>
        {/* <XMarkIcon className='h-6 w-6 cursor-pointer' /> */}
      </div>

    </div>
  )
}

export default CheckoutProduct