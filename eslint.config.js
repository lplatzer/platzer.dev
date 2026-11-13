//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config"
import jsxA11y from "eslint-plugin-jsx-a11y"
import reactHooks from "eslint-plugin-react-hooks"

export default [
  {
    ignores: [
      "eslint.config.js",
      "dist/**",
      ".output/**",
      ".content-collections/**",
      "src/routeTree.gen.ts",
    ],
  },
  ...tanstackConfig,
  reactHooks.configs.flat.recommended,
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ["**/*.{jsx,tsx}"],
  },
  {
    rules: {
      "import/no-cycle": "off",
      "import/order": "off",
      "sort-imports": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/require-await": "off",
      // Base UI passes children through `render={<a />}`, which jsx-a11y can't see.
      "jsx-a11y/anchor-has-content": "off",
    },
  },
]
