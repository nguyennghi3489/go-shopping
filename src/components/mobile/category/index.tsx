import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import { useState } from "react";
import styles from "./category.module.scss";

interface ICategoryItem {
    id: number;
    label: string;
    children?: ICategoryItem[];
}

interface CategoryItemActionsProp {
    hasChildren: boolean;
    isOpen: boolean;
    collapseMenu: () => void;
    expandMenu: () => void;
}

const MenuItemActions = ({
    hasChildren,
    isOpen,
    collapseMenu,
    expandMenu,
}: CategoryItemActionsProp) => {
    return (
        <>
            {hasChildren && (
                <>
                    {isOpen ? (
                        <ArrowDropDown onClick={collapseMenu} />
                    ) : (
                        <ArrowRight onClick={expandMenu} />
                    )}
                </>
            )}
        </>
    );
};

interface SubCategoryProps {
    items: ICategoryItem[];
    isOpen: boolean;
}

const SubCategory = ({ items, isOpen }: SubCategoryProps) => {
    return (
        <>
            {isOpen && (
                <ul className={styles.subCateogry}>
                    {items.map((item: ICategoryItem) => (
                        <CategoryItem item={item} key={item.id} />
                    ))}
                </ul>
            )}
        </>
    );
};

interface CategoryItemProps {
    item: ICategoryItem;
}

const CategoryItem = ({ item }: CategoryItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const expandMenu = () => {
        setIsOpen(true);
    };
    const collapseMenu = () => {
        setIsOpen(false);
    };

    return (
        <li>
            <div className={styles.categoryItem}>
                <a>{item.label}</a>
                <MenuItemActions
                    hasChildren={!!item.children}
                    isOpen={isOpen}
                    collapseMenu={collapseMenu}
                    expandMenu={expandMenu}
                />
            </div>
            {item.children && (
                <SubCategory isOpen={isOpen} items={item.children} />
            )}
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
