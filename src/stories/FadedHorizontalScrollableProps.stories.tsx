/* eslint-disable react/no-array-index-key */
import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FadedHorizontalScrollable } from "src/components/FadedHorizontalScrollable";

export default {
  title: "components/FadedHorizontalScrollable",
  component: FadedHorizontalScrollable,
} as ComponentMeta<typeof FadedHorizontalScrollable>;

export const Base: ComponentStory<typeof FadedHorizontalScrollable> = () => (
  <FadedHorizontalScrollable>
    <HStack spacing={4} my={4}>
      {Array(10)
        .fill(1)
        .map((item, index) => (
          <Card key={index} width={200}>
            <CardBody>
              <Text whiteSpace="normal">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است.
              </Text>
            </CardBody>
          </Card>
        ))}
    </HStack>
  </FadedHorizontalScrollable>
);

export const Navigation: ComponentStory<typeof FadedHorizontalScrollable> =
  () => (
    <FadedHorizontalScrollable navigation>
      <HStack spacing={4} my={4}>
        {Array(10)
          .fill(1)
          .map((item, index) => (
            <Card key={index} width={200}>
              <CardBody>
                <Text whiteSpace="normal">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </Text>
              </CardBody>
            </Card>
          ))}
      </HStack>
    </FadedHorizontalScrollable>
  );
