import { ProductList } from "../components/universal/product-list";
import { productsData } from "../data/products";

function Home() {
    return (
        <div
            className="App"
            style={{
                display: "flex",
                justifyContent: "center",
                background: "#ddd",
                width: 900,
            }}
        >
            <header>
                <ProductList products={productsData} />
            </header>
        </div>
    );
}

export default Home;
