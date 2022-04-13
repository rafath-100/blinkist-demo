import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs from "./Tabs";

export default {
  title: "Organism/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => <Tabs />;

export const tabsStory = Template.bind({});
