import { Paper, Button } from "@mui/material";
import { TopBar } from "../topbar";
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
        </div>
    );
};
