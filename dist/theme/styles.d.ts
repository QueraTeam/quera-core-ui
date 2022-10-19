import { StyleFunctionProps } from "@chakra-ui/theme-tools";
export declare const styles: {
    global: (props: StyleFunctionProps) => {
        body: {
            color: string;
            bg: string;
            transitionProperty: string;
            transitionDuration: string;
        };
        html: {
            fontSize: number;
            scrollBehavior: string;
            colorScheme: string;
        };
        "p, ul, ol": {
            lineHeight: number;
        };
        "*, *::before, &::after": {
            borderColor: string;
        };
    };
};
