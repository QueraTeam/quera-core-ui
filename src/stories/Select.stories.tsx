import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "src/components/Select";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

interface Technology {
  label: string;
  value: string;
}

const technologies: Technology[] = [
  { label: "javascript", value: "javascript" },
  { label: "python", value: "python" },
  { label: "java", value: "java" },
  { label: "react", value: "react" },
  { label: "html", value: "html" },
];

const Template: ComponentStory<typeof Select> = (args) => (
  <Select options={technologies} {...args} />
);

export const Base: ComponentStory<typeof Select> = Template.bind({});

export const Multiple: ComponentStory<typeof Select> = Template.bind({});
Multiple.args = { isMulti: true };

export const Loading: ComponentStory<typeof Select> = Template.bind({});
Loading.args = { isLoading: true };
