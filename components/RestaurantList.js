import React, {useCallback} from "react";

import styles from "../styles/App.module.css";
import Card from "../components/Card";

// function RestaurantList(props) {
//     const {restaurants} = props
function RestaurantList({restaurants, handlerTarget}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const onClick = (restaurant) => useCallback(function () {
        handlerTarget(restaurant.placeId)
    }, []);

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
                            onClick={onClick(restaurant)}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default RestaurantList;
