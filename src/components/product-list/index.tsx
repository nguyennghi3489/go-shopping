import { Product as ProductModel } from "../../models/product";
import { Product } from "../product";
import styles from "./product-list.module.scss";

interface Props {
    products: ProductModel[];
}

export const ProductList = ({ products }: Props) => {
    return (
        <div className={styles.container}>
            {products.map((item: ProductModel) => (
                <div className={styles.productItem}>
                    <Product data={item} />
                </div>
            ))}
        </div>
    );
};
