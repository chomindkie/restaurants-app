import React from "react";

import styles from "../styles/App.module.css";
import Card from "../components/Card";

// function RestaurantList(props) {
//     const {restaurants} = props
function RestaurantList({restaurants, handlerTarget}) {

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
                            onClick={
                                function () {
                                    handlerTarget(restaurant.placeId)
                                }
                            }
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default RestaurantList;
