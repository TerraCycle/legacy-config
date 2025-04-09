'use strict'

const reactPlugin = require('eslint-plugin-react')
const neostandard = require('neostandard')
const prettierConfig = require('eslint-config-prettier/flat')

// Use neostandard’s utility to figure out our "ignore" files
const ignores = [...neostandard.resolveIgnoresFromGitignore()]

const settings = {
  react: {
    version: 'detect',
  },
}

module.exports = [
  ...neostandard({
    ignores,
    noStyle: false,
    ts: false,
  }),
  prettierConfig,

  {
    files: ['**/*.{jsx,js}'],
    ignores,

    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          ecmaVersion: 'latest',
          jsx: true,
          sourceType: 'module',
        },
      },
    },

    name: 'react/recommended',

    plugins: {
      react: reactPlugin,
    },

    ...reactPlugin.configs.flat.recommended,

    settings,
  },

  {
    files: ['**/*.{jsx,js}'],
    ignores,

    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    name: 'react/jsx-runtime',

    plugins: {
      react: reactPlugin,
    },

    ...reactPlugin.configs.flat['jsx-runtime'],
    settings,
  },

  {
    files: ['**/*.{jsx,js}'],
    ignores,

    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    name: 'my-react-custom-rules',

    plugins: {
      react: reactPlugin,
    },

    settings,

    rules: {
      '@stylistic/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
          avoidEscape: true,
        },
      ],
      camelcase: 'warn',
      'prefer-template': 'error',

      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      'react/boolean-prop-naming': [
        'off',
        {
          propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        },
      ],

      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'off',

      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          children: true,
        },
      ],

      'react/jsx-key': 'error',

      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1,
          when: 'multiline',
        },
      ],

      'react/jsx-no-bind': [
        'error',
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowBind: false,
        },
      ],

      'react/jsx-no-undef': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/sort-default-props': 'error',

      'react/jsx-sort-props': [
        'error',
        {
          ignoreCase: true,
          shorthandFirst: false,
          shorthandLast: false,
        },
      ],

      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],

      'react/no-array-index-key': 'error',
      'react/no-did-mount-set-state': 'off',
      'react/no-did-update-set-state': 'error',
      'react/no-direct-mutation-state': 'off',
      'react/no-redundant-should-component-update': 'error',
      'react/no-typos': 'error',
      'react/no-will-update-set-state': 'error',
      'react/prop-types': 'error',
      'react/react-in-jsx-scope': 'error',

      'react/sort-prop-types': [
        'error',
        {
          ignoreCase: true,
          callbacksLast: false,
          requiredFirst: false,
        },
      ],

      'no-undef': 'off',
    },
  },
]
