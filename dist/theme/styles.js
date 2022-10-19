import { mode } from "@chakra-ui/theme-tools";

export var styles = {
    global (props) { return ({
        body: {
            color: mode("gray.600", "whiteAlpha.800")(props),
            bg: mode("defaultBackground", "gray.800")(props),
            transitionProperty: "unset",
            transitionDuration: "unset",
        },
        html: {
            fontSize: 14,
            scrollBehavior: "smooth",
            colorScheme: mode("light", "dark")(props),
        },
        "p, ul, ol": {
            lineHeight: 2,
        },
        "*, *::before, &::after": {
            borderColor: "border.gray",
        },
    }); },
};
