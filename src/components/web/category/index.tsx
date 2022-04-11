import { Button } from "@mui/material";
import styles from "./category.module.scss";

interface ICategoryItem {
    id: number;
    label: string;
    children?: ICategoryItem[];
}

interface SubCategoryProps {
    items: ICategoryItem[];
}

const SubCategory = ({ items }: SubCategoryProps) => {
    return (
        <ul className={styles.subCateogry}>
            {items.map((item: ICategoryItem) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </ul>
    );
};

interface CategoryItemProps {
    item: ICategoryItem;
}

const CategoryItem = ({ item }: CategoryItemProps) => {
    return (
        <li className={styles.categoryItem}>
            <Button variant="text" className={styles.categoryItemLabel}>
                {item.label}
            </Button>
            {item.children && <SubCategory items={item.children} />}
        </li>
    );
};

interface CategoryMenuProps {
    items: ICategoryItem[];
}
export const Category = ({ items }: CategoryMenuProps) => {
    return (
        <ul className={styles.category}>
            {items.map((item: ICategoryItem) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </ul>
    );
};
