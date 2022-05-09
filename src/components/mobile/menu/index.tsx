import { Close as CloseIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { data } from "../../../data/menu";
import { Category } from "../category";
import styles from "./menu.module.scss";

interface Props {
    isOpen: boolean;
    toggle: () => void;
}
export const Menu = ({ isOpen, toggle }: Props) => {
    return (
        <div className={styles.menu} style={{ left: isOpen ? 0 : "100%" }}>
            <Box className={styles.actionBar}>
                <CloseIcon onClick={toggle} />
            </Box>
            <Category items={data} />
        </div>
    );
};
