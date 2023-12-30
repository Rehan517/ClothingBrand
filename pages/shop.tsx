import Header from '@/components/Header'
import React from 'react'
import { GetServerSideProps } from 'next'
import { fetchProducts } from '@/utils/fetchProducts'
import Product from '@/components/Product'

interface Props {
    products: Product[]
    
  }

function shop({ products }: Props) {
    console.log(products)

  return (
    <div>
        <Header/>

        <section className='grid grid-cols-2 lg:grid-cols-3 max-w-[90%] w-[1650px] mx-auto '>
            {products.map((product) =>(
                
                <Product product={product} key ={product._id} width="w-[100%]"/>
                
            ))}
        </section>
    </div>
  )
}

export default shop

//BACKEND CODE
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    const products = await fetchProducts()
  
  
    return {
      props: {
        products,
      },
    };
  }