import { ComponentMeta, ComponentStory } from "@storybook/react";
import Explore from "./Explore";

export default {
  title: "Molecule/Explore",
  component: Explore,
} as ComponentMeta<typeof Explore>;

const Template: ComponentStory<typeof Explore> = () => <Explore />;

export const Exploree = Template.bind({});
