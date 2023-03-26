import { Box, BoxProps } from "@chakra-ui/react";

export const RichText = (props: BoxProps) => (
  <Box
    {...props}
    sx={{
      "h1, h2, h3, h4, h5, h6": { marginBottom: 3, fontWeight: "bold" },
      // eslint-disable-next-line max-len
      "p + h1, p + h2, p + h3, p + h4, p + h5, p + h6, ul + h1, ul + h2, ul + h3, ul + h4, ul + h5, ul + h6":
        {
          marginTop: 5,
        },
      h2: {
        fontSize: "2xl",
      },
      h3: {
        fontSize: "xl",
      },
      "p:not(:last-child), ul:not(:last-child), ol:not(:last-child)": {
        marginBottom: 3,
      },
      "ol, ul": { paddingInlineStart: "1.5em" },
      a: {
        color: "brand.700",
      },
    }}
  />
);
