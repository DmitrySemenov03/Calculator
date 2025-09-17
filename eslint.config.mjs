import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'prettier/prettier': 'error',
    },
  },
]);
