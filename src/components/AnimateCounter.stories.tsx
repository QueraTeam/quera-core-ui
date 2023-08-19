import * as React from "react";

import { Card, CardBody, Heading, HStack } from "@chakra-ui/react";

import type { Meta, StoryObj } from "@storybook/react";
import { AnimateCounter } from "./AnimateCounter";

const meta: Meta<typeof AnimateCounter> = {
  component: AnimateCounter,
  decorators: [
    (Story) => (
      <Card justify="center">
        <CardBody>
          <HStack spacing={40} justify="center">
            <Heading>
              <Story />
            </Heading>
          </HStack>
        </CardBody>
      </Card>
    ),
  ],
};

type Story = StoryObj<typeof AnimateCounter>;

export const Primary: Story = {
  args: {
    value: "999",
    time: 5,
  },
};

export default meta;
