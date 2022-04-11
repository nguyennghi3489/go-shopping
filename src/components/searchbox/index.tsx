import { Search } from "@mui/icons-material";
import { OutlinedInput } from "@mui/material";
import styles from "./searchbox.module.css";

export const SearchBox = () => {
    return (
        <OutlinedInput
            className={styles.searchField}
            endAdornment={<Search />}
        />
    );
};
