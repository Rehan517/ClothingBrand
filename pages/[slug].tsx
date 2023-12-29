import { GetServerSideProps } from 'next'
import { fetchProducts } from '@/utils/fetchProducts'
import { useParams } from 'next/navigation';
import React from 'react'
import Header from '@/components/Header';
import Link from 'next/link';
import { urlFor } from '@/sanity';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/redux/basketSlice';
import toast from "react-hot-toast"

interface Props {
    products: Product[]
    // product: Product

}

function ProductPage({ products}: Props) {
    const params = useParams();
    const slug = params.slug
    const product = products.find((product) => product.slug.current === slug) as Product
    console.log(product)
    const dispatch = useDispatch();
    const addItemToBasket = () =>{
        dispatch(addToBasket(product))

        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }
    


    return (
        <div>
            <Header />
            <div className='max-w-[95%] w-[1800px] mx-auto '>
                <div className='flex pt-10 items-center'>
                    <Link href="/shop">Shop</Link>
                    <p className='px-1'>→</p>
                    <p>{product?.title}</p>
                </div>
                <div className='lg:flex pt-10'>
                    <div className='relative w-[100%] lg:w-[55%] mr-[80px] h-[60vh] lg:h-[90vh]'>
                        <Image alt='' src={urlFor(product?.image[0]).url()} layout='fill' objectFit='cover' />
                    </div>
                    <div className='w-[100%] lg:w-[40%] pt-[60px]'>
                        <p className='text-3xl font-light'>{product?.title}</p>
                        <p className='text-lg font-bold py-5'>${product?.price}.00</p>
                        <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi iste quasi voluptatem. Nihil illum id aliquam hic saepe. Suscipit earum quas quo quisquam laboriosam voluptatum excepturi enim nam deleniti?</p>
                        <p className='pb-5'>_</p>
                        <p className='font-light pb-5 underline text-sm cursor-pointer'>Size Guide</p>
                        <p className='text-sm font-bold'>SIZE:</p>
                        <select className='w-[100%] h-[50px] border border-black mt-2 pl-6' name="Size" id="">
                            <option className='font-bold' value="30">SELECT SIZE</option>
                            <option value="30">30</option>
                            <option value="32">32</option>
                            <option value="32">34</option>
                            <option value="32">36</option>
                        </select>

                        <p className='text-sm font-bold pt-7'>QUANTITY:</p>

                        <input type="number" name="" value="1" id="" className='border border-black w-[15%] lg:w-[10%] h-[50px] pl-4 font-bold mt-2'/>

                        <button className='w-[100%] border border-balck mt-10 py-4 text-white bg-black font-bold' onClick={addItemToBasket}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='bg-black mt-[150px] pt-10'>
                <Footer />
            </div>

        </div>
    )
}

export default ProductPage

//BACKEND CODE
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const products = await fetchProducts()


    return {
        props: {
            products,
        },
    };
}