import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import getRestaurantsList from './api/getRestaurantsList';
import { useEffect, useState } from 'react';
import Link from "next/link";
import styles from "../styles/App.module.css";
import RestaurantList from "../components/RestaurantList"
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    // usestate -> เก็บ state ของค่า
    // initial home page with location Bang Sue
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false)

    async function init() {
        await handlerSearch('Bang Sue')
    }

    useEffect(function () {
        init()
    }, [])

    async function handlerSearch(keyword){
        setLoading(true)
        try {
            const resp = await getRestaurantsList(keyword)
            console.log(resp.data.data)
            setRestaurants(resp.data.data)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
    <>

      {/*<main className={styles.section}>*/}
        <div>
            <title>Find Restaurants</title>
        </div>
        <div className={styles.header}>
            <h1> 🍕🍟 Find Restaurants 🍜🍿</h1>
        </div>
        <div className="relative m-20">
            <SearchBar handlerSearch={handlerSearch}/>
        </div>
        {
            loading
                ?(
                    <div> loading </div>
                )
                :(
                    <div className={styles.section}> <RestaurantList restaurants={restaurants}/></div >
                )
        }
        {/*<div className={styles.section}>*/}
        {/*    <RestaurantList restaurants={restaurants}/>*/}
        {/*</div >*/}
      {/*</main>*/}
          {/*<h1 className="title">*/}
          {/*    Hello!*/}
          {/*    <Link href="/about">*/}
          {/*        <h2>Go to About!</h2>*/}
          {/*    </Link>*/}
          {/*</h1>*/}
    </>
      // <>
      //     <Head>
      //         <title>{siteTitle}</title>
      //     </Head>
      //     <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      //         <h2 className={utilStyles.headingLg}>Search</h2>
      //         <Search />
      //     </section>
      // </>
  )
}
