"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const react_1 = require("@chakra-ui/react");
const steps_1 = require("./components/steps");
// Global style overrides
const styles_1 = require("./styles");
// Semantic tokens
const semantictokens_1 = require("./semantictokens");
// Foundational style overrides
const breakpoints_1 = require("./foundations/breakpoints");
const colors_1 = require("./foundations/colors");
const fonts_1 = require("./foundations/fonts");
const sizes_1 = require("./foundations/sizes");
const z_index_1 = require("./foundations/z-index");
// Component style overrides
const input_1 = require("./components/input");
const textarea_1 = require("./components/textarea");
const checkbox_1 = require("./components/checkbox");
const breadcrumb_1 = require("./components/breadcrumb");
const card_1 = require("./components/card");
const switch_1 = require("./components/switch");
const pagination_1 = require("./components/pagination");
const button_1 = require("./components/button");
const heading_1 = require("./components/heading");
const form_label_1 = require("./components/form-label");
const modal_1 = require("./components/modal");
const alert_1 = require("./components/alert");
const overrides = {
    direction: "rtl",
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    semanticTokens: semantictokens_1.semanticTokens,
    styles: styles_1.styles,
    breakpoints: breakpoints_1.breakpoints,
    colors: colors_1.colors,
    fonts: fonts_1.fonts,
    sizes: sizes_1.sizes,
    zIndices: z_index_1.zIndices,
    components: {
        Alert: alert_1.Alert,
        Input: input_1.Input,
        Textarea: textarea_1.Textarea,
        Checkbox: checkbox_1.Checkbox,
        Breadcrumb: breadcrumb_1.Breadcrumb,
        Card: card_1.Card,
        Switch: switch_1.Switch,
        Pagination: pagination_1.Pagination,
        Button: button_1.Button,
        Heading: heading_1.Heading,
        FormLabel: form_label_1.FormLabel,
        Modal: modal_1.Modal,
        Steps: steps_1.Steps,
    },
};
// Workaround: https://github.com/chakra-ui/chakra-ui/issues/1424#issuecomment-743342944
react_1.Tooltip.defaultProps = Object.assign(Object.assign({}, react_1.Tooltip.defaultProps), { hasArrow: false, placement: "top" });
exports.theme = (0, react_1.extendTheme)(overrides, (0, react_1.withDefaultColorScheme)({ colorScheme: "brand" }));
//# sourceMappingURL=index.js.map