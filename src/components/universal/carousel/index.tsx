import React, { ReactElement, ReactNode, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import styles from "./carousel.module.scss";

interface CarouselItemProps {
    children: ReactNode;
}

export const CarouselItem = ({ children }: CarouselItemProps) => {
    return <div className={styles.item}>{children}</div>;
};

interface Props {
    children:
        | ReactElement<CarouselItemProps>
        | ReactElement<CarouselItemProps>[];
}

export const Carousel = ({ children }: Props) => {
    const childrenNumber = React.Children.count(children);
    const [positionX, setPositionX] = useState(0);
    const handleChange = (index: number) => {
        setPositionX(index);
    };
    const moveLeft = () => {
        setPositionX(positionX - 1);
    };

    const moveRight = () => {
        setPositionX(positionX + 1);
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.items}
                style={{
                    transform: `translateX(${positionX * -100}%)`,
                }}
            >
                {React.Children.map(children, (child) => (
                    <CarouselItem>{child}</CarouselItem>
                ))}
            </div>
            <div className={styles.midControls}>
                {positionX !== 0 && (
                    <div className={styles.leftControl} onClick={moveLeft}>
                        <ArrowBackIosIcon />
                    </div>
                )}
                {positionX !== childrenNumber - 1 && (
                    <div className={styles.rightControl} onClick={moveRight}>
                        <ArrowBackIosIcon />
                    </div>
                )}
            </div>
            <div className={styles.controls}>
                {Array(childrenNumber)
                    .fill(0)
                    .map((_, index) => {
                        return index === positionX ? (
                            <CircleIcon
                                color="action"
                                fontSize="small"
                                onClick={() => handleChange(index)}
                            />
                        ) : (
                            <CircleOutlinedIcon
                                fontSize="small"
                                onClick={() => handleChange(index)}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
