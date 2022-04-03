import React from "react";
import Logos from './Logos'
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SearchIcon from "../../../images/Drop.svg";
import DropdownIcon from "../../../images/Vector.svg";

export default{
    title: 'Atoms/Logos',
    component: Logos
} as ComponentMeta<typeof Logos>;

const Template: ComponentStory<typeof Logos> = args => (
    <Logos {...args} />
);
export const Search = Template.bind({});
Search.args = {
    image: SearchIcon,
};
export const Drop = Template.bind({});
Drop.args = {
    image: DropdownIcon,
};
