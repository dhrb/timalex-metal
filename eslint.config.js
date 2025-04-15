import js from '@eslint/js';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';

export default [
	js.configs.recommended,
	{
		files: ['src/**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			react,
			'jsx-a11y': jsxA11y,
			prettier,
		},
		rules: {
			'prettier/prettier': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/self-closing-comp': 'error',
			'react/jsx-boolean-value': ['error', 'never'],
			'jsx-a11y/anchor-is-valid': 'warn',
			'jsx-a11y/alt-text': 'warn',
			'no-console': 'warn',
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'prefer-const': 'error',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
