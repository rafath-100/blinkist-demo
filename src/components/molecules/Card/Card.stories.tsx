import { ComponentMeta, ComponentStory } from "@storybook/react";
//import Cards from "./Card";
import Card from "./Card";

export default {
  title: "Molecule/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => <Card />;

export const CardComponent = Template.bind({});
