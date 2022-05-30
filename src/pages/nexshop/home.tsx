import { Apple as AppleIcon } from "@mui/icons-material";
import { Carousel, CarouselItem } from "../../components/universal/carousel";
import { AppBar } from "../../components/universal/app-bar";

const Logo = () => {
    return <img src="/nexshop/images/logo.jpg" width={250} />;
};

const Home = () => {
    return (
        <div>
            <AppBar logo={<Logo />} />
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
        </div>
    );
};
export default Home;
