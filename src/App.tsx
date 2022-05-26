import "./App.scss";
import { AppBar } from "./components/universal/appbar";
import { Carousel, CarouselItem } from "./components/universal/carousel";

function App() {
    return (
        <div className="App">
            <header>
                <AppBar />
                <Carousel>
                    <CarouselItem>Hello world</CarouselItem>
                    <CarouselItem>Hello world</CarouselItem>
                    <CarouselItem>Hello world</CarouselItem>
                </Carousel>
            </header>
        </div>
    );
}

export default App;
