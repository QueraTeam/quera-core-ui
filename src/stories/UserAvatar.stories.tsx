import { HStack } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserAvatar } from "src/components/UserAvatar";
import avatarImage from "../../static/images/quera.png";

export default {
  title: "Foundation/UserAvatar",
  component: UserAvatar,
  argTypes: {
    circleColor: {
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
    name: {
      control: "text",
      defaultValue: "کوئرا",
    },
  },
} as ComponentMeta<typeof UserAvatar>;

export const Base: ComponentStory<typeof UserAvatar> = (args) => (
  <HStack>
    {([45, 80, 110, 145, 180] as const).map((size) => (
      <UserAvatar key={size} size={size} src={avatarImage} {...args} />
    ))}
  </HStack>
);