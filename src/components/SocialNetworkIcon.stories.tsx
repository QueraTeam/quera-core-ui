import * as React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { HStack } from "@chakra-ui/react";
import { SocialNetworkIcon } from "./SocialNetworkIcon";

const meta: Meta<typeof SocialNetworkIcon> = {
  component: SocialNetworkIcon,
  parameters: {
    controls: {
      exclude: /(url)|(_.*)|(css)/g,
    },
  },
  decorators: [
    (Story) => (
      <HStack spacing={6} align="center" justify="center" minH={150}>
        <Story />
      </HStack>
    ),
  ],
};

export const Primary: StoryObj<typeof SocialNetworkIcon> = {
  args: {
    boxSize: 24,
    url: "#",
    type: "github",
  },
  argTypes: {
    type: {
      options: ["linkedin", "facebook", "github", "twitter", "instagram", "youtube", "google plus"],
      control: { type: "select" },
    },
    boxSize: {
      control: {
        type: "number",
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
