import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { reactRefresh } from 'eslint-plugin-react-refresh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['dist/**'],
  },

  ...compat.config({
    env: {
      browser: true,
      es2020: true,
    },

    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'prettier',
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: ['prettier'],

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'prettier/prettier': 'error',
    },
  }),
];