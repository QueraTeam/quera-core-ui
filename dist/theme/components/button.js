"use strict";
// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
exports.Button = {
    baseStyle: {
        fontWeight: "medium",
    },
    variants: {
        outline: (props) => {
            const { colorScheme: c } = props;
            return {
                border: "1px solid",
                borderColor: c === "gray" ? "border.gray" : "currentColor",
            };
        },
    },
    sizes: {
        lg: {
            fontSize: "md",
            px: 7,
        },
        md: {
            fontSize: "md",
            px: 6,
        },
        sm: {
            fontSize: "md",
            px: 4,
        },
        xs: {
            fontSize: "md",
            px: 3,
        },
    },
};
//# sourceMappingURL=button.js.map