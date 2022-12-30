"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const theme_tools_1 = require("@chakra-ui/theme-tools");
exports.Alert = {
    variants: {
        solid: (props) => {
            const bg = props.status === "info" ? "gray" : props.colorScheme;
            return {
                container: {
                    bg: (0, theme_tools_1.mode)(`${bg}.500`, `${bg}.300`)(props),
                },
            };
        },
    },
};
//# sourceMappingURL=alert.js.map