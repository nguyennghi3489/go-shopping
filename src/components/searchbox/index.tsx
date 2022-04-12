import { Search } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import styles from "./searchbox.module.scss";

interface SearchBoxProps {
    onSearch: (value: string) => void;
    initialValue?: string;
}
export const SearchBox = ({ onSearch, initialValue }: SearchBoxProps) => {
    const [value, setValue] = useState(initialValue || "");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleSearch = () => {
        onSearch(value);
    };

    return (
        <div className={styles.searchBox}>
            <input
                className={styles.searchField}
                type="text"
                placeholder="Search..."
                value={value}
                onChange={handleChange}
            />
            <Search onClick={handleSearch} />
        </div>
    );
};
