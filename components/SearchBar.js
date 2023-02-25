import React, {useEffect, useRef, useState} from "react";
// import { useRouter } from 'next/router'
import {FaSearch} from "react-icons/fa";
// import SearchRestaurants from "./Serach"

const SearchBar = ({handlerSearch}) => {
    // const [query, setQuery] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.keyword.value)
        const response = handlerSearch(event.target.keyword.value)
    }

    // const onChange = async (e) => {
    //     const {value} = e.target;
    //     setQuery(value)
    //     // const response = SearchRestaurants(value)
    //     console.log(value)
    //     console.log("query", query)
    // }

    return (
        <div className="items-center px-4 flex justify-center" >
            <div className="relative">
                <div className="absolute top-5 left-3" >
                    <div className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></div>
                    <FaSearch />
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="block h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none rounded-lg"
                        type="text"
                        placeholder="Bang Sue"
                        name="keyword"
                        // value={query}
                        // onChange={(event) => setQuery(event.target.value)}
                    />
                    <div className="absolute top-2 right-2">
                        <button className="h-10 w-20 text-white rounded-lg bg-[#8E0505] hover:bg-red-600">Search</button>
                    </div>
                </form>
                {/*<input*/}
                {/*    className="block h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none rounded-lg"*/}
                {/*    onChange={onChange}*/}
                {/*    type="search"*/}
                {/*    placeholder="Bang Sue"*/}
                {/*    value={query}*/}
                {/*/>*/}
                {/*<div className="absolute top-2 right-2">*/}
                {/*    <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default SearchBar