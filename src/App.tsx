import "./App.scss";
import { AppBar } from "./components/universal/appbar";
import { Carousel, CarouselItem } from "./components/universal/carousel";

function App() {
    return (
        <div className="App">
            <header>
                <AppBar />
                <Carousel>
                    <CarouselItem>
                        <img src={"/images/product2.jpg"} height={500} />
                    </CarouselItem>
                    <CarouselItem>
                        <img src={"/images/product1.jpg"} height={500} />
                    </CarouselItem>
                    <CarouselItem>
                        <img src={"/images/product3.jpg"} height={500} />
                    </CarouselItem>
                </Carousel>
            </header>
        </div>
    );
}

export default App;
