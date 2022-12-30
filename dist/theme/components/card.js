"use strict";
// This component is created by Quera Team.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const theme_tools_1 = require("@chakra-ui/theme-tools");
const parts = ["card", "header", "row", "body", "footer", "button"];
const baseStyle = (props) => ({
    card: {
        boxShadow: "base",
        borderRadius: ["unset", null, "xl"],
        bg: (0, theme_tools_1.mode)("white", "gray.700")(props),
    },
    row: {},
    header: {},
    body: {},
    button: {
        bg: "transparent",
        width: "full",
        borderTopRadius: 0,
    },
});
const sizes = {
    sm: {
        row: {
            px: 3,
            py: 2,
        },
        header: {
            fontSize: "md",
            fontWeight: "medium",
        },
        body: {
            p: 3,
        },
        button: {
            py: 4,
        },
    },
    md: {
        row: {
            px: 6,
            py: 3,
        },
        header: {
            fontSize: "md",
            fontWeight: "medium",
        },
        body: {
            p: 6,
        },
        button: {
            py: 5,
        },
    },
    lg: {
        row: {
            px: 6,
            py: 4,
        },
        header: {
            fontSize: "xl",
            fontWeight: "bold",
        },
        body: {
            p: 6,
        },
        button: {
            py: 6,
        },
    },
};
exports.Card = {
    parts,
    baseStyle,
    sizes,
    defaultProps: {
        size: "lg",
    },
};
//# sourceMappingURL=card.js.map