import * as React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HStack } from "@chakra-ui/react";
import { HiringCompanyLogo } from "@querateam/qui-react";

export default {
  title: "Foundation/CompanyLogo",
  component: HiringCompanyLogo,
  argTypes: {
    fairBorder: {
      control: {
        type: "select",
        options: ["brand", "gray", "blue", "teal", "cyan", "purple", "pink", "green", "red", "orange", "yellow"],
      },
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
} as ComponentMeta<typeof HiringCompanyLogo>;

const Template: ComponentStory<typeof HiringCompanyLogo> = (args) => (
  <HStack spacing={6} align="start" minH={150}>
    {([45, 80, 110, 145, 180] as const).map((size) => (
      <HiringCompanyLogo {...args} size={size} key={size} />
    ))}
  </HStack>
);

export const Base = Template.bind({});
Base.args = {
  src: "/images/quera.png",
};
