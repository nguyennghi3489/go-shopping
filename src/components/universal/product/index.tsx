import { Product as ProductModel } from "../../../models/product";
import styles from "./product.module.scss";

interface Props {
    data: ProductModel;
}

export const Product = ({ data }: Props) => {
    const { title, imgSrc, price, oldPrice } = data;
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={imgSrc} alt={title} />
            </div>
            <div className={styles.infoWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>{price}</p>
                <p className={styles.oldPrice}>{oldPrice}</p>
            </div>
        </div>
    );
};
