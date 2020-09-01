module.exports = {
  extends: 'airbnb',
  ignorePatterns: ['node_modules/', 'android/', 'ios/'],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'eslint-disable import/named': 'off',
    'eslint-disable-next-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    eqeqeq: 'off',
  },
  globals: {
    fetch: false
  }
};
