// Default: https://github.com/jeanverster/chakra-ui-steps/blob/main/src/theme/index.ts

import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { StepsStyleConfig } from "chakra-ui-steps";

export const Steps = {
  ...StepsStyleConfig,
  baseStyle: (props: StyleFunctionProps) => {
    const { colorScheme: c } = props;
    const inactiveColor = mode("gray.200", "gray.600")(props);
    const activeColor = `${c}.500`;
    const baseStyle = StepsStyleConfig.baseStyle(props);
    return {
      ...baseStyle,
      steps: {
        ...baseStyle.steps,
        textAlign: "inherit",
      },
      connector: {
        ...baseStyle.connector,
        borderColor: inactiveColor,
        transitionProperty: "border-color",
        transitionDuration: "normal",
        _highlighted: {
          borderColor: activeColor,
        },
      },
      icon: {
        ...baseStyle.icon,
        color: "var(--chakra-colors-brand-500)",
      },
      stepIconContainer: {
        ...baseStyle.stepIconContainer,
        bg: inactiveColor,
        borderColor: inactiveColor,
        transitionProperty: "background, border-color",
        transitionDuration: "normal",
        _activeStep: {
          bg: activeColor,
          color: mode("white", "black")(props),
          borderColor: activeColor,
          _invalid: {
            bg: "red.500",
            borderColor: "red.500",
          },
        },
        _highlighted: {
          bg: inactiveColor,
          borderColor: activeColor,
        },
        "&[data-clickable]:hover": {
          borderColor: activeColor,
        },
      },
    };
  },
};
