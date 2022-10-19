// Default: https://github.com/jeanverster/chakra-ui-steps/blob/main/src/theme/index.ts
import { mode } from "@chakra-ui/theme-tools";
import { StepsStyleConfig } from "chakra-ui-steps";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var Steps = {...StepsStyleConfig, baseStyle (props) {
        const c = props.colorScheme;
        const inactiveColor = mode("gray.200", "gray.600")(props);
        const activeColor = "".concat(c, ".500");
        const baseStyle = StepsStyleConfig.baseStyle(props);
        return {...baseStyle, steps: {...baseStyle.steps, textAlign: "inherit"}, connector: {...baseStyle.connector, borderColor: inactiveColor, transitionProperty: "border-color", transitionDuration: "normal", _highlighted: {
                    borderColor: activeColor,
                }}, icon: {...baseStyle.icon, color: "var(--chakra-colors-brand-500)"}, stepIconContainer: {...baseStyle.stepIconContainer, bg: inactiveColor, borderColor: inactiveColor, transitionProperty: "background, border-color", transitionDuration: "normal", _activeStep: {
                    bg: activeColor,
                    color: mode("white", "black")(props),
                    borderColor: activeColor,
                    _invalid: {
                        bg: "red.500",
                        borderColor: "red.500",
                    },
                }, _highlighted: {
                    bg: inactiveColor,
                    borderColor: activeColor,
                }, "&[data-clickable]:hover": {
                    borderColor: activeColor,
                }}};
    }};
