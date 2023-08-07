// Should match ".editorconfig"
module.exports = {
  useTabs: false,
  tabWidth: 4,
  endOfLine: "lf",
  printWidth: 120,
  trailingComma: "all",
  overrides: [
    {
      files: ["*.js", "*.ts", "*.jsx", "*.tsx", "*.md", "*.json", "*.yml", "*.yaml", "*.jsbeautifyrc", "*.html"],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ["*.md"],
      options: {
        printWidth: 80,
      },
    },
  ],
};
