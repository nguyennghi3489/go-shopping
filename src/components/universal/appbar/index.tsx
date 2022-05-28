import { TopBar } from "../topbar";
import styles from "./appbar.module.scss";

export const AppBar = () => {
    return (
        <div className={styles.container}>
            <TopBar />
        </div>
    );
};
