import getRestaurantsList from './api/getRestaurantsList';
import React, {useEffect, useState} from 'react';
import styles from "../styles/App.module.css";
import RestaurantList from "../components/RestaurantList"
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";
import Location from "@/components/Location";
import Link from "next/link";
import Head from "next/head";
import {useLoadScript} from "@react-google-maps/api";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


export default function Home() {

    const [restaurants, setRestaurants] = useState([])
    const [area, setArea] = useState({})
    const [loading, setLoading] = useState(false)
    const [target, setTarget] = useState()
    const [searchKeyword, setSearchKeyword] = useState()
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    });

    // initial home page with location Bang Sue
    async function init() {
        await handlerSearch('Bang Sue')
    }

    useEffect(function () {
        init()
    }, [])

    // Navigate to overlay
    function handlerTarget(placeId) {
        setTarget(
            function (prevState) {
                if (prevState === placeId) {
                    return ""
                }
                return placeId
            }
        )
    }

    function handlerKeyword(keyword) {
        setSearchKeyword(keyword)
    }

    // Call api to get restaurants list
    async function handlerSearch(keyword) {
        setLoading(true)

        try {
            if (keyword === "") {
                keyword = "Bang Sue"
            }
            const resp = await getRestaurantsList(keyword)
            if (resp.data.status.code != "SUCCESS") {
                setRestaurants([])
                return
            }
            console.log(resp.data.data)
            setRestaurants(resp.data.data.restaurants)
            setArea(resp.data.data.area)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    if (!isLoaded) return null

    return (
        <>
            <div>
                <title>Find Restaurants</title>
            </div>
            <div className={styles.header}>
                <h1> 🍕🍟 Find Restaurants 🍜🍿</h1>
            </div>
            <div className="relative items-center justify-center flex">
                <SearchBar handlerSearch={handlerSearch} handlerKeyword={handlerKeyword}/>
            </div>

            {loading
                ? <div className="mt-20">
                    <Loading/>
                </div>
                : restaurants.length > 0 ?
                (
                    <>

                        <Location restaurants={restaurants} area={area} handlerTarget={handlerTarget} target={target}/>
                        <div className={styles.section}><RestaurantList restaurants={restaurants}
                                                                        handlerTarget={handlerTarget}/></div>
                    </>
                ):
                    <div className="relative justify-center flex mt-20 text-xl">
                        <h1>{`'${searchKeyword}' not found`}</h1>
                    </div>
            }
        </>
    )
}
