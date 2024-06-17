import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import { fixupConfigRules } from "@eslint/compat";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.jsx"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true }}}},
  { plugins: { 'jsx-a11y': pluginJsxA11y }, rules: pluginJsxA11y.configs.recommended.rules },
  ...fixupConfigRules(pluginJsxRuntime, pluginReactConfig)
];