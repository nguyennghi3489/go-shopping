import { data } from "../../../data/menu";
import { Category } from "../category";

export const Menu = () => {
    return (
        <div>
            <Category items={data} />
        </div>
    );
};
