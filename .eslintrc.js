module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 0,
    'prefer-destructuring': ['error', {
      'object': true,
      'array': false,
    }],
    'vue/html-indent': ['error', 'tab'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      }
    }],
    "indent": ["error", "tab"],
    "quotes": ["error", "double"],
    "vue/script-indent": ["error", "tab", {
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": []
    }],
    "space-before-function-paren": ["error", "never"],
    'vue/singleline-html-element-content-newline': 'off',
  },
  overrides: [
    {
        "files": ["*.vue"],
        "rules": {
            "indent": "off"
        }
    }
  ],
};
