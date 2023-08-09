import * as React from "react";
import { VStack } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Empty } from "@querateam/qui-react";
import NextImage from "next/image";

export default {
  title: "components/Empty",
  component: Empty,
} as ComponentMeta<typeof Empty>;

export const Base: ComponentStory<typeof Empty> = () => (
  <VStack>
    {(["sm", "md", "lg"] as const).map((size) => (
      <Empty
        size={size}
        message="گشتم نبود، نگرد نیست!"
        emptyImage={<NextImage src="/images/empty.png" alt="Not found" width={300} height={256} quality={90} />}
      />
    ))}
  </VStack>
);
