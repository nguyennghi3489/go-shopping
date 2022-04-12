import { BottomBar } from ".";
export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "BottomBar",
    component: BottomBar,
};

const Template = () => <BottomBar />;

export const Mobile = {};
