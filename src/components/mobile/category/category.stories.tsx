import { Category } from ".";
import { data } from "../../../data/menu";
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Category",
    component: Category,
};

const Template = (args: any) => <Category {...args} />;

export const Mobile = {
    args: {
        items: data,
    },
};
