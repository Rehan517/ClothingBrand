import Header from '@/components/Header'
import { selectBasketItems, selectBasketTotal } from '@/redux/basketSlice'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '@/components/CheckoutProduct'
import Footer from '@/components/Footer'

function cart() {
    const items = useSelector(selectBasketItems)
    const BasketTotal = useSelector(selectBasketTotal)
    const Router = useRouter()
    const [GroupedItemsInBasket, SetGroupedItemsInBasket] = useState(
        {} as { [key: string]: Product[] }
    )
    //Group all the same items together
    useEffect(() => {
        const GroupedItems = items.reduce(
            (results, item) => {
                (results[item._id] = results[item._id] || []).push(item)
                return results
            }, {} as { [key: string]: Product[] })

            SetGroupedItemsInBasket(GroupedItems)
    }, [items])
    return (
        <div className='min-h-screen overflow-hidden bg-white'>
            <Head>
                <title>Bag - Imperial</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='mx-auto max-w-[1600px] pb-24 pt-10 px-4'>
                <div>
                    <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>
                        {items.length > 0 ? "Review your bag" : "Your bag in empty"}
                    </h1>
                    <p className='my-4'>Free deliver and free returns</p>
                    {items.length === 0 && (
                        <button onClick={() => Router.push("/")} className='bg-black text-white py-4 px-6 rounded-lg font-semibold'>
                            Continue Shopping
                        </button>
                    )

                    }
                </div>
                {items.length > 0 && (
                    <div>
                        {Object.entries(GroupedItemsInBasket).map(([key, items]) => (
                            <CheckoutProduct key={key} items ={items} id = {key}/>
                        ))}
                        <div className='my-12 mt-6 ml-auto max-w-xl'>
                            <div className='flex justify-between'>
                                <p className=''>Subtotal</p>
                                <p className='font-bold text-2xl'>${BasketTotal.toFixed(2)}</p>
                            </div>
                            <button className='w-[100%] border border-balck mt-10 py-4 text-white bg-black font-bold'>Checkout</button>
                        </div>
                    </div>
                   
                )

                }
            </main>
            
        </div>
    )
}

export default cart