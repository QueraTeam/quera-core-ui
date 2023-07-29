import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack } from "@chakra-ui/react";
import { SocialNetworkIcon } from "src/components/SocialNetworkIcon";

export default {
  title: "Foundation/SocialNetworkIcon",
  component: SocialNetworkIcon,
  args: {
    boxSize: 24,
  },
  argTypes: {
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
} as ComponentMeta<typeof SocialNetworkIcon>;

export const Base: ComponentStory<typeof SocialNetworkIcon> = (args) => (
  <HStack spacing={6} align="center" justify="center" minH={150}>
    {(
      [
        "linkedin",
        "facebook",
        "github",
        "twitter",
        "instagram",
        "youtube",
        "google plus",
      ] as const
    ).map((type) => (
      <SocialNetworkIcon
        {...args}
        type={type}
        url="https://instagram.com/quera.ir"
        key={type}
      />
    ))}
  </HStack>
);
