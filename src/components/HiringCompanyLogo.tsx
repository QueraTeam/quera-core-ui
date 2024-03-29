import * as React from "react";
import { Box, Tooltip, BoxProps, useColorModeValue } from "@chakra-ui/react";

export const borderTypeValues = ["default", "none", "fair", "matching"] as const;
export type HiringCompanyLogoBorderType = (typeof borderTypeValues)[number];
export interface HiringCompanyLogoProps extends BoxProps {
  src: string;
  name: string;
  hiring?: boolean;
  size?: number | string;
  borderType?: HiringCompanyLogoBorderType;
}

export const HiringCompanyLogo = ({
  hiring,
  src,
  name,
  size,
  borderType = "default",
  ...boxProps
}: HiringCompanyLogoProps) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const logoSize = size || 72;

  // default case
  let borderColor = "brand.500";
  let borderWidth = "2px solid";

  if (borderType === "fair") {
    borderColor = "#00ed97";
  } else if (borderType === "matching") {
    borderColor = "orange.400";
  } else if (borderType === "none") {
    borderWidth = "none";
  }

  return (
    <Tooltip label={hiring && "شرکت در حال استخدام"}>
      <Box
        borderRadius="md"
        border={borderWidth}
        borderColor={hiring ? borderColor : "border.gray"}
        bg={bgColor}
        p="2px"
        sx={{
          "> span": { display: "block !important" },
        }}
        {...boxProps}
      >
        <img alt={`لوگوی شرکت ${name}`} src={src} width={logoSize} height={logoSize} />
      </Box>
    </Tooltip>
  );
};
