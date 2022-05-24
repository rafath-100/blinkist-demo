import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Organism/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Foot = Template.bind({});
