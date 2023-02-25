import React from "react";

import styles from "../styles/App.module.css";
import Card from "../components/Card";

function RestaurantList(props) {
    const {restaurants} = props
// function RestaurantList({restaurants}) {
    return (
        <main className={styles.section}>
            <section className={styles.container}>
                <div className={styles.layout}>
                    {restaurants.map((restaurant) => (
                        <Card
                            key={restaurant.placeId}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            image={restaurant.image}
                        />
                    ))}
                </div>
            </section>
        </main>
        // <ul>
        //     {restaurants.map((restaurant) => (
        //         <li key={restaurant.id}>
        //             <h2>{restaurant.name}</h2>
        //             <img src={restaurant.image} alt={restaurant.name} />
        //             <p>{restaurant.description}</p>
        //         </li>
        //     ))}
        // </ul>
    );
}

export default RestaurantList;
