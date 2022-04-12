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
// YourComponent.stories.js|jsx

//👇 We create a “template” of how args map to rendering
const Template = (args: any) => <Category {...args} />;

export const Web = {
    args: {
        //👇 The args you need here will depend on your component
        items: data,
    },
};
