import * as React from "react";
import { HStack } from "@chakra-ui/react";
import { StoryObj, Meta } from "@storybook/react";
import { UserAvatar } from "./UserAvatar";

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
  parameters: {
    controls: {
      exclude: /(htmlTranslate)|(as)|(_.*)|(name)|(src)/g,
    },
  },
};

export const Primary: StoryObj<typeof UserAvatar> = {
  args: {
    src: "/images/quera.png",
    name: "Quera",
    circleColor: "#ff0000",
  },
  argTypes: {
    circleColor: {
      control: {
        type: "color",
      },
    },
    name: {
      control: { type: "text" },
    },
  },
};

export default meta;
