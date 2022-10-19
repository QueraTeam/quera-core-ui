// https://chakra-ui.com/docs/styled-system/features/semantic-tokens
// chakra will generate a css variable for every semantic token. For example:
// css variable generated for `colors: { border.gray }` is `--chakra-colors-border-gray`.
export var semanticTokens = {
    colors: {
        "border.gray": {
            default: "gray.300",
            _dark: "whiteAlpha.300",
        },
        "text.pale": {
            default: "gray.500",
            _dark: "gray.400",
        },
        "text.pale.extra": {
            default: "gray.400",
            _dark: "gray.500",
        },
        "text.brand": {
            default: "brand.600",
            _dark: "brand.300",
        },
        "input.bg": {
            default: "white",
            _dark: "whiteAlpha.200",
        },
    },
};
