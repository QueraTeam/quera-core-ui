// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/input.ts

export const Input = {
  defaultProps: {
    focusBorderColor: "brand.500",
  },
  variants: {
    outline: () => ({
      field: {
        bg: "input.bg",
      },
    }),
  },
};
