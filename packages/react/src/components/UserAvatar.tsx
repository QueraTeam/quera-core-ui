import * as React from "react";
import { forwardRef, BoxProps, Box, useColorModeValue, BorderProps } from "@chakra-ui/react";

export interface UserAvatarProps extends BoxProps {
  src: string;
  name: string;
  size?: number;
  circleColor?: BorderProps["borderColor"];
}

export const UserAvatar = forwardRef<UserAvatarProps, "div">(({ src, name, size, circleColor, ...rest }, ref) => {
  const sz = size || 72;
  const bgColor = useColorModeValue("white", "gray.700");

  return (
    <Box
      borderRadius="full"
      border="2px solid"
      borderColor={circleColor || "border.gray"}
      bg={bgColor}
      p="2px"
      boxSize={`${sz}px`}
      sx={{
        "> span": { borderRadius: "full" },
      }}
      ref={ref}
      {...rest}
    >
      {src && <img alt={`پروفایل ${name}`} src={src} width={sz} height={sz} />}
    </Box>
  );
});
