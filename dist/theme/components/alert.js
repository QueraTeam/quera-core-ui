import { mode } from "@chakra-ui/theme-tools";

export var Alert = {
    variants: {
        solid (props) {
            const bg = props.status === "info" ? "gray" : props.colorScheme;
            return {
                container: {
                    bg: mode("".concat(bg, ".500"), "".concat(bg, ".300"))(props),
                },
            };
        },
    },
};
