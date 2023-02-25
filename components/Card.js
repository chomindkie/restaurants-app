import React from "react";
import classNames from "classnames";
import {AiFillStar} from "react-icons/ai";
import styles from "../styles/Card.module.css";

const Card = ({title, rating, open, image, onClick}) => {

    const _onClick = () => {
        console.log("--> click")
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        onClick && onClick()
    }

    return (
        <div className={classNames([styles.wrapper, styles.wrapperAnime])} onClick={_onClick}>
            <div className={styles.header}>
                <div className={styles.imageWrapper}>
                    <img src={image? image : "/image/default.jpg"} className={styles.image} alt=""/>
                </div>
                <div className={styles.textWrapper}>
                    <div className={styles.badgeWrapper}>
                        <div
                            className={classNames([
                                styles.primaryBadge,
                                styles.badgeAnime,
                            ])}>
                            <AiFillStar/>
                            <span className={classNames([styles.counter, "group-hover:text-gray"])}>{rating}</span>
                        </div>
                    </div>
                    <h1 className={styles.text}>{`${title}`}</h1>
                </div>
            </div>
        </div>
    );
};
export default Card;