import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, HStack } from "@chakra-ui/react";

export default {
  title: "Foundation/Button",
  component: Button,
  argTypes: {
    colorScheme: {
      control: {
        type: "select",
        options: [
          "brand",
          "gray",
          "blue",
          "teal",
          "cyan",
          "purple",
          "pink",
          "green",
          "red",
          "orange",
          "yellow",
        ],
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <HStack wrap="wrap" alignItems="center" spacing={6} align="start">
    {(["xs", "sm", "md", "lg"] as const).map((size) => (
      <Button key={size} size={size} {...args}>
        دکمه با سایز {size}
      </Button>
    ))}
  </HStack>
);

export const Solid = Template.bind({});
Solid.args = {
  variant: "solid",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
};
