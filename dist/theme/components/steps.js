"use strict";
// Default: https://github.com/jeanverster/chakra-ui-steps/blob/main/src/theme/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Steps = void 0;
const theme_tools_1 = require("@chakra-ui/theme-tools");
const chakra_ui_steps_1 = require("chakra-ui-steps");
exports.Steps = Object.assign(Object.assign({}, chakra_ui_steps_1.StepsStyleConfig), { baseStyle: (props) => {
        const { colorScheme: c } = props;
        const inactiveColor = (0, theme_tools_1.mode)("gray.200", "gray.600")(props);
        const activeColor = `${c}.500`;
        const baseStyle = chakra_ui_steps_1.StepsStyleConfig.baseStyle(props);
        return Object.assign(Object.assign({}, baseStyle), { steps: Object.assign(Object.assign({}, baseStyle.steps), { textAlign: "inherit" }), connector: Object.assign(Object.assign({}, baseStyle.connector), { borderColor: inactiveColor, transitionProperty: "border-color", transitionDuration: "normal", _highlighted: {
                    borderColor: activeColor,
                } }), icon: Object.assign(Object.assign({}, baseStyle.icon), { color: "var(--chakra-colors-brand-500)" }), stepIconContainer: Object.assign(Object.assign({}, baseStyle.stepIconContainer), { bg: inactiveColor, borderColor: inactiveColor, transitionProperty: "background, border-color", transitionDuration: "normal", _activeStep: {
                    bg: activeColor,
                    color: (0, theme_tools_1.mode)("white", "black")(props),
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
                } }) });
    } });
//# sourceMappingURL=steps.js.map