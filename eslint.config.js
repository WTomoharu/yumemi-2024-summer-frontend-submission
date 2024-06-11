import globals from "globals"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"
import pluginVue from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      },
    },
  },
]
