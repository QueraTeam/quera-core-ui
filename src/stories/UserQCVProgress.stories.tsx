import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserQCVProgress } from "src/components/UserQCVProgress";
import avatarImage from "../../static/images/quera.png";

export default {
  title: "components/UserQCVProgress",
  component: UserQCVProgress,
  argTypes: {
    progress: {
      type: "number",
      defaultValue: 40,
    },
  },
} as ComponentMeta<typeof UserQCVProgress>;

export const Base: ComponentStory<typeof UserQCVProgress> = (args) => (
  <UserQCVProgress avatar={avatarImage} name="کوئرا" {...args} />
);
