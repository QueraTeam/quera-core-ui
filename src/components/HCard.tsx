import { ReactNode } from "react";
import { Collapse, BoxProps, useColorModeValue, Box } from "@chakra-ui/react";
import { useSSRBreakpointValue } from "src/hooks/useSSRBreakpointValue";
import { Card } from "./Card";
import { HBoxProps, HBox } from "./HBox";

export interface HCardProps extends HBoxProps {
  extraTop?: ReactNode;
  extraBottom?: ReactNode;
  disabled?: boolean;
  border?: BoxProps["border"];
  borderColor?: BoxProps["borderColor"];
  showGrayBorder?: boolean;
  isOpen?: boolean;
  dropDown?: ReactNode;
}

export const HCard = ({
  title,
  size,
  image,
  url,
  isNextLink = true,
  imageExtra,
  topCorner,
  tag,
  extraTop,
  extraBottom,
  disabled,
  border = "1.5px solid",
  borderColor,
  showGrayBorder,
  children,
  isOpen,
  dropDown,
}: HCardProps) => {
  const isMobile = useSSRBreakpointValue([true, null, false]);

  const defaultBorderColor = showGrayBorder ? "border.gray" : "transparent";
  const disabledBg = useColorModeValue("whiteAlpha.600", "whiteAlpha.100");

  return (
    <Card
      as="article"
      borderBottomRadius={dropDown && isOpen && 0}
      border={!isMobile && border}
      borderColor={!isMobile && (borderColor || defaultBorderColor)}
      bg={disabled ? disabledBg : undefined}
      fontSize={["sm", null, "md"]}
    >
      {extraTop}
      <Box p={[4, null, 6]}>
        <HBox
          title={title}
          image={image}
          url={url}
          imageExtra={imageExtra}
          topCorner={topCorner}
          tag={tag}
          isNextLink={isNextLink}
          size={size}
        >
          {children}
        </HBox>
      </Box>
      {extraBottom}
      {dropDown && (
        <Collapse in={isOpen} animateOpacity>
          {dropDown}
        </Collapse>
      )}
    </Card>
  );
};
