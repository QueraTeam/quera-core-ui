import NextImage from "next/image";
import { Flex, Box, Text, FlexProps } from "@chakra-ui/react";
import emptyImage from "../../static/images/empty.png";

export interface EmptyResultProps extends FlexProps {
  size: "sm" | "md" | "lg";
  message: string;
}
export const Empty = ({
  size,
  message,
  children,
  ...flexProps
}: EmptyResultProps) => {
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
      <Box w={imageSize}>
        <NextImage
          src={emptyImage}
          alt="Not found"
          width={300}
          height={256}
          quality={90}
        />
      </Box>
      <Box mt={2}>
        <Text fontSize={["1em", null, "1.2em"]}>{message}</Text>
        {children}
      </Box>
    </Flex>
  );
};
