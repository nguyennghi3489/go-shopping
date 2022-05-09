import { useState } from "react";
import { Apple as AppleIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Box, Hidden } from "@mui/material";
import { data } from "../../data/menu";
import { Category } from "../mobile/category";
import { Category as WebCategory } from "../web/category";
import { SearchBox } from "../searchbox";
import styles from "./topbar.module.scss";
import { Menu } from "../mobile/menu";
import { useToogle } from "../../hooks/useToggle";

export const TopBar = () => {
    const { toggle, isOn } = useToogle();
    return (
        <div>
            <Hidden smDown>
                <div className={styles.topbar}>
                    <AppleIcon fontSize="large" />
                    <Box className={styles.menu}>
                        <a href="#" className={styles.link}>
                            Liên Hệ
                        </a>
                        <a href="#" className={styles.link}>
                            Bảo Hành
                        </a>
                    </Box>
                    <SearchBox onSearch={() => {}} />
                </div>
                <WebCategory items={data} />
            </Hidden>
            <Hidden smUp>
                <div className={styles.topbar}>
                    <AppleIcon fontSize="large" />
                    <MenuIcon
                        fontSize="large"
                        onClick={() => {
                            toggle();
                        }}
                    />
                </div>
                {isOn && <Menu />}
            </Hidden>
        </div>
    );
};
