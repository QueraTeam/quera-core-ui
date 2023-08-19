import { Flex, Box, Text, FlexProps } from "@chakra-ui/react";
import * as React from "react";

export interface EmptyResultProps extends FlexProps {
  size: "sm" | "md" | "lg";
  message: string;
  emptyImage: React.ReactNode;
}
export const Empty = ({ size, message, children, emptyImage, ...flexProps }: EmptyResultProps) => {
  const imageSize = {
    sm: "120px",
    md: "200px",
    lg: "300px",
  }[size];
  return (
    <Flex
      justify="center"
      align="center"
      flexDirection="column"
      textAlign="center"
      fontSize={size}
      py="3em"
      {...flexProps}
    >
      <Box w={imageSize}>{emptyImage}</Box>
      <Box mt={2}>
        <Text fontSize={["1em", null, "1.2em"]}>{message}</Text>
        {children}
      </Box>
    </Flex>
  );
};
