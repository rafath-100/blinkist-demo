import { ComponentMeta, ComponentStory } from "@storybook/react";
import Reading from "./Reading";

export default {
  title: "Molecule/Reading",
  component: Reading,
} as ComponentMeta<typeof Reading>;

const Template: ComponentStory<typeof Reading> = () => <Reading />;

export const Read = Template.bind({});
