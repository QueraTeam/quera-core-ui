/* eslint-disable react/no-array-index-key */
import * as React from "react";

import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { FadedHorizontalScrollable } from "./FadedHorizontalScrollable";

const meta: Meta<typeof FadedHorizontalScrollable> = {
  component: FadedHorizontalScrollable,
  parameters: {
    controls: {
      exclude: /^(?!.*\bnavigation\b).*/,
    },
  },
};

type Story = StoryObj<typeof FadedHorizontalScrollable>;

export const Base: Story = {
  argTypes: {
    navigation: {
      type: "boolean",
      description: "sets the arrows on the left or right side of the fade",
    },
  },
  render: ({ navigation }) => (
    <FadedHorizontalScrollable navigation={navigation}>
      <HStack spacing={4} my={4}>
        {Array(10)
          .fill(1)
          .map((item, index) => (
            <Card key={index} width={200}>
              <CardBody>
                <Text whiteSpace="normal">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                  و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </Text>
              </CardBody>
            </Card>
          ))}
      </HStack>
    </FadedHorizontalScrollable>
  ),
};

export default meta;
