import styles from "../styles/Loading.module.css";
export default function Loading() {
    return (
        <div className={styles.loader}>
            <div className={styles.animateItem}>
                <img src={"/image/hamburger.png"}></img>
            </div>
            <div className={styles.animateItem}>
                <img src={"/image/bacon.png"}></img>
            </div>
            <div className={styles.animateItem}>
                <img src={"/image/sushi.png"}></img>
            </div>
        </div>
    );
}