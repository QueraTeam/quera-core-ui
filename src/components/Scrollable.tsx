import * as React from "react";
import { Box, BoxProps, Link, LinkProps, HeadingProps, chakra, forwardRef } from "@chakra-ui/react";

interface ScrollableCoreProps {
  id: string | undefined;
  offset?: BoxProps["top"];
}

export const ScrollableCore = ({ id, offset = "-120px" }: ScrollableCoreProps) => (
  <Box id={id} position="relative" top={offset} visibility="hidden" />
);

export const AnchorLink = (props: LinkProps) => (
  <Link {...props} _hover={{ color: "text.brand" }} color="text.pale.extra">
    #
  </Link>
);

interface ScrollableHeaderProps extends HeadingProps {
  id: string | undefined;
  offset?: BoxProps["top"];
}

export const ScrollableHeader = forwardRef<ScrollableHeaderProps, "h2">(
  ({ id, as = "h2", offset, children, ...rest }, ref) => (
    <chakra.header
      as={as}
      ref={ref}
      {...rest}
      sx={{
        _hover: {
          ".anchorLink": {
            visibility: "unset",
          },
        },
      }}
    >
      <span>{children}</span>
      {id && (
        <>
          <AnchorLink className="anchorLink" visibility="hidden" ms={2} href={`#${id}`} />
          <ScrollableCore id={id} offset={offset} />
        </>
      )}
    </chakra.header>
  ),
);
