import { ComponentMeta, ComponentStory } from "@storybook/react";
import RenderBooks from "./RenderBooks";

export default {
  title: "Organism/RenderBooks",
  component: RenderBooks,
} as ComponentMeta<typeof RenderBooks>;

const Template: ComponentStory<typeof RenderBooks> = () => <RenderBooks status={"finished"} trending={"yes"} justAdded={"no"} featured={"no"} bookLabel={"Add to Library"} />;

export const Render = Template.bind({});
