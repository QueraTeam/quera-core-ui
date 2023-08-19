import * as React from "react";
import type { Preview } from "@storybook/react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { theme } from "../src";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Container
          minW="full"
          sx={{
            direction: "rtl",
          }}
          dir="rtl"
        >
          <Story />
        </Container>
      </ChakraProvider>
    ),
  ],
};

export default preview;
