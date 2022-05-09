import Carousel from "react-material-ui-carousel";
import { Hidden, Paper, Button } from "@mui/material";
import { data } from "../../data/menu";
import { BottomBar } from "../mobile/bottom-bar";
import { Category } from "../mobile/category";
import { TopBar } from "../topbar";
import { Category as WebCategory } from "../web/category";
import styles from "./appbar.module.scss";

var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
    },
];

function Item(props: any) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">Check it out!</Button>
        </Paper>
    );
}

export const AppBar = () => {
    return (
        <div className={styles.container}>
            <TopBar />
            {/* <Hidden smDown>
                <WebCategory items={data} />
            </Hidden>
            <Hidden smUp>
                <Category items={data} />
                <BottomBar />
            </Hidden> */}
            {/* <Carousel>
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel> */}
        </div>
    );
};
