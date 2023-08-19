import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VStack } from "@chakra-ui/react";
import { Empty } from "./Empty";

const meta: Meta<typeof Empty> = {
  component: Empty,
  parameters: {
    controls: {
      exclude: /emptyImage|(as)|(_.*)/g,
    },
  },
};

type Story = StoryObj<typeof Empty>;

export const Primary: Story = {
  render: ({ ...args }) => (
    <VStack>
      <Empty emptyImage={<img src="/images/empty.png" alt="Not found" width={300} height={256} />} {...args} />
    </VStack>
  ),
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    message: "گشتم نبود، نگرد نیست!",
  },
};

export default meta;
