// Default: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/breadcrumb.ts

export const Breadcrumb = {
  variants: {
    oneline: {
      container: {
        overflow: "hidden",
        ol: { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" },
        li: { display: "inline" },
      },
    },
  },
};
