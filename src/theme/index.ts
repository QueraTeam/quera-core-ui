import {
  extendTheme,
  withDefaultColorScheme,
  ColorMode,
  ThemeDirection,
  Tooltip,
} from "@chakra-ui/react";
import { Steps } from "./components/steps";

// Global style overrides
import { styles } from "./styles";

// Semantic tokens
import { semanticTokens } from "./semantictokens";

// Foundational style overrides
import { breakpoints } from "./foundations/breakpoints";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { sizes } from "./foundations/sizes";
import { zIndices } from "./foundations/z-index";

// Component style overrides
import { Input } from "./components/input";
import { Textarea } from "./components/textarea";
import { Checkbox } from "./components/checkbox";
import { Breadcrumb } from "./components/breadcrumb";
import { Card } from "./components/card";
import { Switch } from "./components/switch";
import { Pagination } from "./components/pagination";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { FormLabel } from "./components/form-label";
import { Modal } from "./components/modal";
import { Alert } from "./components/alert";

const overrides = {
  direction: "rtl" as ThemeDirection,
  config: {
    initialColorMode: "light" as ColorMode,
    useSystemColorMode: false,
  },
  semanticTokens,
  styles,
  breakpoints,
  colors,
  fonts,
  sizes,
  zIndices,
  components: {
    Alert,
    Input,
    Textarea,
    Checkbox,
    Breadcrumb,
    Card,
    Switch,
    Pagination,
    Button,
    Heading,
    FormLabel,
    Modal,
    Steps,
  },
};

// Workaround: https://github.com/chakra-ui/chakra-ui/issues/1424#issuecomment-743342944
Tooltip.defaultProps = {
  ...Tooltip.defaultProps,
  hasArrow: false,
  placement: "top",
};

export const theme = extendTheme(
  overrides,
  withDefaultColorScheme({ colorScheme: "brand" })
);
