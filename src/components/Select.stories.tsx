import * as React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    controls: {
      exclude: /options/g,
    },
  },
};
type Story = StoryObj<typeof Select>;

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

export const Primary: Story = {
  args: {
    options: technologies,
    isMulti: false,
    isLoading: true,
  },
};

export default meta;
