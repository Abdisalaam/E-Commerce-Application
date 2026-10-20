module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "complexity": ["error", 50],
    "curly": ["error"],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-this-alias": 'off',
    "@typescript-eslint/no-var-requires": 'off',
    "no-use-before-define": "error",
    "@typescript-eslint/ban-ts-ignore": "off",
    "eqeqeq": ["error", "smart"],
    "@typescript-eslint/no-explicit-any": "off",
    "no-alert": "error",
    "no-else-return": ["error", { "allowElseIf": false }],
    "no-empty-function": "off",
    "no-script-url": "error",
    "prefer-const": "off",
    "radix": "error",
    "object-shorthand": "off",
    "react/no-deprecated": "off",
    "no-extra-boolean-cast": "off",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "max-lines": ["error", { "max": 1800, "skipComments": true, "skipBlankLines": true }],
    "max-lines-per-function": ["error", { "max": 100, "skipComments": true, "skipBlankLines": true }],
    // "no-magic-numbers": ["error", { "ignoreArrayIndexes": true, "detectObjects": false, "enforceConst": false, "ignore": [-1, 0] }], // 忽略-1和0两个魔数，常用在判断indexOf和数组长度场景
    "max-params": ["error", 6],
    "no-extend-native": [
      "error",
      {
        "exceptions": [
          "Object",
          "Array",
          "String"
        ]
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
