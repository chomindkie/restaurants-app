import getRestaurantsList from './api/getRestaurantsList';
import {useEffect, useState} from 'react';
import styles from "../styles/App.module.css";
import RestaurantList from "../components/RestaurantList"
import SearchBar from "@/components/SearchBar";
import Loading from "@/components/Loading";
import Location from "@/components/Location";
import Link from "next/link";
import Head from "next/head";



export default function Home() {

    const [restaurants, setRestaurants] = useState([])
    const [area, setArea] = useState({})
    const [loading, setLoading] = useState(false)
    const [target, setTarget] = useState()

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

    // Call api to get restaurants list
    async function handlerSearch(keyword) {
        setLoading(true)
        try {
            if (keyword === "") {
                keyword = "Bang Sue"
            }
            const resp = await getRestaurantsList(keyword)
            console.log(resp.data.data)
            setRestaurants(resp.data.data.restaurants)
            setArea(resp.data.data.area)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div>
                <title>Find Restaurants</title>
            </div>
            <div className={styles.header}>
                <h1> 🍕🍟 Find Restaurants 🍜🍿</h1>
            </div>
            <div className="relative mt-20">
                <SearchBar handlerSearch={handlerSearch}/>
            </div>
            <div style={{width: "100vw", height: 600, marginBottom: 40, marginTop: 40}} id="google-map-section">
                <Location restaurants={restaurants} area={area} handlerTarget={handlerTarget} target={target}/>
            </div>
            {
                loading
                    ? (
                        <Loading/>
                    )
                    : (
                        <div className={styles.section}><RestaurantList restaurants={restaurants}
                                                                        handlerTarget={handlerTarget}/></div>
                    )
            }
        </>
    )
}
