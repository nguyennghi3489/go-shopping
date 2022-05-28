import "./App.scss";
import { AppBar } from "./components/universal/appbar";
import { Carousel, CarouselItem } from "./components/universal/carousel";
import { CompanyValues } from "./components/universal/company-values";
import { Footer } from "./components/universal/footer";
import { Tabs } from "./components/universal/tabs";

function App() {
    return (
        <div className="App">
            <header>
                <AppBar />
                <Carousel>
                    <CarouselItem>
                        <div>Carousel 1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>Carousel 2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>Carousel 3</div>
                    </CarouselItem>
                </Carousel>
                <CompanyValues />
                <Tabs />
                <Footer />
            </header>
        </div>
    );
}

export default App;
