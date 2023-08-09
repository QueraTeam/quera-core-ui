import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "../src/index";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize({
  serviceWorker: {
    url: "/quera-core-ui/mockServiceWorker.js",
  },
}); // Initialize MSW

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme,
  },
};

export const decorators = [
  mswDecorator, // Provide the MSW addon decorator globally
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
];
