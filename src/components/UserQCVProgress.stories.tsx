import * as React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { UserQCVProgress } from "./UserQCVProgress";

const meta: Meta<typeof UserQCVProgress> = {
  component: UserQCVProgress,
  parameters: {
    controls: {
      exclude: /(name)|(avatar)/g,
    },
  },
};

export const Primary: StoryObj<typeof UserQCVProgress> = {
  argTypes: {
    progress: {
      control: {
        type: "number",
      },
    },
    isMobile: {
      control: { type: "boolean" },
    },
  },
  args: {
    progress: 40,
    isMobile: false,
    avatar: "/images/quera.png",
    name: "Quera",
  },
};

export default meta;
