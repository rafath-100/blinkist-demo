import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./IconButtonComponent";

export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => (
  <IconButton {...args} />
);

