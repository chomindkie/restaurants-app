import axios from 'axios';

async function getRestaurantsList(keyword) {
    return await axios.post('https://localhost:8443/restaurants-service/v1/find', {
        keyword
    });
}

export default getRestaurantsList;
