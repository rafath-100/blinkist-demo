import { ComponentMeta, ComponentStory } from "@storybook/react";
import Appbar from "./Appbar";

export default {
  title: "Organism/Appbar",
  component: Appbar,
} as ComponentMeta<typeof Appbar>;

const Template: ComponentStory<typeof Appbar> = () => <Appbar />;

export const App = Template.bind({});
