import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier
    },
    ignores: [
      'src/types/global.d.ts'
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error'
    },
    languageOptions: {
      globals: {
        console: 'readonly'
      }
    }
  }
);
