import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from "eslint-plugin-vue";

export default [ 
  {
    languageOptions: { globals: globals.browser }
  },
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
]
