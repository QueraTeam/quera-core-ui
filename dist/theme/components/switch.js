"use strict";
// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/switch.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const theme_tools_1 = require("@chakra-ui/theme-tools");
exports.Switch = {
    baseStyle: (props) => ({
        thumb: {
            bg: (0, theme_tools_1.mode)("white", "gray.700")(props),
        },
    }),
};
//# sourceMappingURL=switch.js.map