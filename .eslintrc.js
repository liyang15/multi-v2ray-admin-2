module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'Vue',
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    }],
    'camelcase': 'off',
    'array-callback-return': 'off',
    'no-shadow': 'off',
    'object-curly-newline': 'off',
    'space-infix-ops': 'error',
    'class-methods-use-this': 'off',
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
};
