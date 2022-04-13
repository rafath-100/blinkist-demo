import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";

export default {
  title: "Atoms/ButtonComponent",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = () => <ButtonComponent />;

export const BtnComponent = Template.bind({});
