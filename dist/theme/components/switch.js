// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/switch.ts
import { mode } from "@chakra-ui/theme-tools";

export var Switch = {
    baseStyle (props) { return ({
        thumb: {
            bg: mode("white", "gray.700")(props),
        },
    }); },
};
