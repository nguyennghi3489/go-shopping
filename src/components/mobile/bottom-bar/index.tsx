import { Home, Menu, Person, ShoppingCart } from "@mui/icons-material";
import styles from "./bottom-bar.module.scss";

export const BottomBar = () => {
    return (
        <div className={styles.bottomBar}>
            <div className={styles.bottomItem}>
                <Home className={styles.active} />
            </div>
            <div className={styles.bottomItem}>
                <Menu />
            </div>
            <div className={styles.bottomItem}>
                <ShoppingCart />
            </div>
            <div className={styles.bottomItem}>
                <Person />
            </div>
        </div>
    );
};
