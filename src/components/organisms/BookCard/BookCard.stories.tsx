import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookCard from "./BookCard";
import Entrepreneur from '../../../images/coverImages/Beyond.png';

export default {
  title: "Organism/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = () => <BookCard id={1} imag={Entrepreneur} bookName={"Beyond Entrepreneurship 2.0"} author={"Rafath Ali"} time={"1.5 hrs"} user={""} count={"1.9k reads"} status={"Finished"} bookLabel={""} added={""} />;

export const bookCardDetails = Template.bind({});
