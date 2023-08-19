module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  globals: {
    JSX: "readonly",
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: ["dist"],
  rules: {
    camelcase: "off",
    "max-len": ["error", { code: 120, ignorePattern: "^import .*" }],
    // indent: ["error", 2],  --> conflicts with prettier
    "lines-between-class-members": "off",
    "no-use-before-define": "off", // https://stackoverflow.com/a/64024916
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "no-unused-vars": "off",
    "class-methods-use-this": "off",
    "react/jsx-no-constructed-context-values": "warn",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-shadow": "off", // https://stackoverflow.com/a/63961972
    "@typescript-eslint/no-shadow": ["error"],
    "react/prop-types": "error", // works with typescript too
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": "off",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-extraneous-dependencies": ["error", { packageDir: "." }],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/jsx-no-bind": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-fragments": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["react-icons/*", "@react-icons/*", "@mdi/react", "@mdi/svg", "@mdi/font"],
            message: "Please use @/common/icons/MdIcon and @mdi/js for icons.",
          },
          {
            group: ["moment", "luxon", "date-fns", "date-fns-jalali", "@date-io", "jalaali-js", "dayjs", "@js-joda"],
            message: "Please use Temporal for working with date and time.",
          },
        ],
        paths: [
          {
            name: "@chakra-ui/react",
            importNames: ["Image"],
            message: "Due to SSR problems, please use 'Img' component instead.",
          },
          {
            name: "@/common/utils/string",
            importNames: ["humanizePersianDigits", "persianFloat"],
            message: 'Deprecated. Use number.toLocaleString("fa-IR", options) instead.',
          },
        ],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
  },
};
