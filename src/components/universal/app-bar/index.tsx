import { ReactNode } from "react";
import { Apple as AppleIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Box, Hidden } from "@mui/material";
import { Category as WebCategory } from "../../web/category";
import { SearchBox } from "../searchbox";
import styles from "./topbar.module.scss";
import { useToogle } from "../../../hooks/useToggle";
import { Menu } from "../../mobile/menu";
import { data } from "../../../data/menu";

interface Props {
    logo: ReactNode;
}
export const AppBar = ({ logo }: Props) => {
    const { toggle, isOn } = useToogle();
    return (
        <div className={styles.container}>
            <div className={styles.appBar}>
                <Hidden smDown>
                    <div className={styles.topbar}>
                        {logo}
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
                        {logo}
                        <MenuIcon
                            fontSize="large"
                            onClick={() => {
                                toggle();
                            }}
                        />
                    </div>
                    {<Menu isOpen={isOn} toggle={toggle} />}
                </Hidden>
            </div>
        </div>
    );
};
