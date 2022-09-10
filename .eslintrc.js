module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "airbnb-typescript", "prettier", "plugin:storybook/recommended"],
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "json-format",
    "prettier",
    "simple-import-sort",
  ],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
        printWidth: 120,
        arrowParens: "always",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: false,
      },
    ],
  },
  ignorePatterns: [
    "**/dist/**/*",
    ".yarn/**/*",
    ".pnp.cjs",
    ".pnp.loader.mjs",
    ".eslintrc.js",
  ],
};
