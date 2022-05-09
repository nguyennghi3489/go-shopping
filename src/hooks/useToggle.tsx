import { useState } from "react";

export const useToogle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    };

    return { toggle, isOn };
};
