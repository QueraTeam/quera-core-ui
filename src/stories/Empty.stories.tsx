import { VStack } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Empty } from "src/components/Empty";

export default {
  title: "components/Empty",
  component: Empty,
} as ComponentMeta<typeof Empty>;

export const Base: ComponentStory<typeof Empty> = () => (
  <VStack>
    {(["sm", "md", "lg"] as const).map((size) => (
      <Empty size={size} message="گشتم نبود، نگرد نیست!" />
    ))}
  </VStack>
);
