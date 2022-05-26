import "./App.scss";
import { AppBar } from "./components/universal/appbar";
import { Carousel, CarouselItem } from "./components/universal/carousel";

function App() {
    return (
        <div className="App">
            <header>
                <AppBar />
                <Carousel>
                    <CarouselItem>Hello world 1</CarouselItem>
                    <CarouselItem>Hello world 2</CarouselItem>
                    <CarouselItem>Hello world 3</CarouselItem>
                </Carousel>
            </header>
        </div>
    );
}

export default App;
