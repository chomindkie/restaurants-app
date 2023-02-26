import axios from 'axios';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

async function getRestaurantsList(keyword) {
    return await axios.post(process.env.NEXT_PUBLIC_GET_RESTAUREANTS_LIST, {
        keyword
    });
}

export default getRestaurantsList;
