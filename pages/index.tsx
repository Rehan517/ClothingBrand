import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import Banner from '@/components/Banner'
import { GetServerSideProps } from 'next'
import { fetchProducts } from '@/utils/fetchProducts'
import Product from '@/components/Product'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react'
import { urlFor } from '@/sanity';
import DescriptionSection from '@/components/DescriptionSection'
import Footer from '@/components/Footer'





const inter = Inter({ subsets: ['latin'] })

interface Props {
  products: Product[]
  
}

export default function Home({ products }: Props) {

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
    <div className=''>
      <Header />
      <main>
        <Landing />
        <Banner />
      </main>
      <section className='pb-[100px] max-w-[90%] w-[1650px] mx-auto '>

        {windowWidth <= 400 ?
          <div className='w-full flex justify-between'>
            <Product product={products[0]} key={products[0]._id} width="w-[49%]"/>
            <Product product={products[1]} key={products[1]._id} width="w-[49%]"/>

          </div>
          :
          <div className='w-full flex justify-between'>
            <Product product={products[0]} key={products[0]._id} width="w-[100%]"/>
            <Product product={products[1]} key={products[1]._id} width="w-[100%]"/>
            <Product product={products[2]} key={products[2]._id} width="w-[100%]"/>
          </div>}

      </section>

      <section className='max-w-[90%] w-[1650px] mx-auto pb-[100px]'>
        <DescriptionSection product={products[0]} key={products[0]._id}/>
      </section>

      <section className='lg:mt-[80px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-black'>
        <div className='w-[100%] relative h-[200px] md:h-[250px] lg:h-[450px]'>
        <Image className="" alt='' src="/Collage1.jpeg" layout='fill' objectFit='cover'/>
        </div>

        <div className='w-[100%] relative h-[200px] md:h-[250px] lg:h-[450px]'>
        <Image className="" alt='' src="/collage2.jpeg" layout='fill' objectFit='cover'/>
        </div>
        <div className='w-[100%] relative h-[200px] md:h-[250px] lg:h-[450px]'>
        <Image className="" alt='' src="/collage3.jpeg" layout='fill' objectFit='cover'/>
        </div>
        <div className='w-[100%] relative h-[200px] md:h-[250px] lg:h-[450px]'>
        <Image className="" alt='' src="/collage4.jpeg" layout='fill' objectFit='cover' sizes=''/>
        </div>
      </section>

      <section className='bg-black'>
        <div className='flex items-center justify-between py-10 text-white max-w-[90%] w-[1650px] mx-auto'>
          <p className='text-xs md:text-lg lg:text-lg'>FOLLOW US</p>
          <p className='text-lg lg:text-2xl  font-bold px-0 text-center'>SEEN THE LABEL</p>
          <p className='text-xs md:text-lg lg:text-lg text-right'>ON INSTAGRAM</p>
        </div>
      </section>
      
      <section className='bg-black  '>
      <Footer/>
      </section>
      
    </div>
  )
}


//BACKEND CODE
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

  const products = await fetchProducts()


  return {
    props: {
      products,
    },
  };
}
