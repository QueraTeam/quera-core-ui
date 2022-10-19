declare type Dict = Record<string, any>;
export declare const Card: {
    parts: string[];
    baseStyle: (props: Dict) => {
        card: {
            boxShadow: string;
            borderRadius: string[];
            bg: string;
        };
        row: {};
        header: {};
        body: {};
        button: {
            bg: string;
            width: string;
            borderTopRadius: number;
        };
    };
    sizes: {
        sm: {
            row: {
                px: number;
                py: number;
            };
            header: {
                fontSize: string;
                fontWeight: string;
            };
            body: {
                p: number;
            };
            button: {
                py: number;
            };
        };
        md: {
            row: {
                px: number;
                py: number;
            };
            header: {
                fontSize: string;
                fontWeight: string;
            };
            body: {
                p: number;
            };
            button: {
                py: number;
            };
        };
        lg: {
            row: {
                px: number;
                py: number;
            };
            header: {
                fontSize: string;
                fontWeight: string;
            };
            body: {
                p: number;
            };
            button: {
                py: number;
            };
        };
    };
    defaultProps: {
        size: string;
    };
};
export {};
