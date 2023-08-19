import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HStack } from "@chakra-ui/react";
import { HiringCompanyLogo, borderTypeValues } from "./HiringCompanyLogo";

const meta: Meta<typeof HiringCompanyLogo> = {
  component: HiringCompanyLogo,
  parameters: {
    controls: {
      exclude: /(as)|(_.*)/g,
    },
  },
  decorators: [
    (Story) => (
      <HStack spacing={6} align="center" justifyContent="center" h="90vh" w="full">
        <Story />
      </HStack>
    ),
  ],
};

type Story = StoryObj<typeof HiringCompanyLogo>;

export const Primary: Story = {
  argTypes: {
    borderType: {
      type: "string",
      options: borderTypeValues,
    },
    name: {
      control: "string",
      defaultValue: "کوئرا",
    },
    size: {
      control: {
        type: "number",
        defaultValue: 190,
      },
    },
    hiring: {
      control: "boolean",
    },
  },
  args: {
    src: "/images/quera.png",
  },
};

export default meta;
