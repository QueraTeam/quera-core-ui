// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/switch.ts

import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const Switch = {
  baseStyle: (props: StyleFunctionProps) => ({
    thumb: {
      bg: mode("white", "gray.700")(props),
    },
  }),
};
