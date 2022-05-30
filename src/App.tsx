import { Apple as AppleIcon } from "@mui/icons-material";
import { AppBar } from "./components/universal/app-bar";
import { Carousel, CarouselItem } from "./components/universal/carousel";
import { CompanyValues } from "./components/universal/company-values";
import { Footer } from "./components/universal/footer";
import { Tabs } from "./components/universal/tabs";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <header>
                <AppBar logo={<AppleIcon fontSize="medium" />} />
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
