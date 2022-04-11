import { data } from "../../data/menu";
import { Category } from "../mobile/category";
import styles from "./appbar.module.scss";

export const AppBar = () => {
    return (
        <div className={styles.container}>
            <Category items={data} />
        </div>
    );
};
