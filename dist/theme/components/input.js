// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/input.ts
export var Input = {
    defaultProps: {
        focusBorderColor: "brand.500",
    },
    variants: {
        outline () { return ({
            field: {
                bg: "input.bg",
            },
        }); },
    },
};
