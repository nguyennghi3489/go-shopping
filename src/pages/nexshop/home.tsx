import { Carousel, CarouselItem } from "../../components/universal/carousel";
import { AppBar } from "../../components/universal/app-bar";
import styles from "./home.module.scss";
import { ProductList } from "../../components/universal/product-list";
import { productsData } from "../../data/products";

const Logo = () => {
    return <img src="/nexshop/images/logo.jpg" width={250} alt="logo" />;
};

const Home = () => {
    return (
        <div>
            <AppBar logo={<Logo />} />
            <div className={styles.container}>
                <Carousel>
                    <CarouselItem>
                        <img
                            className={styles.promoImage}
                            src="/nexshop/images/promo1.png"
                            alt="promo1"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img
                            className={styles.promoImage}
                            src="/nexshop/images/promo2.png"
                            alt="promo2"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img
                            className={styles.promoImage}
                            src="/nexshop/images/promo3.png"
                            alt="promo3"
                        />
                    </CarouselItem>
                </Carousel>
            </div>

            <div className={styles.container}>
                <br />
                <br />
                <h3>New Arrival</h3>
                <br />
                <ProductList products={productsData} productInRow={6} />
            </div>

            <div className={styles.container}>
                <br />
                <br />
                <h3>Best Seller</h3>
                <br />
                <ProductList products={productsData} productInRow={6} />
            </div>
        </div>
    );
};
export default Home;
