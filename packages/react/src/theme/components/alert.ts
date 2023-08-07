import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const Alert: ComponentStyleConfig = {
  variants: {
    solid: (props: StyleFunctionProps) => {
      const bg = props.status === "info" ? "gray" : props.colorScheme;

      return {
        container: {
          bg: mode(`${bg}.500`, `${bg}.300`)(props),
        },
      };
    },
  },
};
