/**
 * @type {import('@storybook/core-common').StorybookConfig}
 */
module.exports = {
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../static", "../public"],
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-addon-next",
    "@chakra-ui/storybook-addon",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-interactions",
    "@storybook/addon-toolbars",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
  features: {
    emotionAlias: false,
  },
  typescript: {
    reactDocgen: false,
  },
};
