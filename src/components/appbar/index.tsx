import { Hidden } from "@mui/material";
import { data } from "../../data/menu";
import { BottomBar } from "../mobile/bottom-bar";
import { Category } from "../mobile/category";
import { Category as WebCategory } from "../web/category";
import styles from "./appbar.module.scss";

export const AppBar = () => {
    return (
        <div className={styles.container}>
            <Hidden smDown>
                <WebCategory items={data} />
            </Hidden>
            <Hidden smUp>
                <Category items={data} />
                <BottomBar />
            </Hidden>
        </div>
    );
};
