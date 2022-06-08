import { ReactElement } from "react";
import { Product as ProductModel } from "../../../models/product";
import { Product } from "../product";
import styles from "./product-list.module.scss";

interface Props {
    products: ProductModel[];
    productInRow?: number;
}

export const ProductList = ({
    products,
    productInRow = 4,
}: Props): ReactElement => {
    const style = {
        gridTemplateColumns: `repeat(${productInRow}, 1fr)`,
    };
    return (
        <div className={styles.container} style={style}>
            {products.map((item: ProductModel) => (
                <div className={styles.productItem}>
                    <Product data={item} />
                </div>
            ))}
        </div>
    );
};
