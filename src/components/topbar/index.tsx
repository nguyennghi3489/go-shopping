import { Apple } from "@mui/icons-material";
import { Box, Hidden } from "@mui/material";
import { SearchBox } from "../searchbox";
import styles from "./topbar.module.scss";

export const TopBar = () => {
    return (
        <div className={styles.topbar}>
            <Apple fontSize="large" />
            <Hidden smDown>
                <Box className={styles.menu}>
                    <a href="#" className={styles.link}>
                        Liên Hệ
                    </a>
                    <a href="#" className={styles.link}>
                        Bảo Hành
                    </a>
                </Box>
            </Hidden>
            <SearchBox onSearch={() => {}} />
        </div>
    );
};
