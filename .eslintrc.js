const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    " ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true,
      " modules": true,
    },
    "sourceType": "module",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ["babel", "import", "prettier", "unicorn"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "linebreak-style": 0,
    "arrow-parens": [2, "always"],
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs"],
    "curly": 0,
    "dot-location": [1, "property"],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": 2,
    "no-alert": 2,
    "no-console": 0,
    "no-else-return": 2,
    "no-empty": [2, { allowEmptyCatch: true }],
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extra-semi": 2,
    "no-extend-native": 2,
    "no-fallthrough": 2,
    "no-implicit-coercion": [2, { allow: ["!!"] }],
    "no-implied-eval": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 0,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-restricted-globals": [2].concat(restrictedGlobals),
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-var": 2,
    "one-var": [2, "never"],
    "prefer-const": 2,
    "prefer-arrow-callback": 2,
    "quotes": [2, "double", { avoidEscape: true }],
    "yoda": 2,
    "babel/no-invalid-this": 0,
    "import/default": 0,
    "import/order": [
      2,
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      },
    ],
    "import/first": 2,
    "import/no-unresolved": 0,
    "import/no-unassigned-import": 0,
    "import/named": 2,
    "import/no-amd": 2,
    "import/no-webpack-loader-syntax": 2,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "unicorn/no-for-loop": 2,
    "unicorn/no-abusive-eslint-disable": 2,
    "unicorn/no-array-instanceof": 2,
    "unicorn/no-zero-fractions": 2,
    "unicorn/prefer-includes": 2,
    "unicorn/prefer-text-content": 2,
    "unicorn/import-index": 2,
    "unicorn/throw-new-error": 2,
    "semi": 0,
    "prettier/prettier": [1, { singleQuote: false }],
    "max-len": [1, { code: 120 }],
    "camelcase": 0,
    "no-case-declarations": 0,
    "new-cap": 0,
    "no-mixed-operators": 0,
  },
  overrides: [
    {
      files: [".d.ts"],
      rules: {
        "import/export": 0,
        "no-redeclare": 0,
      },
    },
  ],
};
