import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    {
        rules: {
            indent: ["warn", 4],
            "linebreak-style": ["warn", "unix"],
            quotes: ["warn", "double"],
            semi: ["warn", "always"],
            "no-unused-vars": ["warn"],
        },
    },
  eslintConfigPrettier,
];
