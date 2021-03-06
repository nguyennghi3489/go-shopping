import { Category } from ".";
import { data } from "../../../data/menu";
export default {
    /* ๐ The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Category",
    component: Category,
};
// YourComponent.stories.js|jsx

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args: any) => <Category {...args} />;

export const Web = {
    args: {
        //๐ The args you need here will depend on your component
        items: data,
    },
};
