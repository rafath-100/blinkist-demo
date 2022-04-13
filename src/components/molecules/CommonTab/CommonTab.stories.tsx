import { ComponentMeta, ComponentStory } from "@storybook/react";
import CommonTabs from "./CommonTab";

export default {
  title: "Molecule/CommonTabs",
  component: CommonTabs,
} as ComponentMeta<typeof CommonTabs>;

const Template: ComponentStory<typeof CommonTabs> = () => <CommonTabs />;

export const CommonTabe = Template.bind({});
