import { ReactNode } from "react";
import { Flex, Heading, Stack, Spacer, Box, HStack } from "@chakra-ui/react";
import { ConditionalLink } from "./ConditionalLink";

export interface HBoxProps {
  title: ReactNode;
  size?: "sm" | "md";
  image: ReactNode;
  url?: string;
  isNextLink?: boolean;
  topCorner?: ReactNode;
  imageExtra?: ReactNode;
  tag?: ReactNode;
  children: ReactNode;
}

export const HBox = ({
  title,
  size = "md",
  image,
  url,
  isNextLink = true,
  imageExtra,
  topCorner,
  tag,
  children,
}: HBoxProps) => (
  <HStack spacing={[4, null, 6]} align="stretch">
    <Box>
      <ConditionalLink
        display="block"
        href={url}
        isNextLink={isNextLink}
        isLink={url !== "" && url != null}
      >
        {image}
      </ConditionalLink>
      {imageExtra}
    </Box>
    <Stack flex={1} minW={0} spacing={size === "md" ? [1.5, null, 2] : 0.5}>
      <Flex align="center">
        {tag}
        <Heading size={size} lineHeight="tall" marginEnd={tag && 3}>
          <ConditionalLink
            href={url}
            isNextLink={isNextLink}
            isLink={url !== "" && url != null}
          >
            {title}
          </ConditionalLink>
        </Heading>
        <Spacer />
        {topCorner}
      </Flex>
      {children}
    </Stack>
  </HStack>
);
