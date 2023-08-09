import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserQCVProgress } from "@querateam/qui-react";

export default {
  title: "components/UserQCVProgress",
  component: UserQCVProgress,
  argTypes: {
    progress: {
      type: "number",
      defaultValue: 40,
    },
    isMobile: {
      type: "boolean",
      defaultValue: "false",
    },
  },
} as ComponentMeta<typeof UserQCVProgress>;

export const Base: ComponentStory<typeof UserQCVProgress> = (args) => (
  <UserQCVProgress avatar="/quera-core-ui/images/quera.png" name="کوئرا" {...args} />
);
