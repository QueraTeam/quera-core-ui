// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
export var Button = {
    baseStyle: {
        fontWeight: "medium",
    },
    variants: {
        outline (props) {
            const c = props.colorScheme;
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
