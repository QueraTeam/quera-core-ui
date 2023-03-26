import { Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnimateCounter } from "src/components/AnimateCounter";

export default {
  title: "Components/AnimateCounter",
  component: AnimateCounter,
  decorators: [
    (Story) => (
      <Card>
        <CardBody>
          <Story />
        </CardBody>
      </Card>
    ),
  ],
} as ComponentMeta<typeof AnimateCounter>;

export const Base: ComponentStory<typeof AnimateCounter> = () => (
  <HStack spacing={40} justify="center">
    <Heading>
      <AnimateCounter time={2} value="500" />
    </Heading>
    <Heading>
      <AnimateCounter time={3} value="15" />
    </Heading>
    <Heading>
      <AnimateCounter time={1} value="2234" />
    </Heading>
  </HStack>
);
