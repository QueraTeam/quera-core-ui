"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
const theme_tools_1 = require("@chakra-ui/theme-tools");
exports.styles = {
    global: (props) => ({
        body: {
            color: (0, theme_tools_1.mode)("gray.600", "whiteAlpha.800")(props),
            bg: (0, theme_tools_1.mode)("defaultBackground", "gray.800")(props),
            transitionProperty: "unset",
            transitionDuration: "unset",
        },
        html: {
            fontSize: 14,
            scrollBehavior: "smooth",
            colorScheme: (0, theme_tools_1.mode)("light", "dark")(props),
        },
        "p, ul, ol": {
            lineHeight: 2,
        },
        "*, *::before, &::after": {
            borderColor: "border.gray",
        },
    }),
};
//# sourceMappingURL=styles.js.map